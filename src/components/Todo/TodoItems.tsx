import { useState } from "react";
import TodoFilter from "./TodoFilter";

const TodoItems = () => {

  const [timeFilter, setTimeFilter] = useState("present");
  const [statusFilter, setStatusFilter] = useState("active");

  console.log("--time---" , timeFilter, ' --status--- ',statusFilter);

  return (
    <div className="flex flex-col sm:px-20 mt-5 max-sm:px-10 md:px-20 lg:px-32  xl:px-80 ">
      <div className="flex justify-between mt-10 ">
        <TodoFilter
          text="Present"
          color="bg-cyan-500"
          hoverColor="bg-cyan-600"
          timeFilter={timeFilter}
          changeFilter={() => {
            setTimeFilter("present")
            setStatusFilter("active")
        }}
        />
        <TodoFilter
          text="Future"
          color="bg-fuchsia-500"
          hoverColor="bg-fuchsia-600"
          timeFilter={timeFilter}
          changeFilter={() => {
            setTimeFilter("future")
            setStatusFilter("active")
        }}
        />
        <TodoFilter
          text="Active"
          color="bg-yellow-500"
          hoverColor="bg-yellow-600"
          statusFilter={statusFilter}
          changeStatusFilter={() => {
            setStatusFilter('active')
            setTimeFilter('present')
          }}
        />
        <TodoFilter
          text="Done"
          color="bg-red-500"
          hoverColor="bg-red-600"
          statusFilter={statusFilter}
          changeStatusFilter={() => {
            setStatusFilter('done')
            setTimeFilter('')
          }}
        />
       
      </div>
    </div>
  );
};

export default TodoItems;
