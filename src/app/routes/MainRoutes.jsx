import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import AddProduct from "../../pages/products/add/AddProduct";
import EditProduct from "../../pages/products/edit/EditProduct";
import RegisterPage from "../../pages/register/RegisterPage";
import AuthProvider from "../AuthProvider";
import ProfilePage from "../../pages/profile/ProfilePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/create-product" element={<AddProduct />} />
      <Route path="/edit-product/:id" element={<EditProduct />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* <Route path="/login" element={<LoginPage />} /> */}
      <Route element={<AuthProvider />}>
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
