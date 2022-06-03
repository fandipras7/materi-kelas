import React, { useState } from "react";

const Login = () => {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <ul>
          <li>
            <input type="email" name="email" id="email" value={formLogin.email} onChange={handleChange} />
          </li>
          <li>
            <input type="password" name="password" id="password" value={formLogin.password} onChange={handleChange} />
          </li>
          <button>Login</button>
        </ul>
      </form>
    </div>
  );
};

export default Login;
