import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import { useNavigate } from 'react-router-dom';
import { getToken, clearStorage } from '../../utils/utilFunctions';
import TodoFilter from './TodoFilter';
import axios, { AxiosResponse } from 'axios';
import LoadingTodo from '../UtilComponents/LoadingTodo';
import { useTodoContext, useTodoTypeContext } from '../../context/todoContext';
import { toast, ToastContainer } from 'react-toastify';

import api from '../../api/api';

interface ITodoItem {
	_id: string;
	text: string;
	completed: boolean;
	description: string;
	type: string;
	user_id: string;
	__v: number;
}

const TodoItems = () => {
	const token = getToken();
	const navigate = useNavigate();

	const { setTypeContext } = useTodoTypeContext();
	const { setTodoContext, todoContext } = useTodoContext();
	const [timeFilter, setTimeFilter] = useState('present');
	const [statusFilter, setStatusFilter] = useState('active');
	const [todos, setTodos] = useState<ITodoItem[]>([]);
	const [loading, setLoading] = useState(false);
	const [processingLoading, setProcessingLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		if (todoContext?.length > 0 && !todoContext[0]?.edit) {
			console.log('cCONTEZT--- ', todoContext);

			if (timeFilter !== todoContext[0].type) {
				setTimeFilter(todoContext[0].type);
			} else {
				const filteredList = todos.filter(
					(todo) => todo._id !== todoContext[0]._id
				);
				setTodos([...todoContext, ...filteredList]);
			}
			setTodoContext([]);
		}
	}, [todoContext]);

	useEffect(() => {
		getTodos();
	}, [statusFilter, timeFilter]);

	const errorToast = (message: string) => {
		clearStorage();
		setTimeout(() => {
			navigate('/login');
		}, 2000);
		return toast.error(`❌ ${message}`, {
			position: 'top-right',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			draggable: true,
			theme: 'light',
		});
	};
	const getTodos = async () => {
		setLoading(true);
		setErrorMessage('');
		try {
			const result: AxiosResponse = await api.get(
				`/todo/${statusFilter === 'active' ? false : true}?type=${timeFilter}`,
				{
					headers: {
						Authorization: token,
					},
				}
			);

			if (result && result.status === 200) {
				setTodos([...result.data]);
				setLoading(false);
			}
		} catch (error) {
			setLoading(false);
			if (axios.isAxiosError(error)) {
				console.log('error message: ', error.message);
				if (error.response?.status === 406) {
					errorToast(error.response?.data.error);
				} else setErrorMessage(error.response?.data.error);
			} else {
				console.log('unexpected error: ', error);
				setErrorMessage('An unexpected error occurred');
			}
		}
	};

	const handleComplete = async (id: string, status: boolean) => {
		setErrorMessage('');
		setProcessingLoading(true);
		try {
			const result: AxiosResponse = await api.put(
				`/todo/${id}/${status}`,
				{},
				{
					headers: {
						Authorization: token,
					},
				}
			);

			if (result && result.status === 200) {
				setTodos(todos.filter((todo) => todo._id !== id));
				setProcessingLoading(false);
			}
		} catch (error) {
			setLoading(false);
			if (axios.isAxiosError(error)) {
				console.log('error message: ', error.message);
				if (error.response?.status === 406) {
					errorToast(error.response?.data.error);
				} else setErrorMessage(error.response?.data.error);
			} else {
				console.log('unexpected error: ', error);
				setErrorMessage('An unexpected error occurred');
			}
		}
	};

	const handleDelete = async (id: string) => {
		setErrorMessage('');
		setProcessingLoading(true);
		try {
			const result: AxiosResponse = await api.delete(`/todo/${id}`, {
				headers: {
					Authorization: token,
				},
			});

			if (result && result.status === 200) {
				setTodos(todos.filter((todo) => todo._id !== id));
				setProcessingLoading(false);
			}
		} catch (error) {
			setLoading(false);
			if (axios.isAxiosError(error)) {
				console.log('error message: ', error.message);
				if (error.response?.status === 406) {
					errorToast(error.response?.data.error);
				} else setErrorMessage(error.response?.data.error);
			} else {
				console.log('unexpected error: ', error);
				setErrorMessage('An unexpected error occurred');
			}
		}
	};

	return (
		<div className='flex flex-col sm:px-20 mt-5 max-sm:px-10 md:px-20 lg:px-32  xl:px-80'>
			{errorMessage && (
				<h1 className='bg-slate-50 text-red-600 rounded px-2 py-1 w-full text-center mt-2 mb-4 font-bold max-sm:text-sm'>
					{errorMessage}
				</h1>
			)}
			<div className='flex justify-between mt-10 '>
				<TodoFilter
					text='Present'
					color='bg-cyan-500'
					hoverColor='bg-cyan-600'
					timeFilter={timeFilter}
					changeFilter={() => {
						setTimeFilter('present');
						setStatusFilter('active');
						setTypeContext('present');
					}}
				/>
				<TodoFilter
					text='Future'
					color='bg-fuchsia-500'
					hoverColor='bg-fuchsia-600'
					timeFilter={timeFilter}
					changeFilter={() => {
						setTimeFilter('future');
						setStatusFilter('active');
						setTypeContext('future');
					}}
				/>
				<TodoFilter
					text='Active'
					color='bg-yellow-500'
					hoverColor='bg-yellow-600'
					statusFilter={statusFilter}
					changeStatusFilter={() => {
						setStatusFilter('active');
						setTimeFilter('present');
					}}
				/>
				<TodoFilter
					text='Done'
					color='bg-red-500'
					hoverColor='bg-red-600'
					statusFilter={statusFilter}
					changeStatusFilter={() => {
						setStatusFilter('done');
						setTimeFilter('');
					}}
				/>
			</div>

			<div className='bg-slate-50  px-1 w-full mt-4 h-auto max-h-80 overflow-y-scroll overflow-x-hidden scroll-smooth' style={{scrollbarWidth:'thin'}}>
				{loading ? (
					<LoadingTodo />
				) : todos.length === 0 ? (
					<LoadingTodo text='No todos... 🎉' />
				) : (
					todos.map((todo: ITodoItem) => {
						return (
							<TodoItem
								key={todo._id}
								todo={todo}
								handleComplete={handleComplete}
								handleDelete={handleDelete}
								processingLoading={processingLoading}
								setTodoContext={setTodoContext}
							/>
						);
					})
				)}
			</div>
			<ToastContainer />
		</div>
	);
};

export default TodoItems;
