import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { TodoApp } from "./TodoApp";

export const TodoContainer = () => {
  return (
    <Provider store={store}>
      <TodoApp> </TodoApp>
    </Provider>
  );
};
