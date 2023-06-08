import { useEffect, useReducer } from "react";
import { todoRedcuer } from "../08-useReducer/todoReducer";

export const useTodo = () => {
  const initialState = [];

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoRedcuer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const newHandleTodo = (newTodo) => {
    const action = {
      type: "add todo",
      payload: newTodo,
    };

    dispatch(action);
  };

  const deleteTodo = (idTodo) => {
    const action = {
      type: "remove todo",
      payload: idTodo,
    };

    dispatch(action);
  };
  const ontoggleTodo = (idTodo) => {
    const action = {
      type: "update done todo",
      payload: idTodo,
    };

    dispatch(action);
  };

  return {
    todos,
    pendientes: todos.filter((todo) => !todo.done).length,
    allTodos: todos.length,
    ...todos,
    newHandleTodo,
    deleteTodo,
    ontoggleTodo,
  };
};
