import { memo } from 'react';
import Header from '../UtilComponents/Header';
const HeaderComponent = memo(Header);
import TodoInput from './TodoInput';
import TodoItems from './TodoItems';

const TodoComponent = () => {
	return (
		<div className='w-screen'>
			<HeaderComponent />
			<TodoInput />
			<TodoItems />
		</div>
	);
};

export default TodoComponent;
