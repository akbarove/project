import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import AddProduct from "../../pages/products/add/AddProduct";
import EditProduct from "../../pages/products/edit/EditProduct";
import RegisterPage from "../../pages/register/RegisterPage";
import AuthProvider from "../AuthProvider";
import ProfilePage from "../../pages/profile/ProfilePage";
import LoginPage from "../../pages/login/LoginPage";
import Contact from "../../pages/contactus/Contact";
import editeProfile from "../../pages/editProfile/editeProfile";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/create-product" element={<AddProduct />} />
      <Route path="/edit-product/:id" element={<EditProduct />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/editeProfile" element={<editeProfile />} />
      {/* <Route path="/login" element={<LoginPage />} /> */}
      <Route path="/contact" element={<Contact />} />
      <Route element={<AuthProvider />}>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
