"use client";
import ThrowError from "@/services/error_services";
import { fetchService } from "@/services/fetch_services";
import { TaskType } from "@/types/task_types";
import React, { ReactNode, createContext, useContext, useState } from "react";

export type TaskContextType = {
  todo: string;
  handleChange: (value: string) => void;
  handleAddTodo: (task: string) => void;
  todoos: TaskType[];
  toggleTodoAsCompleted: (id: string) => void;
  handleDelete: (id: string) => void;
};

export const TaskContext = createContext<TaskContextType | null>(null);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [todo, setTodo] = useState("");
  const [todoos, setTodoos] = useState<TaskType[]>(() => {
    const newTodos = localStorage.getItem("todos") || "[]";
    return JSON.parse(newTodos) as TaskType[];
  });
  const handleChange = (value: string) => {
    setTodo(value);
  };

  console.log("Value of todo is working ornot ", todoos);

  const handleAddTodo = (task: string) => {
    if (todo === "") {
      return alert("Please enter the Task");
    }
    setTodoos((prev) => {
      const newTask: TaskType[] = [
        {
          id: Math.random().toString(),
          task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      return newTask;
    });
    localStorage.setItem("todos", JSON.stringify(todoos));
  };

  const toggleTodoAsCompleted = (id: string) => {
   
    setTodoos((prev) => {
      const updatedTask = prev.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      return updatedTask;
    });
    localStorage.setItem("todos", JSON.stringify(todoos));
  };

  const handleDelete = (id: string) => {
    setTodoos((prev) => {
      const newList = prev.filter((task) => task.id !== id);
      return newList;
    });
    localStorage.setItem("todos", JSON.stringify(todoos));
  };

  const taskValues = {
    todo,
    handleChange,
    handleAddTodo,
    todoos,
    toggleTodoAsCompleted,
    handleDelete,
  };
  return (
    <TaskContext.Provider value={taskValues}>{children}</TaskContext.Provider>
  );
};

export function useTodos(): TaskContextType {
  const taskContextValue: TaskContextType | null = useContext(TaskContext);
  if (!taskContextValue) {
    throw new ThrowError(404, "Null Value", "");
  }
  return taskContextValue;
}
