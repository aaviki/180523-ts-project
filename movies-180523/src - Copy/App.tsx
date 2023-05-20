import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Movies } from "./components/movies/Movies";
import { Timer } from "./components/timer/Timer";
import { Counter } from "./components/counter/Counter";
import { Todos, loadTodos } from "./todos/Todos";
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

function App() {
  const browserRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/todos" element={<Todos />} loader={loadTodos} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

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
