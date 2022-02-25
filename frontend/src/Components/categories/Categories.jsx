import React, { useContext, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./categories.css";
import loading from "../../resources/rings.svg";

function Categories() {
  const { categories, setCategories } = useContext(AppContext);

  // useEffect(() => {
  //   let endpointRequest = `http://localhost:3001/api/categorias`;
  //   fetch(endpointRequest)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       // setCategories(data.data);
  //       // console.log(Categories);
  //     });
  // }, []);

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
          {/* {categories.length > 0 ? (
            categories.map((category) => (
              <button className="categories-button" id={category.id}>
                {category.name}
              </button>
            ))
          ) : (
            <img src={loading} alt="Loader" className="loader" />
          )} */}
          <button className="categories-button">Categoria a</button>
          <button className="categories-button">Categoria b</button>
          <button className="categories-button">Categoria c</button>
          <button className="categories-button">Categoria d</button>
          <button className="categories-button">Categoria e</button>
          <button className="categories-button">Categoria f</button>
        </Carousel>
      </div>
    </>
  );
}

export default Categories;
