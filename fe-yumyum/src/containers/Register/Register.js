import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Image, Row, Spinner } from "react-bootstrap";
import {
  ArrowLeft,
  EnvelopeFill,
  GeoAltFill,
  LockFill,
  PersonFill,
  TelephoneFill,
} from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Styles from "./RegisterStyles";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function Register(props) {
  document.title = "Register | YumYum";
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    contact: "",
    address: "",
    role: "user",
  });
  const history = useHistory();
  const togglePasswordVisiblity = () => {
    setPasswordShow(passwordShow ? false : true);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordShow(confirmPasswordShow ? false : true);
  };

  function handleOnChange(e) {
    const newData = { ...input };
    newData[e.target.id] = e.target.value;
    setInput(newData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataUser = {
      name: input.name,
      email: input.email,
      password: input.password,
      password_confirmation: input.password_confirmation,
      contact: input.contact,
      address: input.address,
      role: input.role,
    };

    setLoading(true);

    axios
      .post("/register", dataUser)
      .then((res) => {
        setLoading(false);
        localStorage.setItem("token", res.data.token);
        props.setUser(res.data);
        window.location.href = "/";
      })
      .catch((err) => {
        setLoading(false);
        setError(Object.values(err.response.data.errors)[0]);
      });
  };

  if (localStorage.getItem("user") !== null) {
    return <Redirect to="/" />;
  }

  const formRegister = (
    <>
      <h1 className="title">Register</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <div className="icon-contain">
            <PersonFill />
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control form-noborder"
              id="name"
              placeholder="Name"
              onChange={handleOnChange}
              value={input.name}
              required
            />
            <label htmlFor="name">Name</label>
          </div>
        </div>

        <div className="form-field">
          <div className="icon-contain">
            <EnvelopeFill />
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control form-noborder"
              id="email"
              placeholder="Email"
              onChange={handleOnChange}
              value={input.email}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>

        <div className="form-field">
          <div className="icon-contain">
            <GeoAltFill />
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control form-noborder"
              id="address"
              placeholder="Aktifkan lokasi untuk input otomatis"
              onChange={handleOnChange}
              value={input.address}
              required
            />
            <label htmlFor="address">Addres</label>
          </div>
        </div>

        <div className="form-field">
          <div className="icon-contain">
            <TelephoneFill />
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control form-noborder"
              id="contact"
              placeholder="No. Handphone"
              onChange={handleOnChange}
              value={input.contact}
              pattern="[0-9]{10,}"
              required
              title="No. Handphone harus berupa angka dan terdiri dari 10 digit atau lebih"
            />
            <label htmlFor="contact">Contact</label>
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
              name="password"
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
              src={`/assets/auth/icons/${
                passwordShow ? "eye" : "eye-slash"
              }.svg`}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div className="form-field">
          <div className="icon-contain">
            <LockFill />
          </div>
          <div className="form-floating">
            <input
              type={confirmPasswordShow ? "text" : "password"}
              className="form-control form-noborder"
              id="password_confirmation"
              name="password-confirm"
              placeholder="Password"
              onChange={handleOnChange}
              value={input.password_confirmation}
              pattern=".{8,}"
              required
              title="8 characters minimum"
            />
            <label htmlFor="password_confirmation">Konfirmasi Password</label>
            <Image
              className="password-visible"
              onClick={toggleConfirmPasswordVisibility}
              src={`/assets/auth/icons/${
                confirmPasswordShow ? "eye" : "eye-slash"
              }.svg`}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <p className="text-danger">{error}</p>
        <Button
          variant="warning"
          type="submit"
          className="float-end register-button"
        >
          Register
        </Button>
      </form>
      <div className="register-check">
        Sudah punya akun ? <Link to="/login">Masuk</Link>
      </div>
    </>
  );

  // user open on mobile
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
        <div className="card">{formRegister}</div>
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
            <Container>{formRegister}</Container>
          </Col>
        </Row>
      </div>
      {loading && (
        <div className="loading">
          <Spinner animation="border" variant="warning" />
        </div>
      )}
    </Styles>
  );
}

export default Register;
