import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Movies } from "./components/movies/Movies";
import { Timer } from "./components/timer/Timer";
import { Counter } from "./components/counter/Counter";
import { Todos /* loadTodos */ } from "./todos/Todos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/home/home";
import { NotFound } from "./components/not-found/NotFound";
import { Navigation } from "./components/navigation/Navigation";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Root } from "./components/Root";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
import { MovieDetails } from "./components/movie-details/MovieDatails";

function App() {
  // const browserRouter = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<Root />}>
  //       <Route index element={<Home />} />
  //       <Route path="/movies" element={<Movies />} />
  //       <Route
  //         path="/todos"
  //         element={<Todos />}
  //         loader={loadTodos}
  //         errorElement={<p>Error mesage</p>}
  //       />
  //       <Route path="*" element={<NotFound />} />
  //       <Route path="/login" element={<Login />} />
  //     </Route>
  //   )
  // );

  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "/movies", element: <Movies /> },
        { path: "/movies/:id", element: <MovieDetails /> },
        { path: "/todos", element: <Todos /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={browserRouter} />
    </div>
    // <BrowserRouter>
    //   <div className="App">
    //     <Navigation />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/movies" element={<Movies />} />
    //       <Route path="*" element={<NotFound />} />
    //     </Routes>
    //     {/* <Movies /> */}
    //     {/* <Timer /> */}
    //     {/* <Counter /> */}
    //     {/* <Todos /> */}
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
