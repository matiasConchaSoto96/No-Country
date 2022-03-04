import React, { useContext, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./categories.css";
import loading from "../../resources/rings.svg";

function Categories() {
  const { categories, setCategories, setFilter, filter } =
    useContext(AppContext);

  useEffect(() => {
    let endpointRequest = `http://localhost:3001/api/categorias`;
    fetch(endpointRequest)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategories(data.data);
      });
  }, []);

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

  const classNameGenerator = (name, state) => {
    let classNames = ["categories-button"];
    if (name === state) {
      classNames.push("selected-category");
    }
    return classNames.join(" ");
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
          {categories.length > 0 ? (
            categories.map((category) => (
              <button
                className={classNameGenerator(category.name, filter)}
                id={category.id}
                key={category.id}
                onClick={(e) => setFilter(e.target.name)}
                name={category.name}
              >
                {category.name}
              </button>
            ))
          ) : (
            <img src={loading} alt="Loader" className="loader" />
          )}
        </Carousel>
      </div>
    </>
  );
}

export default Categories;
