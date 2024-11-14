import { revalidatePath } from "next/cache";
import React from "react";

const CreateTodo = () => {
  async function create(formData: FormData) {
    "use server";
    const rawFormData = {
      name: formData.get("name"),
    };
    const response = await fetch("http://localhost:8000/api/todo/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name: rawFormData.name }),
    });
    if (response.status === 201) {
      revalidatePath("/");
    }
  }
  return (
    <form
      action={create}
      method="POST"
      className="flex flex-col gap-4 justify-start my-2"
    >
      <input
        placeholder="todo name"
        type="text"
        name="name"
        className="border"
      />
      <button type="submit">ADD</button>
    </form>
  );
};

export default CreateTodo;
