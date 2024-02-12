import { useState, memo } from 'react';
// import { useNavigate } from "react-router-dom";
import Header from '../UtilComponents/Header';
const HeaderComponent = memo(Header);
import TodoInput from './TodoInput';
import TodoItems from './TodoItems';
// interface Todo {
// 	_id: string;
// 	text: string;
// 	_value: number;
// 	completed: boolean;
// }

const TodoComponent = () => {
	// const navigate = useNavigate();

	// const [listItems, setListItems] = useState<Todo[]>([]);
	// const [completedListItems, setcompletedListItems] = useState<Todo[]>([]);
	// const [listItem, setListItem] = useState<string>('');
	// const [edit, setEdit] = useState<boolean>(false);
	// const [todoId, setTodoId] = useState<Todo | undefined>();

	return (
		<div className='w-screen h-screen'>
			<HeaderComponent />
			<TodoInput />
			<TodoItems />
		</div>
	);
};

export default TodoComponent;
