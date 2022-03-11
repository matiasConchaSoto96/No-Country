import React, { useEffect, useState } from "react";
import "./totals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faCoins, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

function Totals() {
  const [totalProducts, setTotalProducts] = useState();

  useEffect(() => {
    let endpointRequest = `http://localhost:3001/api`;
    fetch(endpointRequest)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTotalProducts(data.meta.total);
      });
    }, []);
    
  const totalData = [{
    type: "Productos",
    total: totalProducts,
    icon: faGamepad,
  }, {
    type: "Ventas",
    total: 280,
    icon: faCartArrowDown,
  }, {
    type: "Ingresos",
    total: 280,
    icon: faCoins,
  }]

  return (
    <div className="totals-container">
      { totalData.map(card => {
        return <div className="card">
            <div className="card-info">
              <span>{card.type}</span>
              <p>{card.total}</p>
            </div>
            <div className="card-info">
              <div className="icons">
               <FontAwesomeIcon className="icon" icon={card.icon} />
              </div>
            </div>
          </div>
      })

      }
    </div>
  );
}

export default Totals;
