import { types } from "../types/types";

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.add:
      return [...state, action.payload];
    case types.delete:
      return state.filter((todo) => todo.id !== action.payload);
    case types.toggle:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case types.toggleOld:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};
