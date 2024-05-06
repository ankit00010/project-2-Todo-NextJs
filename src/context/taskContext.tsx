"use client";
import React, { ReactNode, createContext, useState } from "react";

export type TaskContextType = {
  todo: string;
  handleChange: (value: string) => void;
};

export const TaskContext = createContext<TaskContextType | null>(null);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [todo, setTodo] = useState("");
  const [todoos, setTodoos] = useState([]);
  const handleChange = (value: string) => {
    setTodo(value);
  };

  console.log("Value of todo is working ornot ", todo);

  const handleAddTodo = (task: string): void => {};
  const taskValues = {
    todo,
    handleChange,
  };
  return (
    <TaskContext.Provider value={taskValues}>{children}</TaskContext.Provider>
  );
};
