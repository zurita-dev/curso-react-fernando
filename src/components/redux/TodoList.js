import { TodoListItem } from "./TodoListItem";
import { useSelector } from "react-redux";

export const TodoList = ({ handleDelete, handleToggle }) => {
  const todos = useSelector((state) => state.todo);
  return (
    <ul className="list-group list-group-flush">
      {todos &&
        todos.map((todo, i) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            i={i}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          ></TodoListItem>
        ))}
    </ul>
  );
};
