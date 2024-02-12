import { useState } from "react";
import TodoFilter from "./TodoFilter";
const TodoItems = () => {
  const [filter, setFilter] = useState("present");
  return (
    <div className="flex flex-col sm:px-20 mt-5 max-sm:px-10 md:px-20 lg:px-32  xl:px-80 ">
      <div className="flex justify-between mt-10 ">
        <TodoFilter />
        <TodoFilter />
        <TodoFilter />
        <TodoFilter />

        {/* <div
          onClick={() => setFilter("present")}
          className={`max-sm:px-2 cursor-pointer max-sm:py-1 rounded-3xl max-sm:text-xs sm:px-4 sm:py-2 text-center text-white font-semibold hover:bg-cyan-600 ${
            filter === "present"
              ? "bg-cyan-600  border-2 border-yellow-300"
              : "bg-cyan-500"
          }`}
        >
          <p className="text-center">Present</p>
        </div>
        <div
          onClick={() => setFilter("future")}
          className={`max-sm:px-2 cursor-pointer max-sm:py-1 rounded-3xl max-sm:text-xs sm:px-4 sm:py-2 text-center text-white font-semibold hover:bg-fuchsia-600 ${
            filter === "future"
              ? "bg-fuchsia-600  border-2 border-yellow-300"
              : "bg-fuchsia-500"
          }`}
        >
          <p className="text-center">Future</p>
        </div>
        <div
          onClick={() => setFilter("present")}
          className={`max-sm:px-2 cursor-pointer max-sm:py-1 rounded-3xl max-sm:text-xs sm:px-4 sm:py-2 text-center text-white font-semibold hover:bg-yellow-600 ${
            filter === "present"
              ? "bg-yellow-600  border-2 border-yellow-300"
              : "bg-yellow-500"
          }`}
        >
          <p className="text-center">Active</p>
        </div>
        <div
          onClick={() => setFilter("future")}
          className={`max-sm:px-2 cursor-pointer max-sm:py-1 rounded-3xl max-sm:text-xs sm:px-4 sm:py-2 text-center text-white font-semibold hover:bg-tealfuchsia-600 ${
            filter === "future"
              ? "bg-teal-600  border-2 border-yellow-300"
              : "bg-teal-500"
          }`}
        >
          <p className="text-center">Done</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoItems;
