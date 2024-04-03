import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import RegisterPage from "../../pages/register/RegisterPage";
import AuthProvider from "../AuthProvider";
import ProfilePage from "../../pages/profile/ProfilePage";
import EditProduct from "../../pages/editProduct/EditProduct";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* <Route path="/login" element={<LoginPage />} /> */}
      <Route element={<AuthProvider />}>
        <Route path="edit-product/:id" element={<EditProduct />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
