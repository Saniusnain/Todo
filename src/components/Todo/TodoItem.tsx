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
		<div className='flex items-center  my-1 p-3'>
            <input type="checkbox" className="accent-pink-500" />
			{todo.text}
			<FiEdit2 />
			<AiOutlineDelete />
		</div>
	);
};

export default TodoItem;
