import CreateTodo from "./components/create-todo/CreateTodo";
import TodoItem from "./components/todo-item/TodoItem";

interface Todo {
  id: number;
  name: string;
}

export default async function Home() {
  let data = await fetch("http://localhost:8000/api/todo/");
  let todos: Todo[] = await data.json();

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start p-6">
      <section>
        <h3>Todo List</h3>
        {todos.length ? (
          todos.map((todo) => <TodoItem {...todo} key={`todo-${todo.id}`} />)
        ) : (
          <span>No Todo Found</span>
        )}
      </section>

      <section>
        <h3>Add a new Todo</h3>
        <CreateTodo />
      </section>
    </main>
  );
}
