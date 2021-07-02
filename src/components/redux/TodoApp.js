import React, { useEffect } from "react";
import "./styles.css";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useDispatch, useSelector } from "react-redux";

export const TodoApp = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };
    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({ type: "toggle", payload: todoId });
  };

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          ></TodoList>
        </div>
        <div className="col-5">
          <TodoAdd />
        </div>
      </div>
    </div>
  );
};
