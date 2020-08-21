import { useState, useEffect } from "react";

export const useHooks = () => {
  const [state, setState] = useState({
    name: ""
  });

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://my-json-server.typicode.com/TserHub/Json/hooks"
      ).then(res => res.json());

      setState(prevState => {
        return {
          ...prevState,
          ...response
        };
      });
    }

    fetchData();
  }, []);

  return state;
};
