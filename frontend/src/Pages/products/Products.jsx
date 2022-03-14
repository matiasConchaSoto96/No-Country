import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import Header from "../../Components/header/Header";
import Categories from "../../Components/categories/Categories";
import CardsContainer from "../../Components/cardsContainer/CardsContainer";
import HeaderMobile from "../../Components/header/HeaderMobile";
import Modal from "../../Components/modal/Modal";
import "./products.css";

function Products() {
  const { openModal } = useContext(AppContext);
  return (
    <div className="products-page">
      <Header />
      <Categories />
      {openModal && <Modal />}
      <CardsContainer />
      <HeaderMobile />
    </div>
  );
}

export default Products;
