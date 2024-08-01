import { useState } from "react";
import { UserContext } from "./UserContext";

// Esta es la información que cualquier hijo del Provider va a poder obtener de este contexto.
// Se puede colocar en el punto más alto de nuestra app o partir de los componentes hijos que creamos que necesiten la información

// const user = {
//   id: 12345,
//   name: "Geovanni",
//   email: "geovani@google.com",
// };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    // <UserContext.Provider value={{ hola: "Mundo", user: user }}>
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
