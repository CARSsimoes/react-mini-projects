import "./styles.css";
import AppCounter from "./components/AppCounter/AppCounter";
import AppRandomUser from "./components/AppRandomUser/AppRandomUser";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import React from "react";
import { AppRandomUserX } from "./components/AppRandomUser/AppRandomUserX";
import AppTodoList from "./components/AppTodoList/AppTodoList";
import Wordle from "./components/Wordle/Wordle";
import Space from "./components/Space/Space";

export enum AppRoutes {
  HOME = "/",
  RANDOM_USER = "/randomUser",
  RANDOM_USER_X = "/randomUser/:name",
  TODO_LIST = "/todo-list",
  WORDLE = "/wordle",
  SPACE = "/space",
}

export default function App() {
  return (
    <BrowserRouter>
      <h1>Study a little bit!</h1>
      <Link to={AppRoutes.HOME}>
        <button>AppCounter</button>
      </Link>
      <Link to={AppRoutes.RANDOM_USER}>
        <button>AppRandomUser</button>
      </Link>
      <Link to={AppRoutes.TODO_LIST}>
        <button>AppTodoList</button>
      </Link>
      <Link to={AppRoutes.WORDLE}>
        <button>Play Wordle</button>
      </Link>
      <Link to={AppRoutes.SPACE}>
        <button>Space</button>
      </Link>
      <Routes>
        <Route path={AppRoutes.HOME} element={<AppCounter />} />
        <Route path={AppRoutes.RANDOM_USER} element={<AppRandomUser />} />
        <Route path={AppRoutes.RANDOM_USER_X} element={<AppRandomUserX />} />
        <Route path={AppRoutes.TODO_LIST} element={<AppTodoList />} />
        <Route path={AppRoutes.WORDLE} element={<Wordle />} />
        <Route path={AppRoutes.SPACE} element={<Space />} />
      </Routes>
    </BrowserRouter>
  );
}
