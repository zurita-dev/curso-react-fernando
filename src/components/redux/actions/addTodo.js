import { types } from "../types/types";

export const addTodo = (newTodo) => ({
  type: types.add,
  payload: newTodo,
});
