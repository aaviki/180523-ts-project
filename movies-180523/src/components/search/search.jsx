import { useEffect, useState } from "react";
import { todosService } from "../../services/todo";
import { Todo } from "../../todo/Todo";
import { useSearchParams } from "react-router-dom";
import { Todo as TodoInterface } from "../../inrefaces/todo";

export function Search() {
  const [todos, setTodos] = useState([]);
  // const[]
  const [error, setError] = useState(null);
  const [isLoadng, setIsLoading] = useState(true);
  const [searchParams, setSsearchParams] = useSearchParams();

  useEffect(() => {
    todosService
      .getAllTodos()
      .then((result) => setTodos(result))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);
  // console.log(todos);

  useEffect(() => {
    setTodos(
      todos.filter((el) => el["title"].includes(searchParams.get("title")))
    );
  }, [searchParams]);

  return (
    <>
      <h2>Search TODO by Title</h2>
      <input
        type="text"
        onBlur={(e) => setSsearchParams({ title: e.target.value })}
      />

      {!error && !isLoadng && todos.length > 0 && (
        <>
          <h3>Todos</h3>
          {todos.map((el) => (
            <Todo todo={el} key={el["id"]} />
          ))}
        </>
      )}
      {!error && !isLoadng && todos.length === 0 && (
        <>
          <h3>Todos</h3>
          <p>There no any todos yet</p>
        </>
      )}
      {error && <p>An error occured</p>}
      {isLoadng && <p>LOADING...</p>}
    </>
  );
}
