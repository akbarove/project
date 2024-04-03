import React from "react";
import Input from "../../widgets/input/Input";
import Button from "../../widgets/button/Button";
import AuthForm from "../../features/Auth/AuthForm";

const RegisterPage = () => {
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
