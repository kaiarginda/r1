import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.css";
import "./testimonial.css";
const Testimonial = () => {
  return (
    <div className="testimonial">
      <Carousel
        className="carousel"
        showArrows={false}
        //   onChange={onChange}
        //   onClickItem={onClickItem}
        //   onClickThumb={onClickThumb}
      >
        <div className=".div">
          <div className="carousel-item-container">
            <img src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/03/portrait-square-07.jpg" />
            <div className="carousel-item-text">
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                <b>Diana Davis</b> <br />
                <span> Happy Buyer</span>
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className=".div">
          <div className="carousel-item-container">
            <img src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/03/portrait-square-07.jpg" />
            <div className="carousel-item-text">
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                <b>Diana Davis</b> <br />
                <span> Happy Buyer</span>
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className=".div">
          <div className="carousel-item-container">
            <img src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/03/portrait-square-07.jpg" />
            <div className="carousel-item-text">
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                <b>Diana Davis</b> <br />
                <span> Happy Buyer</span>
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonial;
