import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../src/08-useReducer/components/TodoItem";

describe("Pruebas en <TodoItem />", () => {
  const todo = {
    id: 1,
    description: "Piedra del Alma",
    done: false,
  };

  const onRemoveTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  // Si sabemos que estas funciones serán llamadas en más de una prueba, es conveniente hacer un reset de las mismas.
  beforeEach(() => jest.clearAllMocks());

  test("debe de mostrar el Todo como PENDIENTE", () => {
    render(
      <TodoItem
        todo={todo}
        onRemoveTodo={onRemoveTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");

    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between align-items-center"
    );

    const spanElement = screen.getByLabelText("span");
    // expect(spanElement.className).toContain("clase");
    expect(spanElement.className).not.toContain("text-decoration-line-through");

    // screen.debug();
  });

  test("debe de mostrar el Todo como COMPLETADO", () => {
    todo.done = true;
    render(
      <TodoItem
        todo={todo}
        onRemoveTodo={onRemoveTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("text-decoration-line-through");

    // screen.debug();
  });

  test("span debe de llamar el onToggleTodo cuando se hace click", () => {
    render(
      <TodoItem
        todo={todo}
        onRemoveTodo={onRemoveTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("button debe de llamar el onRemoveTodo", () => {
    render(
      <TodoItem
        todo={todo}
        onRemoveTodo={onRemoveTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const deleteButton = screen.getByRole("button");
    fireEvent.click(deleteButton);

    expect(onRemoveTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
