export const TodoItem = ({ todo, onRemoveTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span
        className={`${todo.done ? "text-decoration-line-through" : ""}`}
        onClick={() => onToggleTodo(todo.id)}
        aria-label="span"
      >
        {todo.description}
      </span>
      <button className="btn btn-danger" onClick={() => onRemoveTodo(todo.id)}>
        Borrar
      </button>
    </li>
  );
};
