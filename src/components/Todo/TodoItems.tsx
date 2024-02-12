import { useState } from 'react';

const TodoItems = () => {
	const [filter, setFilter] = useState('present');
	return (
		<div className='flex flex-col sm:px-20 mt-5 max-sm:px-10 md:px-20  lg:px-32  xl:px-80'>
			<div className='flex m-7 sm:ml-10 sm:mt-10'>
				<div
					onClick={() => setFilter('present')}
					className={`max-sm:px-2 cursor-pointer max-sm:py-1 rounded-l-lg max-sm:text-xs sm:px-4 sm:py-2 text-center text-white font-semibold hover:bg-cyan-600 ${
						filter === 'present'
							? 'bg-cyan-600 border-r-0 border-t-2 border-l-2 border-b-2 border-yellow-300'
							: 'bg-cyan-500'
					}`}
				>
					<p className='text-center'>Present</p>
				</div>
				<div
					onClick={() => setFilter('future')}
					className={`max-sm:px-2 cursor-pointer max-sm:py-1 rounded-r-lg max-sm:text-xs sm:px-4 sm:py-2 text-center text-white font-semibold hover:bg-fuchsia-600 ${
						filter === 'future'
							? 'bg-fuchsia-600 border-l-0 border-t-2 border-r-2 border-b-2 border-yellow-300'
							: 'bg-fuchsia-500'
					}`}
				>
					<p className='text-center'>Future</p>
				</div>
			</div>
		</div>
	);
};

export default TodoItems;
