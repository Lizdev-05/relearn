import React from "react";
import Product from "../product/Product";
import Search from "../search/Search";

const ProductList = () => {
  return (
    <div>
      <div className="header-container">
        <header className="container">
          <h2>
            <span>Product</span>Filter
          </h2>
          <div>
            <Search />
            <Product />
          </div>
        </header>
      </div>
    </div>
  );
};

export default ProductList;
