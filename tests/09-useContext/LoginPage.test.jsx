import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("Pruebas en <LoginPage />", () => {
  const user = { id: 123, name: "Juan", email: "juan@google.com" };

  const setUserMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
    // screen.debug();
  });

  test("debe de llamar el setUser cuando se hace click en el boton", () => {
    render(
      <UserContext.Provider value={{ user: user, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");
    const buttonSetUser = screen.getByRole("button");

    fireEvent.click(buttonSetUser);

    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(user.email);
    expect(preTag.innerHTML).toContain(`${user.id}`);
    expect(setUserMock).toHaveBeenCalledWith(user);

    // screen.debug();
  });
});
