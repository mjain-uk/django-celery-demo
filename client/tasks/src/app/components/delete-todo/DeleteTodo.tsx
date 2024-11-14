"use client";
import React from "react";

interface DeleteTodoProps {
  handleOnDelete: (todoId: number) => void;
  id: number;
}
const DeleteTodo = ({ handleOnDelete, id }: DeleteTodoProps) => {
  return <button onClick={() => handleOnDelete(id)}>DELETE</button>;
};

export default DeleteTodo;
