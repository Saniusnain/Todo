import TypePill from "./TypePill";
const TodoInput = () => {
	return (
		<div className="flex flex-col items-center sm:px-20 mt-5">
			<div className="flex justify-center items-end w-full ">
        <input
          type='text'
          placeholder='Add todo..'
          className='font-bold text-white  w-3/5 bg-transparent  sm:text-4xl border-t-0 border-b-4 border-l-0 border-r-0 outline-none px-2 py-1'
        />


        <button className='rounded-md px-3 ml-3 py-2 text-center bg-pink-500 text-white max-sm:font-medium sm:font-bold max-sm:text-sm sm:text-xl'>
          Add todo
        </button>
      </div>

      <div className="flex justify-center items-end w-full mt-3 ">
        <textarea
          placeholder='Description'
          className='font-medium mr-3 no-scrollbar resize-y text-white w-2/4 bg-transparent sm:text-lg border-t-0 border-b-2 border-l-0 border-r-0 outline-none px-2 py-1'
          />
        <TypePill type="Present" color='bg-cyan-500' hoverColor='bg-cyan-600'/>
        <TypePill type="Future" color='bg-fuchsia-500' hoverColor='bg-fuchsia-600'/>
      </div>
		</div>
	);
};

{/* <TypePill type="Present" color='bg-cyan-500'/> */}
export default TodoInput;
