import TodoItem from "./components/todo-item/TodoItem";

interface Todo {
  id: number;
  name: string;
}

export default async function Home() {
  let data = await fetch("http://localhost:8000/api/todo/");
  let todos: Todo[] = await data.json();

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      hello world
      {todos.length ? (
        todos.map((todo) => <TodoItem {...todo} />)
      ) : (
        <span>No Todo Found</span>
      )}
    </main>
  );
}
