import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import image from "../defaultProfilePhoto/image.png";
import Button from "../button/Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({
    profileImage: image,
    username: "",
  });

  useEffect(() => {
    const handler = () => {
      setOpen(false);
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  // setUser вызывается непосредственно внутри компонента, что может вызвать проблемы с обновлением
  // setUser({
  //   profileImage: image,
  //   username: "",
  // });

  return (
    <div className="navbar">
      <Link className="logo" to="/">
        <h2>G-Evening</h2>
      </Link>
      <div className="navbarUser">
        <Link to="/create-product">
          <Button color="green">Create product</Button>
        </Link>

        <Link to="/users">
          <Button color="blue">Users</Button>
        </Link>

        <Link to="/create-post">
          <Button color="green">Create post</Button>
        </Link>

        <Link to="/edit-profile">
          <Button>Edit profile</Button>
        </Link>

        <Link to="/profile">{user.username}</Link>
      </div>
      <div className="navImage">
        <img alt="" onClick={() => setOpen(!open)} src={image} />
      </div>

      <div className={`navMenu ${open ? "active" : ""}`}>
        <div>
          <Link to="/profile">My profile</Link>
          <p>Logout</p>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
        >
          <Link to="/register">Sign up</Link>
          <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
