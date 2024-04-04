import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/login/LoginPage";
import MyProfilePage from "../../pages/myprofile/MyProfilePage";


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<MyProfilePage/>}/>
    </Routes>
  );
};

export default MainRoutes;
