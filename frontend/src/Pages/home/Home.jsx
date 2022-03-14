import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import Header from "../../Components/header/Header";
import Totals from "../../Components/totals/Totals";
import RecentlyAdded from "../../Components/recentlyAdded/RecentlyAdded";
import HeaderMobile from "../../Components/header/HeaderMobile";
import Modal from "../../Components/modal/Modal";
import "./home.css";

function Home() {
  const { openModal } = useContext(AppContext);

  return (
    <div className="home-page">
      <Header />
      <Totals />
      {openModal && <Modal />}
      <h2 className="recent">Añadidos Recientemente</h2>
      <RecentlyAdded />
      <HeaderMobile />
    </div>
  );
}

export default Home;
