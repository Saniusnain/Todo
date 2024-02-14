
const LoadingTodo = ({text}:{text?:string}) => {
	return (
		<div className='flex items-center justify-between my-1 py-2 max-sm:px-5 sm:px-5'>
			<div className='flex items-center'>
				<div className='w-3 h-3 rounded bg-slate-400 animate-pulse '></div>
				<div className='flex flex-col'>
					<p className='ml-5 flex items-center sm:text-lg font-semibold'>
						{text ? <p className='text-slate-400 font-xs'>{text}</p>:<div className='h-1 w-48 bg-slate-400 animate-pulse'></div>}
					</p>
				</div>
			</div>
			<div className='flex ml-3'>
				<div className='w-3 h-3 rounded bg-slate-400 animate-pulse mr-3'></div>
				<div className='w-3 h-3 rounded bg-slate-400 animate-pulse'></div>
			</div>
		</div>
	);
};

export default LoadingTodo;
