import {useState} from 'react';


interface Todo {
	_id: string;
	text: string;
	_value: number;
	completed: boolean;
}

const TodoComponent = () => {
    const [listItems, setListItems] = useState<Todo[]>([]);
	const [completedListItems, setcompletedListItems] = useState<Todo[]>([]);
	const [listItem, setListItem] = useState<string>('');
	const [edit, setEdit] = useState<boolean>(false);
	const [todoId, setTodoId] = useState<Todo | undefined>();

	return (
		<div className='todo_container'>
			<h1>ToDo List</h1>
		</div>
	);
};

export default TodoComponent;
