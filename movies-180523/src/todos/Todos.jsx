import { useEffect, useState } from "react";
import { Todo } from "../todo/Todo";
import { todosService } from "../services/todo";
import { useLoaderData, useRouteError, useLocation } from "react-router-dom";
import { Todo as TodoInterface } from "../../src/inrefaces/todo";

export function Todos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const todos = useLoaderData();
  const error = useRouteError();

  const location = useLocation();

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json())
  //     .then((result) => setTodos(result))
  //     .catch((error) => console.log(error))
  //     .finally(() => {
  //       console.log("Done");
  //       setIsLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    todosService
      .getAllTodos()
      .then((result) => setTodos(result))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h1 /* style={{ backgroundColor: "red" }} */>Todos here</h1>
      {/* {isLoading && <p>Loading...</p>} */}
      {/* {todos.length > 0 && todos.map((el) =>  <div>{el["title"]}</div>)} */}
      {/* {todos.length > 0 && todos.map((el) => <Todo todo={el} key={el["id"]} />)} */}
      {/* {!isLoading &&
        todos.length > 0 &&
        todos.map((el) => <Todo todo={el} key={el["id"]} />)} */}

      {location.state &&
        location.state.map((el) => <Todo todo={el} key={el["id"]} />)}
      {!location.state &&
        todos.length > 0 &&
        todos.map((el) => <Todo todo={el} key={el["id"]} />)}

      {/* {todos.length > 0 && todos.map((el) => <Todo todo={el} key={el["id"]} />)} */}
      {error && <p>{error.message}</p>}
    </div>
  );
}

// export const loadTodos = () => {
//   return todosService.getAllTodos();
// };
