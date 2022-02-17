import React from "react";
import Header from "../../Components/header/Header";
import Totals from "../../Components/totals/Totals";
import CardsContainer from "../../Components/cardsContainer/CardsContainer";
import HeaderMobile from "../../Components/header/HeaderMobile";
import "./home.css";

function Home() {
  return (
    <div className="home-page">
      <Header />
      <Totals />
      <h2 className="recent">Añadidos Recientemente</h2>
      <CardsContainer />
      <HeaderMobile />
    </div>
  );
}

export default Home;
