import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import image from "../defaultProfilePhoto/Default_pfp.svg.png";
import Button from "../button/Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // const [user, setUser] = useState({
  //   profileImage: image,
  //   username: "",
  // });

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
        <Link to="/create-product">
          <Button style={{ color: "white" }} color="green">
            Create product
          </Button>
        </Link>

        <Link to="/edit-profile">
          <Button style={{ color: "white" }}>Edit profile</Button>
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
