import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/login/LoginPage";


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default MainRoutes;
