import { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';

interface ITodoItem {
	todo: {
		text: string;
		description: string;
		type: string;
	};
}

const TodoItem = ({ todo }: ITodoItem) => {
	const [showDescription, setShowDescription] = useState('');
	return (
		<div className='flex items-center justify-between my-1 py-2 max-sm:px-5 sm:px-5'>
			<div className='flex items-center'>
				<input type='checkbox' className='accent-pink-500' />
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
			<div className='flex ml-3'>
				<FiEdit2 className='mr-3 sm:text-xl cursor-pointer hover:text-green-400' />
				<AiOutlineDelete className=' sm:text-xl cursor-pointer hover:text-red-500' />
			</div>
		</div>
	);
};

export default TodoItem;
