import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./categories.css";

function Categories() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1030 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1030, min: 570 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 569, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="carousel-container">
        <Carousel
          responsive={responsive}
          showDots={false}
          swipeable={true}
          draggable={false}
          infinite={true}
          containerClass="carousel-container"
        >
          <button className="categories-button">Categoria A</button>
          <button className="categories-button">Categoria B</button>
          <button className="categories-button">Categoria C</button>
          <button className="categories-button">Categoria D</button>
          <button className="categories-button">Categoria E</button>
          <button className="categories-button">Categoria F</button>
          <button className="categories-button">Categoria G</button>
          <button className="categories-button">Categoria H</button>
          <button className="categories-button">Categoria I</button>
          <button className="categories-button">Categoria J</button>
          <button className="categories-button">Categoria K</button>
        </Carousel>
      </div>
    </>
  );
}

export default Categories;
