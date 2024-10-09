import React from "react";
import { useState } from "react";

function AppHelloWorld() {
  const [counter, setCounter] = useState(0);

  // methods
  const decreaseValueByOne = () => setCounter(counter - 1);
  const increaseValueByOne = () => setCounter(counter + 1);

  const buttonDisabled = counter === 0;

  return (
    <div>
      <button onClick={decreaseValueByOne} disabled={buttonDisabled}>
        -
      </button>
      <p>{counter}</p>
      <button onClick={increaseValueByOne}>+</button>
    </div>
  );
}

export default AppHelloWorld;
