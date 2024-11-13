import React from "react";

interface TodoItemProps {
  name: string;
  id: number;
}
const TodoItem = ({ name, id }: TodoItemProps) => {
  return (
    <div>
      ID: {id} ---- Name:{name}{" "}
    </div>
  );
};

export default TodoItem;
