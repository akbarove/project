import React from "react";
import Navbar from "../widgets/navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";
import AuthDetails from "../pages/auth/AuthDetails";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
