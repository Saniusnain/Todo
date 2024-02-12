interface TodoFilterI {
  text: string;
  color: string;
  hoverColor: string;
  filter: string;
  changeFilter: () => void;
}

const TodoFilter = ({
  text,
  color,
  hoverColor,
  filter,
  changeFilter,
}: TodoFilterI) => {
  return (
    <div
      //   onClick={() => setFilter("present")}
      className={`max-sm:px-2 max-sm:w-16 sm:w-28 cursor-pointer bg-cyan-500 max-sm:py-1 rounded-3xl max-sm:text-xs sm:px-4 sm:py-1 text-center text-white font-semibold hover:bg-cyan-600 
          `}
    >
      <p className="text-center">{text}</p>
    </div>
  );
};

export default TodoFilter;
