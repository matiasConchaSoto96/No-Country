import React from "react";
import "./totals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faCoins, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

function Totals() {

  const totalData = [{
    type: "Productos",
    total: 280,
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
