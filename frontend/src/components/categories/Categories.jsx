import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./categories.css";

function Categories() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="carousel-container">
        {/* <Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={this.props.deviceType !== "mobile" ? true : false}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    deviceType={this.props.deviceType}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
  > */}

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
