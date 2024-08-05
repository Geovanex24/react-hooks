import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("Pruebas en <MultipleCustomHooks />", () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("debe de mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    render(<MultipleCustomHooks />);

    expect(screen.getByText("Cargando..."));
    expect(screen.getByText("Información de Pokemón"));

    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    const prevButton = screen.getByRole("button", { name: "Anterior" });

    expect(nextButton.disabled).toBeFalsy();
    expect(prevButton.disable).toBeFalsy();
    // screen.debug();
  });

  test("debe de mostrar un Pokemón", () => {
    useFetch.mockReturnValue({
      data: {
        name: "Charmander",
        id: 1,
        sprites: {
          back_default: "back_default",
          back_shiny: "back_shiny",
          front_default: "front_default",
          front_shiny: "front_shiny",
        },
      },
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    // screen.debug();
    expect(screen.getByText("#1 - Charmander")).toBeTruthy();
  });

  test("debe de llamar la función de incrementar", () => {
    useFetch.mockReturnValue({
      data: {
        name: "Charmander",
        id: 1,
        sprites: {
          back_default: "back_default",
          back_shiny: "back_shiny",
          front_default: "front_default",
          front_shiny: "front_shiny",
        },
      },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole("button", { name: "Siguiente" });

    fireEvent.click(nextButton);

    // screen.debug();

    expect(mockIncrement).toHaveBeenCalled();
  });
});
