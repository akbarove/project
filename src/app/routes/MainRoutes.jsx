import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import AddProduct from "../../pages/products/add/AddProduct";
import EditProduct from "../../pages/products/edit/EditProduct";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/create-product" element={<AddProduct />} />
      <Route path="/edit-product/:id" element={<EditProduct />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default MainRoutes;
