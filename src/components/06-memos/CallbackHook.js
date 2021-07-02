import React, { useCallback, useState } from "react";
import "../02-useEfect.js/effects.css";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);
  //   const increment = () => {
  //     setCounter(counter + 1);
  //   };
  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );
  return (
    <>
      <h1>UseCallback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </>
  );
};
