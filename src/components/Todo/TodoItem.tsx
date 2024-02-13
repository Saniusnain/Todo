import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';

interface ITodoItem {
	todo: {
		text: string;
		description: string;
		type: string;
	};
}
const TodoItem = ({ todo }: ITodoItem) => {
	return (
		<div className='flex items-center justify-between my-1 py-2 max-sm:px-5 sm:px-20'>
			<div className='flex items-center'>
				<input type='checkbox' className='accent-pink-500 w-4 h-4' />
				<p className='ml-5 sm:text-lg'>{todo.text}</p>
			</div>
			<div className='flex'>
				<FiEdit2 className='mr-2 sm:text-xl cursor-pointer hover:text-green-400'/>
				<AiOutlineDelete className=' sm:text-xl cursor-pointer hover:text-red-500'/>
			</div>
		</div>
	);
};

export default TodoItem;
