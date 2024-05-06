import AddTodo from "@/components/addTodo/page";
import { TaskProvider } from "@/context/taskContext";
import React from "react";

const page = () => {
  return (
    <TaskProvider>
      <main>
        <h2>TODO PROJECT</h2>
        <AddTodo />
      </main>
    </TaskProvider>
  );
};

export default page;
