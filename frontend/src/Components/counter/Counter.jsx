import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import "./counter.css";

function Counter() {
  const { count, setCount } = useContext(AppContext);

  const handlerPlus = () => {
    setCount(count + 1);
  };

  const handlerMinus = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <button onClick={handlerMinus} disabled={count === 0}>
        -
      </button>
      <div>{count}</div>
      <button onClick={handlerPlus}>+</button>
    </div>
  );
}

export default Counter;
