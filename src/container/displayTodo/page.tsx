"use client";

import { useTodos } from "@/context/taskContext";
import { TaskType } from "@/types/task_types";
import { useSearchParams } from "next/navigation";
import React from "react";

const DisplayTodo = () => {
  const searchParams = useSearchParams();
  const todosFilter = searchParams.get("todos");
  const { todoos,toggleTodoAsCompleted,handleDelete } = useTodos();
  let filterTodoos: TaskType[] = todoos;

  if (todosFilter === "active") {
    filterTodoos = filterTodoos.filter((task) => !task.completed);
  } else if (todosFilter === "completed") {
    filterTodoos = filterTodoos.filter((task) => task.completed);
  }
  return (
    <ul>
      {filterTodoos.map((todo: TaskType) => {
        return (
          <li key={todo.id}>
              <input
                type="checkbox"
                name=""
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onChange={()=>toggleTodoAsCompleted(todo.id)}
              />
              <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
             
                  <button type="button" onClick={()=>{handleDelete(todo.id)}}>Delete</button>

          </li>
        );
      })}
    </ul>
  );
};

export default DisplayTodo;
