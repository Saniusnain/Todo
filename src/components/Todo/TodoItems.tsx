import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import { getToken } from '../../utils/utilFunctions';
import TodoFilter from './TodoFilter';
import axios, { AxiosResponse } from 'axios';
import LoadingTodo from '../UtilComponents/LoadingTodo';
import { useTodoContext, useTodoTypeContext } from '../../context/todoContext';

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
    const {setTypeContext} = useTodoTypeContext()
	const { setTodoContext, todoContext } = useTodoContext();
	const [timeFilter, setTimeFilter] = useState('present');
	const [statusFilter, setStatusFilter] = useState('active');
	const [todos, setTodos] = useState<ITodoItem[]>([]);
	const [loading, setLoading] = useState(false);
	const [deleteLoading, setDeleteLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		console.log('todoContext 00000  ', todoContext);
		console.log('todoContext 00000  ', todoContext.length);
		if (todoContext.length > 0) {
			setTodos([...todoContext, ...todos]);
			setTodoContext([]);
		}
	}, [todoContext]);

	useEffect(() => {
		getTodos();
	}, [statusFilter, timeFilter]);

	const getTodos = async () => {
		setLoading(true);
		setErrorMessage('');
		try {
			const result: AxiosResponse = await axios.get(
				`http://localhost:5000/todo/${
					statusFilter === 'active' ? false : true
				}?type=${timeFilter}`,
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
				setErrorMessage(error.response?.data.error);
			} else {
				console.log('unexpected error: ', error);
				setErrorMessage('An unexpected error occurred');
			}
		}
	};

	const handleComplete = async (id: string, status: boolean) => {
		setErrorMessage('');
		try {
			const result: AxiosResponse = await axios.put(
				`http://localhost:5000/todo/${id}/${status}`,
				{},
				{
					headers: {
						Authorization: token,
					},
				}
			);

			if (result && result.status === 200) {
				setTodos(todos.filter((todo) => todo._id !== id));
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.log('error message: ', error.message);
				setErrorMessage(error.response?.data.error);
			} else {
				console.log('unexpected error: ', error);
				setErrorMessage('An unexpected error occurred');
			}
		}
	};

	const handleDelete = async (id: string) => {
		setErrorMessage('');
		setDeleteLoading(true);
		try {
			const result: AxiosResponse = await axios.delete(
				`http://localhost:5000/todo/${id}`,
				{
					headers: {
						Authorization: token,
					},
				}
			);

			if (result && result.status === 200) {
				setTodos(todos.filter((todo) => todo._id !== id));
				setDeleteLoading(false);
			}
		} catch (error) {
			setDeleteLoading(false);
			if (axios.isAxiosError(error)) {
				console.log('error message: ', error.message);
				setErrorMessage(error.response?.data.error);
			} else {
				console.log('unexpected error: ', error);
				setErrorMessage('An unexpected error occurred');
			}
		}
	};

	return (
		<div className='flex flex-col sm:px-20 mt-5 max-sm:px-10 md:px-20 lg:px-32  xl:px-80 '>
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

			<div className='bg-slate-50 rounded px-1 w-full mt-4 max-h-96'>
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
								deleteLoading={deleteLoading}
							/>
						);
					})
				)}
			</div>
		</div>
	);
};

export default TodoItems;
