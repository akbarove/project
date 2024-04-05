import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link, useSearchParams } from "react-router-dom";
import image from "../defaultProfilePhoto/Default_pfp.svg.png";
import Button from "../button/Button";
import ProductSearch from "../search/ProductSearch";
import { getProducts } from "../../store/products/products.actions";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const searchQuery = searchParams.get("q");
    if (searchQuery) {
      dispatch(getProducts(searchQuery));
    } else {
      dispatch(getProducts());
    }
  }, [searchParams, dispatch]);

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
