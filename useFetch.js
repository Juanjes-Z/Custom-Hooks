import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
  });
  const getFetch = async () => {
    setState({ ...state, isLoading: true });
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setState({ data, isLoading: false, hasError: false });
    } catch (e) {
      setState({ data: null, isLoading: false, hasError: true });
    }
  };
  useEffect(() => {
    getFetch();
    return () => {};
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
