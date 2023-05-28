import React from "react";
import "./Sub.css";

const Sub = () => {
  return (
    <div className="price-box --card">
      <div className="theme1 --p2">
        <p className="--text-light">Basic</p>
        <h4 className="--text-light">
          <span>$</span>
          <span>9.99</span>
        </h4>
      </div>
      <div className="feaures">
        <ul>
          <li>Unlimited Pages</li>
          <li>Unlimited Bandwidth</li>
          <li>500GB Storage</li>
        </ul>
      </div>

      <button className="btn theme1">Buy Now!</button>
    </div>
  );
};

export default Sub;
