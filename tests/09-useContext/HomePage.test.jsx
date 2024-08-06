import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserProvider } from "../../src/09-useContext/context/UserProvider";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("Pruebas en <HomePage />", () => {
  const user = {
    id: 1,
    name: "Geovanny",
    email: "geovanny@gmail.com",
  };
  test("debe de mostrar el coponente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre"); // aria-label
    expect(preTag.innerHTML).toBe("null");

    // expect(preTag.innerHTML).toContain("null");
    // screen.debug();
  });
  test("debe de mostrar el coponente CON el usuario", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre"); // aria-label
    // console.log(preTag.innerHTML);

    expect(preTag.innerHTML).toContain(`${user.id}`);
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(user.email);

    // screen.debug();
  });
});
