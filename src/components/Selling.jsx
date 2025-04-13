import React from "react";
import "../components/components_style/Selling.css";

import indoorImg from "../assets/images/selling/2025-04-12_22h17_39.png";
import purifyingImg from "../assets/images/selling/2025-04-12_22h25_44.png";
import floweringImg from "../assets/images/selling/2025-04-12_22h29_20.png";

const Selling = () => {
  return (
    <div className="selling-section">
      <h2 className="section-title">
        <span className="highlight">Best</span> Selling
      </h2>
      <div className="selling-cards">
      <div className="selling-card" style={{ backgroundImage: `url(${indoorImg})` }}>

          <div className="card-text">Indoor Plants</div>
          <button className="shop-btn">Shop Now</button>
        </div>
        <div className="selling-card" style={{ backgroundImage: `url(${purifyingImg})` }}>

          <div className="card-text">Air Purifying Plants</div>
          <button className="shop-btn">Shop Now</button>
        </div>
        <div className="selling-card" style={{ backgroundImage: `url(${floweringImg})` }}>
          <div className="card-text">Flowering Plants</div>
          <button className="shop-btn">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Selling;
