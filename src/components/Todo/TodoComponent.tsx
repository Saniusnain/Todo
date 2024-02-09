// import { useState } from 'react';
import { TiWavesOutline } from 'react-icons/ti';
import { MaleAvatars } from '../../assets/MaleAvatars';

// interface Todo {
// 	_id: string;
// 	text: string;
// 	_value: number;
// 	completed: boolean;
// }

const TodoComponent = () => {
	// const [listItems, setListItems] = useState<Todo[]>([]);
	// const [completedListItems, setcompletedListItems] = useState<Todo[]>([]);
	// const [listItem, setListItem] = useState<string>('');
	// const [edit, setEdit] = useState<boolean>(false);
	// const [todoId, setTodoId] = useState<Todo | undefined>();

	return (
		<div className='w-screen h-screen'>
			<div className='flex items-center justify-between h-20 px-4 shadow max-sm:px-2 shadow-gray-100'>
				<TiWavesOutline className='text-6xl text-white max-sm:text-5xl' />
				<img
					src={MaleAvatars[Math.floor(Math.random() * 3)]}
					alt='avatar'
					className='bg-white rounded-full max-sm:w-10 max-sm:h-10 sm:w-12 sm:h-12'
				/>
			</div>
		</div>
	);
};

export default TodoComponent;
