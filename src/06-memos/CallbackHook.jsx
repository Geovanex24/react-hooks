import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);
  const increment = useCallback((valueIncrement) => {
    setCounter((counter) => counter + valueIncrement);
  }, []);

  //   const increment = () => {
  //     setCounter(counter + 1);
  //   };
  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </>
  );
};
