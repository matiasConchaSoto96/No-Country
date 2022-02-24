import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import "./counter.css";

function Counter({ stock, id }) {
  const { products, setProducts } = useContext(AppContext);
  const increase = (id) => {
    let newList = products.map((product) => {
      if (id === product.id) {
        return {
          ...product,
          stock: (product.stock += 1),
        };
      }
      return product;
    });
    setProducts(newList);
  };

  const decrease = (id) => {
    let newList = products.map((product) => {
      if (id === product.id) {
        return {
          ...product,
          stock: (product.stock -= 1),
        };
      }
      return product;
    });
    setProducts(newList);
  };

  const handlerPlus = () => {
    increase(id);
  };

  const handlerMinus = () => {
    decrease(id);
  };

  return (
    <div className="counter-container">
      <button onClick={handlerMinus} disabled={stock === 0}>
        -
      </button>
      <div>{stock}</div>
      <button onClick={handlerPlus}>+</button>
    </div>
  );
}

export default Counter;
