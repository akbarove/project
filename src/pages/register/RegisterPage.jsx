import React, { useState } from "react";
import Input from "../../widgets/input/Input";
import Button from "../../widgets/button/Button";
import AuthForm from "../../features/Auth/AuthForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const RegisterPage = () => {
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({
    username: "",
    password: "",
    passwordConfirm: "",

    profileImage: "",

    posts: [],
  });
  function handleChange(e) {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    for (let key in user) {
      if (!user[key]) {
        alert("Some inputs are empty!");
        return;
      }
    }
    if (user.password !== user.passwordConfirm) {
      alert("Passwords do not match");
      return;
    }

    if (user.password.length < 6) {
      alert("Password must be more than 6 symbols");
      return;
    }

    // const userObj = await users.find(
    //   (item) =>
    //     item.username.toLocaleLowerCase() === user.username.toLocaleLowerCase()
    // );

    // if (userObj) {
    //   alert("You have already registered");
    //   return;
    // }

    setUser({
      username: "",
      password: "",
      passwordConfirm: "",
      email: "",
      profileImage: "",
      backgroundImage:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      posts: [],
    });
    navigate("/");
  }

  return (
    <div>
      <AuthForm>
        <form className="formStyles">
          <h2>Register form</h2>
          <Input
            // onChange={handleChange}
            placeholder="username"
            name="username"
            // value={user.username}
            type="text"
          />
          <Input
            // onChange={handleChange}
            name="password"
            // value={user.password}
            type="password"
          />
          <Input
            // onChange={handleChange}
            name="passwordConfirm"
            //   value={user.passwordConfirm}
            type="password"
          />
          <Input
            // onChange={handleChange}
            name="email"
            //   value={user.email}
            type="email"
          />
          <Input
            // onChange={handleChange}
            name="profileImage"
            // value={user.profileImage}
            type="url"
          />
          <Button>Sign up</Button>
        </form>
      </AuthForm>
    </div>
  );
};

export default RegisterPage;
