import React from "react";
import "./pages.css";
const Pages = () => {
  window.addEventListener("scroll", () => {
    let pages = document.querySelector(".pages");

    if (+window.scrollY >= 872) {
      pages?.classList.add("opacity-1");
    }
  });

  return (
    <div className="pages">
      <div className="pages-item">
        <div className="pg-items-text">
          <h2>
            We’ll Find You The <br /> Perfect Space
          </h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
          <button type="button">BROWSE LISTINGS </button>
        </div>
        <div className="pg-items-img">
          <img
            className="pg-img-1"
            src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/04/estate_ui_illustration_04.png"
            alt=""
          />
        </div>
      </div>
      <div className="pages-item-1 pages-item">
        <div className="pg-item-1-img ds-inline">
          <img
            src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/04/real-estate-illustration-03-3.png"
            alt=""
          />
        </div>
        <div className="pg-item-1-text ">
          <h2>We Work With Your Budget</h2>
          <p>
            vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetu
          </p>
          <button type="button">FIND AN AGENT </button>
        </div>
        <div className="pg-item-1-img ds-none">
          <img
            src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/04/real-estate-illustration-03-3.png"
            alt=""
          />
        </div>
      </div>
      <div className="pages-item-2 pages-item pages-item-1">
        <div className="pg-items-text pg-items-2-text">
          <h2>
            List Your Property & Let Us Do <br /> the Rest
          </h2>

          <p>
            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
            ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse
          </p>
          <button type="button">REGISTER FOR FREE </button>
        </div>

        <div className="pages-item-2-img">
          <img
            src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/04/estate_ui_illustration_03-1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Pages;
