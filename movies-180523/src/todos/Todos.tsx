import { useState } from "react";
import { Todo } from "../todo/Todo";

export function Todos() {
  const [todos, setTodos] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((result) => setTodos(result))
    .catch((error) => console.log(error))
    .finally(() => console.log("Done"));
  return (
    <div>
      <h1>Todos here</h1>
      {todos.length > 0 && todos.map((el) => <div>{el["title"]}</div>)}
    </div>
  );
}
