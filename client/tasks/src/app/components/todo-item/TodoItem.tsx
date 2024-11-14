import React from "react";
import DeleteTodo from "../delete-todo/DeleteTodo";
import { revalidatePath } from "next/cache";

interface TodoItemProps {
  name: string;
  id: number;
}
const TodoItem = ({ name, id }: TodoItemProps) => {
  const handleTodoDelete = async (todoId: number) => {
    "use server";
    const response = await fetch(`http://localhost:8000/api/todo/${todoId}`, {
      method: "DELETE",
    });
    if (response.status === 204) {
      revalidatePath("/");
    }
  };
  return (
    <div className="flex justify-start gap-4">
      ID: {id} ---- Name:{name}{" "}
      <DeleteTodo id={id} handleOnDelete={handleTodoDelete} />
    </div>
  );
};

export default TodoItem;
