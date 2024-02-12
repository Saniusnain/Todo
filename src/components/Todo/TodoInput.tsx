import TypePill from "./TypePill";
const TodoInput = () => {
	return (
		<div className="flex flex-col items-center px-20 border border-red-600">
			<div className="flex w-full">
        <input
          type='text'
          placeholder='Add todo..'
          className='font-bold text-white bg-transparent w-2/4 sm:text-4xl border-t-0 border-b-4 border-l-0 border-r-0 outline-none px-2 py-1'
        />


        <button className='rounded-md px-3 py-2 bg-pink-500 text-white font-bold sm:text-xl'>
          Add todo
        </button>
      </div>

      <div className="flex w-full">
        {/* <TypePill type="Present" color='bg-cyan-500'/> */}
        <textarea
          placeholder='description'
          className='font-medium text-white bg-transparent w-2/4 sm:text-xl border-t-0 border-b-2 border-l-0 border-r-0 outline-none sm:px-2 sm:py-1'
          />
        <TypePill type="Present" color='bg-yellow-500' hoverColor='bg-yellow-600'/>
        <TypePill type="Future" color='bg-fuchsia-500' hoverColor='bg-fuchsia-600'/>
      </div>
		</div>
	);
};

export default TodoInput;
