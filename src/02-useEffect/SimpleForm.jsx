import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "geovanex",
    email: "geovanni@google.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log("useEffect called!!!");
  }, []);

  useEffect(() => {
    // console.log("formState changed!!!");
  }, [formState]);

  useEffect(() => {
    // console.log("email changed!!!");
  }, [email]);

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="geovanni@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === "geovanex2" && <Message />}
    </>
  );
};
