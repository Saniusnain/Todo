interface TodoFilterI {
	text: string;
	color: string;
	statusFilter?: string;
	hoverColor: string;
	timeFilter?: string;
	changeFilter?: () => void;
	changeStatusFilter?: () => void;
}

const TodoFilter = ({
	text,
	color,
	hoverColor,
	timeFilter,
	statusFilter,
	changeFilter,
	changeStatusFilter,
}: TodoFilterI) => {

  const buttonStyle= (color:string) :string => {
    return `${color} outline outline-2 outline-yellow-300`
  }
	return (
		<>
			{statusFilter === 'active' || statusFilter === 'done' ? (
				<div
				onClick={() => changeStatusFilter && changeStatusFilter()}
				className={`max-sm:px-2 max-sm:w-16 sm:w-28 cursor-pointer max-sm:py-1 rounded-3xl max-sm:text-xs sm:px-4 sm:py-1 text-center text-white font-semibold hover:${hoverColor} ${ 
					text.toLowerCase() === statusFilter ? buttonStyle(hoverColor) : color
				}`}
			>
				<p className='text-center'>{text}</p>
			</div>
			) : (
				<div
					onClick={() => changeFilter && changeFilter()}
					className={`max-sm:px-2 max-sm:w-16 sm:w-28 cursor-pointer max-sm:py-1 rounded-3xl max-sm:text-xs sm:px-4 sm:py-1 text-center text-white font-semibold hover:${hoverColor} ${
						text.toLowerCase() === timeFilter ? buttonStyle(hoverColor) : color
					}`}
				>
					<p className='text-center'>{text}</p>
				</div>
			)}
		</>
	);
};

export default TodoFilter;
