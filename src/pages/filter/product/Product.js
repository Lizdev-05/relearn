import React from "react";
import "./Product.css";
import { products } from "../../../products-data";
import product1 from "../images/7.png";

const Product = () => {
  return (
    <div className="product --card">
      {products.map((product) => {
        let { id, title, price, category, img } = product;
        return (
          <div key={id}>
            <img src={img} alt="product image" />
            <div className="content --center-all --p">
              <h3 className="--text-light">{title}s</h3>
              <div className="--flex-between --width-100">
                <span className="--text-light">{price}</span>
                <button className="--btn -btn-danger">Add to Cart</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
