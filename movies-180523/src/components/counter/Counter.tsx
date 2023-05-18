import { useState } from "react";

export function Counter() {
  let title = "counter level 1";
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter((counter) => counter + 1);
  };
  const decreseCounter = () => {
    setCounter((counter) => counter - 1);
  };

  if (counter > 5 && counter < 15) {
    title = "counter level 2";
  } else if (counter >= 15 && counter < 20) {
    title = "level 3";
  } else if (counter >= 20) {
    title = "max counter";
  }

  return (
    <div>
      <h1>Counter here</h1>
      <h2>{title}</h2>
      <button onClick={increaseCounter}>+</button>
      <div>
        <button onClick={() => increaseCounter()}>+</button>
      </div>
      <p>{counter}</p>
      <button onClick={decreseCounter}>-</button>
    </div>
  );
}
