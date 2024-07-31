import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

// Función que inicializa nuestro reducer. En algunos casos se puede hacer que venga previamente cargado
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  // Se necesita ejecutar un efectro secundario cuando mis "todos" cambien
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "ADD_TODO",
      payload: todo,
    };

    dispatch(action); //Función que usamos para mandar la acción.
  };

  const handleRemoveTodo = (id) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: id,
    });
  };

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
  };
};
