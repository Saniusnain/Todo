import { useState, memo } from 'react';
// import { useNavigate } from "react-router-dom";
import Header from '../UtilComponents/Header';
const HeaderComponent = memo(Header);
import TodoInput from './TodoInput';
// interface Todo {
// 	_id: string;
// 	text: string;
// 	_value: number;
// 	completed: boolean;
// }

const TodoComponent = () => {
	// const navigate = useNavigate();
	const [filter, setFilter] = useState('present');
	// const [listItems, setListItems] = useState<Todo[]>([]);
	// const [completedListItems, setcompletedListItems] = useState<Todo[]>([]);
	// const [listItem, setListItem] = useState<string>('');
	// const [edit, setEdit] = useState<boolean>(false);
	// const [todoId, setTodoId] = useState<Todo | undefined>();


	return (
		<div className='w-screen h-screen'>
			<HeaderComponent />
			<div className='flex m-5'>
				<div
          onClick={()=>setFilter('present')}
					className={`max-sm:px-2 cursor-pointer max-sm:py-1 rounded-l-lg sm:px-4 sm:py-2 text-center text-white font-semibold hover:bg-cyan-600 ${filter === 'present' ? 'bg-cyan-600 border-r-0 border-t-2 border-l-2 border-b-2 border-cyan-300' : 'bg-cyan-500'}`}
				>
					<p className='text-center'>Present</p>
				</div>
				<div
          onClick={()=>setFilter('future')}
					className={`max-sm:px-2 cursor-pointer max-sm:py-1 rounded-r-lg sm:px-4 sm:py-2 text-center text-white font-semibold hover:bg-fuchsia-600 ${filter === 'future' ? 'bg-fuchsia-600 border-l-0 border-t-2 border-r-2 border-b-2 border-fuchsia-300' : 'bg-fuchsia-500'}`}
				>
					<p className='text-center'>Future</p>
				</div>
			</div>
			<TodoInput />
		</div>
	);
};

export default TodoComponent;
