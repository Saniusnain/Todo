import { useState, ChangeEvent } from 'react';
import axios, { AxiosResponse } from 'axios';
import TypePill from './TypePill';
import Loader from '../UtilComponents/Loader';
import {
	TODO_LENGTH_ERROR,
	TODO_DESCRIPTION_LENGTH_ERROR,
} from '../../utils/ErrorMessages';
import { getToken } from '../../utils/utilFunctions';
import { toast, ToastContainer } from 'react-toastify';

const TodoInput = () => {
	const [todoType, setTodoType] = useState('present');
	const [loading, setLoading] = useState(false);
	const [todo, setTodo] = useState('');
	const [description, setDescription] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const resetStates = () => {
		setLoading(false);
		setTodo('');
		setDescription('');
		setErrorMessage('');
	};
	const addTodo = async () => {
		if (todo.length < 3) {
			setErrorMessage(TODO_LENGTH_ERROR);
			return;
		}
		if (description && description.length < 5) {
			setErrorMessage(TODO_DESCRIPTION_LENGTH_ERROR);
			return;
		}

		const body = {
			text: todo,
			description: description,
			type: todoType,
		};
		const token = getToken();

		try {
			setLoading(true);
			setErrorMessage('');

			const result: AxiosResponse = await axios.post(
				'http://localhost:5000/todo',
				body,
				{
					headers: {
						Authorization: token,
					},
				}
			);

			if (result && result.status === 201) {
				toast('🦄 Added Succesfully!', {
					position: 'top-right',
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					draggable: true,
					theme: 'light',
				});
				setLoading(false);
				resetStates();
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

	return (
		<div className='flex flex-col items-center justify-center sm:px-20 mt-5 max-sm:px-10 md:px-20 lg:px-32  xl:px-80 '>
			{errorMessage && (
				<h1 className='bg-slate-50 text-red-600 rounded px-2 py-1 w-full text-center mt-2 mb-4 font-bold max-sm:text-sm'>
					{errorMessage}
				</h1>
			)}
			<div className='flex justify-between items-end max-sm:w-full w-11/12   '>
				<input
					type='text'
					placeholder='Add todo..'
					value={todo}
					className='font-bold text-white  w-3/5 bg-transparent  max-sm:text-lg sm:text-4xl border-t-0 border-b-4 border-l-0 border-r-0 outline-none px-2 py-1'
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setTodo(e.target.value)
					}
				/>

				<button
					className='rounded-md px-3 ml-3 py-2 text-center bg-pink-500 hover:bg-pink-500/95 text-white max-sm:font-medium sm:font-bold max-sm:text-sm sm:text-xl'
					onClick={() => todo !== '' && addTodo()}
				>
					{loading ? <Loader /> : 'Add todo'}
				</button>
			</div>

			<div className='flex justify-between items-end max-sm:w-full w-11/12 mt-3 '>
				<textarea
					placeholder='Description'
					value={description}
					className='font-medium mr-3 no-scrollbar resize-y text-white w-3/5 bg-transparent sm:text-lg border-t-0 border-b-2 border-l-0 border-r-0 outline-none px-2 py-1'
					onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
						setDescription(e.target.value)
					}
				/>
				<div className='flex max-sm:flex-col'>
					<TypePill
						type='Present'
						color='bg-cyan-500'
						hoverColor='bg-cyan-600'
						todoType={todoType}
						changeType={() => setTodoType('present')}
					/>
					<TypePill
						type='Future'
						color='bg-fuchsia-500'
						hoverColor='bg-fuchsia-600'
						todoType={todoType}
						changeType={() => setTodoType('future')}
					/>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

{
	/* <TypePill type="Present" color='bg-cyan-500'/> */
}
export default TodoInput;
