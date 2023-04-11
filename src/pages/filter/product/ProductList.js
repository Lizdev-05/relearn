import React from "react";
import Categories from "../category/Categories";
import Product from "../product/Product";
import Search from "../search/Search";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div>
      <div className="header">
        <header className="container">
          <h2 className="--color-white">
            <span className="color-green ">Product</span> Filter
          </h2>
          <div>
            <Search />
            <Categories />
          </div>
        </header>
      </div>
      <div className="product-container">
        <div className="container">
          <Product />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
