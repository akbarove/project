import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import RegisterPage from "../../pages/auth/register/RegisterPage";
import LoginPage from "../../pages/auth/login/LoginPage";
import ProfilePage from "../../pages/profile/ProfilePage";
import AuthProvider from "./AuthProvider";
import UsersPage from "../../pages/users/UsersPage";
import EditProduct from "../../pages/products/edit/EditProduct";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<AuthProvider />}>
        <Route path="edit-product/:id" element={<EditProduct />} />
        <Route
          path="/profile"
          element={<ProfilePage currentUser={currentUser} />}
        />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
