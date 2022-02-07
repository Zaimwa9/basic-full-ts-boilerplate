import { useState } from "react";

const useCounter = (startPoint: number = 0) => {
  const [counter, setCounter] = useState(startPoint);

  return {
    counter,
    increment: () => setCounter(counter + 1),
    decrement: () => setCounter(counter - 1),
    goWild: () => setCounter(Math.random() * 100),
  };
};

export { useCounter };
