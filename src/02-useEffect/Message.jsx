import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      //   const coords = { x, y };
      setCoords({ x, y });
    };
    //justo cuando el componente se monta, se crea un listener
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      //justo cuando el componente se desmonta, se elimina el listener
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      {JSON.stringify(coords)}
    </>
  );
};
