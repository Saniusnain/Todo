import { useState } from 'react';
import TypePill from './TypePill';

const TodoInput = () => {
	const [todoType, setTodoType] = useState('present');

	return (
		<div className='flex flex-col items-center justify-center sm:px-20 mt-5 max-sm:px-10 md:px-20 lg:px-32  xl:px-80 '>
			<div className='flex justify-between items-end max-sm:w-full w-11/12   '>
				<input
					type='text'
					placeholder='Add todo..'
					className='font-bold text-white  w-3/5 bg-transparent  max-sm:text-lg sm:text-4xl border-t-0 border-b-4 border-l-0 border-r-0 outline-none px-2 py-1'
				/>

				<button className='rounded-md px-3 ml-3 py-2 text-center bg-pink-500 hover:bg-pink-500/95 text-white max-sm:font-medium sm:font-bold max-sm:text-sm sm:text-xl'>
					Add todo
				</button>
			</div>

			<div className='flex justify-between items-end max-sm:w-full w-11/12 mt-3 '>
				<textarea
					placeholder='Description'
					className='font-medium mr-3 no-scrollbar resize-y text-white w-3/5 bg-transparent sm:text-lg border-t-0 border-b-2 border-l-0 border-r-0 outline-none px-2 py-1'
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
		</div>
	);
};

{
	/* <TypePill type="Present" color='bg-cyan-500'/> */
}
export default TodoInput;
