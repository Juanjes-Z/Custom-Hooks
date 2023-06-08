import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [Counter, setCounter] = useState(initialValue);

  const incrementarCounter = (value = 1) => setCounter(Counter + value);

  const resetCounter = () => setCounter(initialValue);

  const subsractCounter = (value = 1) => {
    if (Counter === 0) return;
    if (Counter - value < 0) {
      setCounter(0);
      return;
    }

    setCounter(Counter - value);
  };

  return { Counter, incrementarCounter, resetCounter, subsractCounter };
};
