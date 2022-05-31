import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Styles } from "./LoginStyles";

function Login() {
  const togglePasswordVisiblity = () => {
    setPasswordShow(passwordShow ? false : true);
  };
  const [input, setInput] = useState({
    login: "",
    password: "",
  });
  const [passwordShow, setPasswordShow] = useState(false);
  const [error, setError] = useState("");

  const passwordEyeIcon = `/assets/auth/icons/${
    passwordShow ? "eye" : "eye-slash"
  }.svg`;

  function handleOnChange(e) {
    const newData = { ...input };
    newData[e.target.id] = e.target.value;
    setInput(newData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataUser = {
      username: input.login,
      password: input.password,
    };

    axios
      .post("/login/admin", dataUser)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("admin", JSON.stringify(res.data.user));
        localStorage.setItem("role", res.data.user.roles[0].name.admin);
        window.location.href = "/dashboard";
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  return (
    <Styles>
      <div className="container-login">
        <div className="card-login">
          <div className="container">
            <h1 className="title text-center">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 form-input">
                <label htmlFor="email" className="form-label">
                  Username or Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="login"
                  required
                  onChange={handleOnChange}
                />
              </div>
              <div className="mb-3 form-input">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type={passwordShow ? "text" : "password"}
                  className="form-control"
                  id="password"
                  pattern=".{8,}"
                  required
                  onChange={handleOnChange}
                  title="8 characters minimum"
                />
                <img
                  className="password-visible"
                  onClick={togglePasswordVisiblity}
                  src={passwordEyeIcon}
                  style={{ cursor: "pointer" }}
                  alt=""
                />
              </div>
              <div className="text-danger">{error}</div>
              <Link to={"/password"} className="forgot-pass">
                Lupa Password?
              </Link>
              <button className="btn btn-primary ms-auto d-block" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </Styles>
  );
}

export default Login;
