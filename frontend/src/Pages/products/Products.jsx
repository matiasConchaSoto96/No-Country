import React from "react";
import Header from "../../Component/header/Header";
import Categories from "../../Component/categories/Categories";
import CardsContainer from "../../Component/cardsContainer/CardsContainer";
import HeaderMobile from "../../Component/header/HeaderMobile";
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
