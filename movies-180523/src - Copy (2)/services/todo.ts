// export const getAllTodos = () => {
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => response.json())
//     .catch((error) => console.log(error))
//     .finally(() => console.log("Done"));
// };

const getAllTodos = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .catch((error) => console.log(error))
    .finally(() => console.log("Done"));
};

const getTodoById = (id: number) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => response.json())
    .catch((err) => console.log(err))
    .finally(() => console.log("done"));
};
export const todosService = {
  getAllTodos,
  getTodoById,
};

// const getAllTodos = () => {
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => response.json())
//     .catch((error) => console.log(error))
//     .finally(() => console.log("Done"));
// };
// export { getAllTodos };
