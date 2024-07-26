import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    // document.querySelector("input").focus(); // Como en Javascript tradicional
    // document.querySelector("input").select(); // Como en Javascript tradicional

    inputRef.current.select();
    // console.log(inputRef);
  };
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control mt-2"
      />

      <button className="btn btn-primary mt-2" onClick={onClick}>
        Set focus
      </button>
    </>
  );
};
