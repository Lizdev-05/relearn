import React, { useEffect, useState } from "react";
import Categories from "../category/Categories";
import Product from "../product/Product";
import Search from "../search/Search";
import "./ProductList.css";
import { products as items } from "../../../products-data";

const allCategories = [
  "all",
  ...new Set(items.map((product) => product.category)),
];
const ProductList = () => {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterProducts = (category) => {
    if (category === "all") {
      setFilteredProducts(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setFilteredProducts(newItems);
  };
  useEffect(() => {
    console.log(search);
    setFilteredProducts(
      items.filter((product) =>
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
            <Categories categories={categories} filterItems={filterProducts} />
          </div>
        </header>
      </div>
      <div className="product-container">
        <div className="products container --grid-25 --py2 ">
          {filteredProducts.length === 0 ? (
            <h2 className="--center-all --color-danger">No Product Found!!!</h2>
          ) : (
            filteredProducts.map((product) => {
              const { id, title, price, img } = product;
              return (
                <div key={id}>
                  <Product title={title} price={price} img={img} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
