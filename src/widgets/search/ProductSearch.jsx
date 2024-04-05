import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../store/products/products.actions";
import "./ProductSearch.css";

const ProductSearch = () => {
  const [searchVal, setSearchVal] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getProducts(searchVal.trim()));
  };

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <input
        className="search-input"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        placeholder="Search products..."
      />
    </form>
  );
};

export default ProductSearch;
