import React from "react";
import "./info.css";
import { FaHouseUser } from "react-icons/fa";
import { AiTwotoneHome } from "react-icons/ai";
import { BsBuildings } from "react-icons/bs";
import { IoMdBookmark } from "react-icons/io";
import { BsHouseDoor } from "react-icons/bs";
const Info = () => {
  return (
    <div className="info">
      <div className="info-box">
        <div className="info-item-box">
          <div className="info-item">
            <div>
              <BsHouseDoor className="info-item-icon" />
            </div>
            <div className="info-item-text">
              <h2>HOMES FOR SALE</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium
              </p>
            </div>
            <button type="button">LISTINGS</button>
          </div>
          {/*  */}
          <div className="info-item">
            <div>
              <BsBuildings className="info-item-icon" />
            </div>
            <div className="info-item-text">
              <h2>HOMES FOR SALE</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium
              </p>
            </div>
            <button type="button">LISTINGS</button>
          </div>
          {/*  */}
          <div className="info-item">
            <div>
              <IoMdBookmark className="info-item-icon" />
            </div>
            <div className="info-item-text">
              <h2>HOMES FOR SALE</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium
              </p>
            </div>
            <button type="button">LISTINGS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
