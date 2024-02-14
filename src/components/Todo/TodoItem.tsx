import { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import Loader from '../UtilComponents/Loader';
interface ITodoItem {
	todo: {
		_id: string;
		text: string;
		completed: boolean;
		description: string;
		type: string;
		user_id: string;
		__v: number;
		edit?: boolean;
	};
	handleComplete: (id: string, status: boolean) => void;
	handleDelete: (id: string) => void;
	processingLoading: boolean;
	setTodoContext:React.Dispatch<React.SetStateAction<ITodoItem[]>>
}

const TodoItem = ({
	todo,
	handleComplete,
	handleDelete,
	processingLoading,
	setTodoContext
}: ITodoItem) => {

	const [showDescription, setShowDescription] = useState('');
	const [selectedItemId, setSelectedItemId] = useState('');

	const handleEdit = (item: ITodoItem) => {
		// item["edit"] = true;
		setTodoContext([item]);
	};

	return (
		<div className='flex items-center justify-between my-1 py-2 max-sm:px-5 sm:px-5'>
			<div className='flex items-center'>
				{processingLoading && todo._id === selectedItemId ? (
					<Loader />
				) : (
					<input
						type='checkbox'
						className='accent-pink-500'
						checked={todo.completed}
						onChange={() => {
							handleComplete(todo._id, !todo.completed);
							setSelectedItemId(todo._id);
						}}
					/>
				)}
				<div className='flex flex-col'>
					<p className='ml-5 flex items-center sm:text-lg font-semibold'>
						{todo.text}
						<span
							onClick={() =>
								showDescription
									? setShowDescription('')
									: setShowDescription(todo.text)
							}
							className='ml-2 sm:hidden'
						>
							<IoIosArrowDown
								className={`${
									showDescription && showDescription === todo.text
										? 'rotate-arrow-open'
										: 'rotate-arrow-close'
								}`}
							/>
						</span>
					</p>
					<p className='ml-5 max-sm:text-xs sm:text-sm text-slate-500 text-ellipsis max-sm:hidden'>
						{todo.description}
					</p>
					{showDescription && showDescription === todo.text && (
						<p
							className={`bg-slate-50 ${
								showDescription && showDescription === todo.text
									? 'slide-open'
									: 'slide-close'
							} ml-5 max-sm:text-xs sm:text-md text-slate-500 text-ellipsis sm:hidden`}
						>
							{todo.description}
						</p>
					)}
				</div>
			</div>
			<div className='flex items-center ml-3'>
				<FiEdit2 className='mr-3 sm:text-xl cursor-pointer hover:text-green-400' onClick={() => handleEdit(todo)}/>
				<AiOutlineDelete
					className={`sm:text-xl cursor-pointer hover:text-red-500`}
					onClick={() => {
						!processingLoading && handleDelete(todo._id);
						setSelectedItemId(todo._id);
					}}
				/>
			</div>
		</div>
	);
};

export default TodoItem;
