import React, { useState } from "react";
import "../02-useEfect.js/effects.css";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Real example</h1>
      <hr />
      {show && <MultipleCustomHooks />}
      <button
        className="btn btn-primary mt-5"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>
    </div>
  );
};
