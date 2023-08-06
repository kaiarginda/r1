import React from "react";
import "./details.css";
import { TfiBookmark } from "react-icons/tfi";
const Details = () => {
  return (
    <div className="details">
      <h2>A Real Estate Agent You Can Trust</h2>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium <br /> totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et
      </p>
      <div className="details-container">
        <div className="details-item">
          <TfiBookmark className="icon" />
          <h3>NO HIDDEN FEES</h3>
          <span className="details-item-p">
            Quidem rerum facilis est et expedita distinctio. Nam libero tempore,
            cum soluta nobis est eligendi optio cumque nihil impedit quo minus
          </span>
        </div>
        {/*  */}
        <div className="details-item details-active">
          <TfiBookmark className="icon" />
          <h3>NO HIDDEN FEES</h3>
          <span className="details-item-p">
            Quidem rerum facilis est et expedita distinctio. Nam libero tempore,
            cum soluta nobis est eligendi optio cumque nihil impedit quo minus
          </span>
        </div>

        {/*  */}
        <div className="details-item">
          <TfiBookmark className="icon" />
          <h3>NO HIDDEN FEES</h3>
          <span className="details-item-p">
            Quidem rerum facilis est et expedita distinctio. Nam libero tempore,
            cum soluta nobis est eligendi optio cumque nihil impedit quo minus
          </span>
        </div>
      </div>
    </div>
  );
};

export default Details;
