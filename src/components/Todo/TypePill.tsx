interface TTypePill {
	type: string;
	color: string;
	hoverColor: string;
	todoType: string;
	changeType: () => void;
}
const TypePill = ({
	type,
	color,
	hoverColor,

	todoType,
	changeType,
}: TTypePill) => {
	return (
		<div
			onClick={() => changeType()}
			className={`${type.toLowerCase() === todoType ? hoverColor : color} ${
				type.toLowerCase() === todoType ? 'outline outline-2 outline-yellow-300' : null
			} ml-2 max-sm:mt-2 cursor-pointer hover:${hoverColor}  rounded-3xl px-3 py-1 text-white font-semibold max-sm:text-xs sm:text-sm  text-center`}
		>
			{type}
		</div>
	);
};

export default TypePill;
