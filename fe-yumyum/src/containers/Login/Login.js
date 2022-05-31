import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { ArrowLeft, LockFill, PersonFill } from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import Styles from "./LoginStyles";

function Login(props) {
  document.title = "Login | YumYum";
  const [passwordShow, setPasswordShow] = useState(false);
  const [input, setInput] = useState({
    login: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const togglePasswordVisiblity = () => {
    setPasswordShow(passwordShow ? false : true);
  };
  const [error, setError] = useState("");

  const passwordEyeIcon = `/assets/auth/icons/${
    passwordShow ? "eye" : "eye-slash"
  }.svg`;

  const handleOnChange = (e) => {
    const newData = { ...input };
    newData[e.target.id] = e.target.value;
    setInput(newData);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const dataUser = {
      username: input.login,
      password: input.password,
    };

    setLoading(true);

    axios
      .post("/login", dataUser)
      .then((res) => {
        props.setUser(res.data);
        localStorage.setItem("token", res.data.token);
        setLoading(false);
        window.location.href = "/";
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.message);
      });
  };
  if (localStorage.getItem("token")) {
    return <Redirect to="/" />;
  }

  const formLogin = (
    <>
      <h1 className="title">Login</h1>
      <form onSubmit={handleOnSubmit}>
        <div className="form-field">
          <div className="icon-contain">
            <PersonFill />
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control form-noborder error"
              id="login"
              placeholder="Username or Email"
              onChange={handleOnChange}
              value={input.login}
              required
            />
            <label htmlFor="login">Username / Email</label>
          </div>
        </div>

        <div className="form-field">
          <div className="icon-contain">
            <LockFill />
          </div>
          <div className="form-floating">
            <input
              type={passwordShow ? "text" : "password"}
              className="form-control form-noborder"
              id="password"
              placeholder="Password"
              onChange={handleOnChange}
              value={input.password}
              pattern=".{8,}"
              required
              title="8 characters minimum"
            />
            <label htmlFor="password">Password</label>
            <Image
              className="password-visible"
              onClick={togglePasswordVisiblity}
              src={passwordEyeIcon}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <p className="text-danger">{error}</p>
        <Link to={"/password"} className="forgot-pass">
          Lupa Password?
        </Link>
        <Button
          variant="warning"
          type="submit"
          className="float-end login-button"
        >
          Masuk
        </Button>
      </form>
      <div className="login-check">
        Belum punya akun? <Link to="/register">Daftar</Link>
      </div>
    </>
  );

  // detect if user in mobile
  const isMobile = window.innerWidth < 576;
  if (isMobile) {
    return (
      <Styles>
        <div
          className="arrow-back"
          style={{
            position: "absolute",
            top: "3%",
            left: "3%",
            cursor: "pointer",
          }}
          onClick={() => history.push("/")}
        >
          <ArrowLeft size={32} color="white" />
        </div>
        <div className="card">{formLogin}</div>
      </Styles>
    );
  }
  return (
    <Styles>
      <div className="content">
        <div
          className="arrow-back"
          style={{
            position: "absolute",
            top: "3%",
            left: "3%",
            cursor: "pointer",
          }}
          onClick={() => history.push("/")}
        >
          <ArrowLeft size={32} color="white" />
        </div>
        <Row>
          <Col>
            <Image src="/assets/auth/auth-bg.jpg" />
          </Col>
          <Col>
            <Container>{formLogin}</Container>
          </Col>
        </Row>
      </div>
      {loading === true && (
        <div className="loading">
          <Spinner animation="border" variant="warning" />
        </div>
      )}
    </Styles>
  );
}

export default Login;
