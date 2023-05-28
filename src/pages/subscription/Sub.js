import React from "react";

const Sub = () => {
  return (
    <div className="price-box">
      <div className="box">
        <p>Basic</p>
        <h4>
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
