import React from "react";
import Header from "../../Components/header/Header";
import Categories from "../../Components/categories/Categories";
import CardsContainer from "../../Components/cardsContainer/CardsContainer";
import HeaderMobile from "../../Components/header/HeaderMobile";
import "./products.css";

function Products() {
  return (
    <div className="products-page">
      <Header />
      <Categories />
      <CardsContainer />
      <HeaderMobile />
    </div>
  );
}

export default Products;
