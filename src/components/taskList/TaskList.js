import React from "react";
import TaskItem from "../taskItem/TaskItem";

const TaskList = ({ list, handleComplete, handleDelete }) => {
  return (
    <div>
      {list.map((elt) => (
        <TaskItem todo={elt} key={elt.id} handleComplete={handleComplete} handleDelete={handleDelete}/>
      ))}
    </div>
  );
};

export default TaskList;
