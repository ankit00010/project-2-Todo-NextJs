import AddTodo from "@/container/addTodo/page";
import DisplayTodo from "@/container/displayTodo/page";
import NavBar from "@/container/navBar/page";
import { TaskProvider } from "@/context/taskContext";
import React from "react";
import { RiTodoLine } from "react-icons/ri";
const page = () => {
  return (
    <TaskProvider>
      <main>
        <h2>
          <RiTodoLine  className="icons"/> 
            TODO PROJECT <RiTodoLine className="icons" />
        </h2>
        <NavBar />
        <AddTodo />
        <DisplayTodo />
      </main>
    </TaskProvider>
  );
};

export default page;
