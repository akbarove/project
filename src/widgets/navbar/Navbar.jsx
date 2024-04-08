import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import image from "../defaultProfilePhoto/Default_pfp.svg.png";
import ProductSearch from "../search/ProductSearch";
import { getProducts } from "../../store/products/products.actions";
import { useDispatch } from "react-redux";
import CartButton from "../cartButton/CartButton";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const handler = () => {
      setOpen(false);
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className="navbar">
      <Link className="logo" to="/">
        <h2>MashinaBishkek</h2>
      </Link>
      <div className="navbarUser">
        <ProductSearch />
        <Link to="/cart">
          <CartButton />
        </Link>
        <Link to="/profile">UserName</Link>
      </div>
      <div className="navImage">
        <img alt="" onClick={() => setOpen(!open)} src={image} />
      </div>

      <div className={`navMenu ${open ? "active" : ""}`}>
        <div>
          <Link to="/profile">My profile</Link>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
        >
          <Link to="/register">Sign up</Link>
          <Link to="/login">Sign in</Link>
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
