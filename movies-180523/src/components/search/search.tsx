import { useEffect, useState } from "react";
import { todosService } from "../../services/todo";
import { Todo } from "../../todo/Todo";
import { useSearchParams, useNavigate } from "react-router-dom";
// import { Todo as TodoInterface } from "../../inrefaces/todo";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export function Search() {
  const [todos, setTodos] = useState([]);
  // const[]
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);
  const [isLoadng, setIsLoading] = useState(true);
  const [searchParams, setSsearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    todosService
      .getAllTodos()
      .then((result) => setTodos(result))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);
  // console.log(todos);

  useEffect(() => {
    setResults(
      todos.filter((el: Todo) =>
        el["title"].includes(String(searchParams.get("title")))
      )
    );
  }, [searchParams]);

  useEffect(() => {
    if (results.length > 0) {
      navigate("/todos", {
        state: results,
      });
    }
  }, [results]);
  return (
    <>
      <h2>Search TODO by Title</h2>
      <input
        type="text"
        onBlur={(e) => setSsearchParams({ title: e.target.value })}
      />

      {!error && !isLoadng && results.length > 0 && (
        <>
          <h3>Results</h3>
          {results.map((el) => (
            <Todo todo={el} key={el["id"]} />
          ))}
        </>
      )}
      {!error && !isLoadng && results.length === 0 && todos.length > 0 && (
        <>
          <h3>Todos</h3>
          {todos.map((el) => (
            <Todo todo={el} key={el["id"]} />
          ))}
        </>
      )}

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
