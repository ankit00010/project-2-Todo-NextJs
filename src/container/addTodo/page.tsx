"use client";
import { useTodos } from "@/context/taskContext";
import React, { FormEvent } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const AddTodo = () => {
  const { todo, handleChange, handleAddTodo, todoos } = useTodos();
  const router = useRouter(); // Initialize useRouter

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    handleChange("");
    router.push("/"); 
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="What's your Today's Goal ?"
          name="todo"
          id="todo"
          value={todo}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default AddTodo;
