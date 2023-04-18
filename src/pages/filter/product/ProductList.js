import React, { useEffect, useState } from "react";
import Categories from "../category/Categories";
import Product from "../product/Product";
import Search from "../search/Search";
import "./ProductList.css";
import { products as items } from "../../../products-data";

const ProductList = () => {
  const [products, setProducts] = useState(items);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    );
  }, [search]);

  return (
    <div>
      <div className="header">
        <header className="container">
          <h2 className="--color-white --text-center">
            <span className="color-green ">Product</span> Filter
          </h2>
          <div className="--flex-between ---flex-dir-column--py">
            <Search inputValue={search} onInputChange={handleSearch} />
            <Categories />
          </div>
        </header>
      </div>
      <div className="product-container">
        <div className="products container --grid-25 --py2 ">
          {filteredProducts.map((product) => {
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
