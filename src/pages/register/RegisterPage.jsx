import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <AuthForm>
        <form className="formStyles" onSubmit={handleSubmit}>
          <h2>Register form</h2>
          <Input
            // onChange={handleChange}
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
            value={user.passwordConfirm}
            type="password"
          />
          <Input
            // onChange={handleChange}
            name="email"
            value={user.email}
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