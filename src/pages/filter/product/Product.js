import React from "react";
import "./Product.css";

const Product = ({ img, title, price }) => {
  return (
    <div className="product --card">
      <img src={img} alt="product image" />
      <div className="content --center-all --p">
        <h3 className="--text-light">{title}</h3>
        <div className="--flex-between --width-100">
          <span className="--text-light">{price}</span>
          <button className="--btn -btn-danger">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
