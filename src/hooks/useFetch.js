import { useEffect, useState } from "react";

// Creamos un caché
/**
 * Hemos creado un objeto con las URLs como llaves, y sus valores respectivos almacenados en este lugar.
 * Entonces, si alguien vuelve a hacer una petición desde cualquier parte de la aplicación y ya tenemos cargada
 * previamente dicha URL, esta servirá como caché.
 */
// const localCache = {
//   "https://pokeapi.co/api/v2/pokemon/1": { name: "Bulbasaur", info },
//   "https://pokeapi.co/api/v2/pokemon/2": { name: "Ivysaur", info },
// };

const localCache = {};

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  const getFetch = async () => {
    if (localCache[url]) {
      console.log("Usando caché");
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });
      return;
    }

    setLoadingState();

    const resp = await fetch(url);

    //sleep
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        },
      });
      return;
    }

    const data = await resp.json();

    setState({
      data,
      isLoading: false,
      hasError: false,
      error: null,
    });

    // Manejo del caché
    localCache[url] = data;
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
