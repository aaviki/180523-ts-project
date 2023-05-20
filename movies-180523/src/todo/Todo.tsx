import { useEffect, useState } from "react";
import { Todo as TodoInetrface } from "../inrefaces/todo";
import styles from "./Todo.module.css";
import { todosService } from "../services/todo";

interface TodoProps {
  todo: TodoInetrface;
}
//ejtaka

export function Todo(props: TodoProps) {
  console.log(props);

  const [status, setStatus] = useState(false);
  const [item, setItem] = useState();

  // const changeStatus = () => {
  //   setStatus(true);
  // };

  useEffect(() => {
    todosService.getTodoById(props.todo.id).then((result) => setItem(result));
  }, []);

  return (
    <div className={`${styles.todoClass} ${styles.test}`}>
      <h2
        className={status ? styles.completed : ""}
        onClick={() => setStatus(!status)}
      >
        Title: {props.todo.title}{" "}
      </h2>
      {/* <p>Status: {status ? "Complited" : "Not complited"} </p> */}
      {/* <p>Status: {status ? "Complited" : "Not complited"} </p> */}
      {/* <button onClick={changeStatus}>Set todo as completed</button>  */}
      {/* <button onClick={() => setStatus(true)}>Set todo as completed</button>
      <button onClick={() => setStatus(false)}>Set todo as not completed</button> */}
      {/* <button onClick={() => setStatus(!status)}>Toggle todo status</button> */}
    </div>
  );
}
