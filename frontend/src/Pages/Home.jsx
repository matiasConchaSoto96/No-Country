import React from "react";
import Header from "../Components/header/Header";
import Totals from "../Components/totals/Totals";
import CardsContainer from "../Components/cardsContainer/CardsContainer";

function Home() {
  return (
    <>
      <Header />
      <Totals />
      <h2>Recientes</h2>
      <CardsContainer />
    </>
  );
}

export default Home;
