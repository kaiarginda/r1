import React from "react";
import "./listings.css";
const Listings = () => {
  return (
    <div className="listings">
      <h2>Recent Listings</h2>
      <p className="listings-firstp">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum <br /> deleniti atque corrupti quos
        dolores
      </p>
      <div className="listings-box">
        <div className="listings-row">
          <div className="listings-row-item">
            <div className="ls-row-item-img-box">
              <img
                src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/04/real-estate-11.jpg"
                alt=""
              />
              <button type="button" className="ls-btn">
                VIEW LISTINGS <span>&rarr;</span>
              </button>
            </div>
            <div className="ls-row-item-text">
              <p className="ls-item-row-p">Single Family Home</p>
              <h1>$989,000</h1>
              <p className="ls-item-row-p">2,503 Sq Ft. • 5 Beds • 3 Baths</p>
              <p>495 Divi Dr.</p>
              <p className="pb-50"> San Francisco, CA 39244</p>
            </div>
          </div>

          {/*  */}
          <div className="listings-row-item">
            <div className="ls-row-item-img-box">
              <img
                src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/04/real-estate-09.jpg"
                alt=""
              />
              <button type="button" className="ls-btn">
                VIEW LISTINGS <span>&rarr;</span>
              </button>
            </div>
            <div className="ls-row-item-text">
              <p className="ls-item-row-p">Single Family Home</p>
              <h1>$654,000</h1>
              <p className="ls-item-row-p">1,756 Sq Ft. • 2 Beds • 2 Baths</p>
              <p>564 Elegant Ave.</p>
              <p className="pb-50"> Los Angeles, LS 12295</p>
            </div>
          </div>
          {/*  */}
          <div className="listings-row-item">
            <div className="ls-row-item-img-box">
              <img
                src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/04/real-estate-12.jpg"
                alt=""
              />
              <button type="button" className="ls-btn">
                VIEW LISTINGS <span>&rarr;</span>
              </button>
            </div>
            <div className="ls-row-item-text">
              <p className="ls-item-row-p">Single Family Home</p>
              <h1>$1,012,895</h1>
              <p className="ls-item-row-p">3,921 Sq Ft. • 8 Beds • 5 Baths</p>
              <p>6578 Monarch St.</p>
              <p className="pb-50"> San Antonio, SA 97441</p>
            </div>
          </div>
        </div>
        <div className="listings-row">
          <div className="listings-row-item">
            <div className="ls-row-item-img-box">
              <img
                src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/04/real-estate-08.jpg"
                alt=""
              />
              <button type="button" className="ls-btn">
                VIEW LISTINGS <span>&rarr;</span>
              </button>
            </div>
            <div className="ls-row-item-text">
              <p className="ls-item-row-p">Office Space</p>
              <h1>$954,000</h1>
              <p className="ls-item-row-p">2,211 Sq Ft. • 3 Spaces</p>
              <p>123 Extra Ct.</p>
              <p className="pb-50"> San Francisco, CA 39222</p>
            </div>
          </div>
          <div className="listings-row-item">
            <div className="ls-row-item-img-box">
              <img
                src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/04/real-estate-07.jpg"
                alt=""
              />
              <button type="button" className="ls-btn">
                VIEW LISTINGS <span>&rarr;</span>
              </button>
            </div>
            <div className="ls-row-item-text">
              <p className="ls-item-row-p">Condo</p>
              <h1>$302,000</h1>
              <p className="ls-item-row-p">1,854 Sq Ft. • 2 Beds • 1 Baths</p>
              <p>8965 Bloom Blvd. #604</p>
              <p className="pb-50"> Berkeley, CA 91882</p>
            </div>
          </div>
          <div className="listings-row-item">
            <div className="ls-row-item-img-box">
              <img
                src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/04/real-estate-10-1.jpg"
                alt=""
              />
              <button type="button" className="ls-btn">
                VIEW LISTINGS <span>&rarr;</span>
              </button>
            </div>
            <div className="ls-row-item-text">
              <p className="ls-item-row-p">Apartment</p>
              <h1>$1800</h1>
              <p className="ls-item-row-p">650 Sq Ft. • 1 Beds • 1 Baths</p>
              <p>3542 Blue Sky Dr. #301</p>
              <p className="pb-50"> San Francisco, CA 39841</p>
            </div>
          </div>
        </div>
        <button type="button" className="ls-main-btn">
          VIEW ALL LISTINGS <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default Listings;
