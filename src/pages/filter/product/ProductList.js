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
          <h2 className="--color-white --text-center">
            <span className="color-green ">Product</span> Filter
          </h2>
          <div className="--flex-between --flex-dir-column --py">
            <Search />
            <Categories />
          </div>
        </header>
      </div>
      <div className="product-container">
        <div className="product container --grid-25 --py2 ">
          <Product />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
