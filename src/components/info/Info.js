import React from "react";
import "./info.scss";
import retro from "../../assets/image-retro-pcs.jpg";
import laptop from "../../assets/image-top-laptops.jpg";
import gaming from "../../assets/image-gaming-growth.jpg";

const Info = () => {
  return (
    <div className="info">
      <div className="info__wrapper">
        <div className="info__card-wrapper">
          <div className="info__card-img">
            <img src={retro} alt="retro pc" />
          </div>
          <div className="info__card-text">
            <div className="info__card-num">01</div>
            <div className="info__card-title">Reviving Retro PCs</div>

            <div className="info__card-descr">
              What happens when old PCs are given modern upgrades?
            </div>
          </div>
        </div>

        <div className="info__card-wrapper">
          <div className="info__card-img">
            <img src={laptop} alt="laptop" />
          </div>
          <div className="info__card-text">
            <div className="info__card-num">02</div>
            <div className="info__card-title">Top 10 Laptops of 2022</div>

            <div className="info__card-descr">
              Our best picks for various needs and budgets.
            </div>
          </div>
        </div>

        <div className="info__card-wrapper">
          <div className="info__card-img">
            <img src={gaming} alt="retro pc" />
          </div>
          <div className="info__card-text">
            <div className="info__card-num">03</div>
            <div className="info__card-title">The Growth of Gaming</div>

            <div className="info__card-descr">
              How the pandemic has sparked fresh opportunities.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
