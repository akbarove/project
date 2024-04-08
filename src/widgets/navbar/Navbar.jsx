import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import image from "../defaultProfilePhoto/Default_pfp.svg.png";
import ProductSearch from "../search/ProductSearch";
import { getProducts } from "../../store/products/products.actions";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../menu/Menu";

import CartButton from "../cartButton/CartButton";

import AuthDetails from "../../pages/auth/AuthDetails";
import { auth } from "../../firebas/firebase";
import { signOut } from "firebase/auth";


const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: "Home", href: "/" },
    { value: "Profile", href: "/profile" },
    { value: "Products", href: "/products" },
    { value: "Contact us", href: "/contact" },
  ];

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
  function userSignOut() {
    signOut(auth)
      .then(() => console.log("success"))
      .catch((e) => console.log(e));
  }

  return (
    <div className="navbar">
      <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
        <span />
      </div>
      <Menu
        active={menuActive}
        setActive={setMenuActive}
        header={"Menu"}
        items={items}
      />
      <Link className="logo" to="/">
        <h2>MashinaBishkek</h2>
      </Link>

      <div className="navbarUser">
        <ProductSearch />

        <Link to="/cart">
          <CartButton />
        </Link>
        

        <Link to="/profile"><AuthDetails/></Link>

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
          <Link onClick={userSignOut} to="/" >log out</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
