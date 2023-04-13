import React, { useState } from "react";
import Categories from "../category/Categories";
import Product from "../product/Product";
import Search from "../search/Search";
import "./ProductList.css";
import { products as items } from "../../../products-data";

const ProductList = () => {
  const [products, setProducts] = useState(items);
  return (
    <div>
      <div className="header">
        <header className="container">
          <h2 className="--color-white --text-center">
            <span className="color-green ">Product</span> Filter
          </h2>
          <div className="--flex-between ---flex-dir-column--py">
            <Search />
            <Categories />
          </div>
        </header>
      </div>
      <div className="product-container">
        <div className="products container --grid-25 --py2 ">
          {products.map((product) => {
            const { id, title, price, category, img } = product;
            return (
              <div key={id}>
                <Product title={title} price={price} img={img} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
