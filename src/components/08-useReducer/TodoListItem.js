export const TodoListItem = ({ todo, i, handleToggle, handleDelete }) => {
  return (
    <li className="list-group-item">
      <p
        className={`${todo.done && "complete"}`}
        onClick={() => {
          handleToggle(todo.id);
        }}
      >
        {i + 1}. {todo.desc}
      </p>
      <button
        className="btn btn-danger"
        onClick={() => {
          handleDelete(todo.id);
        }}
      >
        Borrar
      </button>
    </li>
  );
};
