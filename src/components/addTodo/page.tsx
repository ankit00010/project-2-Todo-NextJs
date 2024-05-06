"use client"
import { TaskContext, TaskContextType } from "@/context/taskContext";
import React, { FormEvent, useContext } from "react";

const AddTodo = () => {
  const { todo, handleChange } = useContext(TaskContext) as TaskContextType;


  const handleFormSubmit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    // handleAddTodo(todo);
    handleChange("");
  }
  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="What's your Today's Goal ?"
          name="todo"
          id="todo"
          value={todo}
          onChange={(e) => handleChange(e.target.value)}
        />
        {/* <button type="submit" onSubmit={handleFormSubmit}>ADD</button>   pending part */} 
      </form>
    </div>
  );
};

export default AddTodo;
