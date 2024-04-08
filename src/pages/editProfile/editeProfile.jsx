import React, { useEffect, useState } from "react";

import { editProfile, getCurrentUser } from "../../store/users.actions";

import Input from "../../widgets/input2/Input2";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const editeProfile = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { users } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getCurrentUser());

    if (user) {
      setUser({
        profileImage: user.profileImage,
        backgroundImage: user.backgroundImage,
        username: user.username,
        password: user.password,
        email: user.email,
        description: user.description,
      });
    }
  }, [dispatch, user]);

  function handleChange(e) {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    for (let key in user) {
      if (!user[key]) {
        alert("Some inputs are empty!");
        return;
      }
    }

    if (user.password.length < 6) {
      alert("Password must be more than 6 symbols");
      return;
    }

    dispatch(editProfile({ user, id: currentUser.id }, dispatch));
    setUser({
      profileImage: "",
      backgroundImage: "",
      username: "",
      password: "",
      email: "",
      description: "",
    });
    navigate("/profile");
  }
  return (
    <div>
      <form className="formStyles" onSubmit={handleSubmit}>
        <h2>Edit profile</h2>
        <Input
          onChange={handleChange}
          name="username"
          value={user.username}
          type="text"
        />
        <Input
          onChange={handleChange}
          name="password"
          value={user.password}
          type="text"
        />

        <Input
          onChange={handleChange}
          name="email"
          value={user.email}
          type="email"
        />
        <Input
          onChange={handleChange}
          name="description"
          value={user.description}
          type="text"
        />

        <Input
          onChange={handleChange}
          name="profileImage"
          value={user.profileImage}
          type="url"
        />
        <Input
          onChange={handleChange}
          name="backgroundImage"
          value={user.backgroundImage}
          type="url"
        />
        <Button>Edit</Button>
      </form>
    </div>
  );
};

export default editeProfile;
