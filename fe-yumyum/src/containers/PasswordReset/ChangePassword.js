import axios from "axios";
import React, { useState } from "react";
import { Image, Spinner } from "react-bootstrap";
import Swal from "sweetalert2";
import { Styles } from "./Style";

const ChangePassword = ({ match }) => {
  const [input, setInput] = useState({
    password: "",
    password_confirmation: "",
  });
  const [loading, setLoading] = useState(false);

  const togglePasswordVisiblity = (e) => {
    const icon = e.target.getAttribute("src").includes("eye.svg");
    e.target.setAttribute(
      "src",
      `/assets/auth/icons/${icon ? "eye-slash" : "eye"}.svg`
    );
    const input = e.currentTarget.parentNode.firstChild;
    input.type = icon ? "password" : "text";
  };

  const handleOnChange = (e) => {
    const newData = { ...input };
    newData[e.target.id] = e.target.value;
    setInput(newData);
  };
  const email = localStorage.getItem("email_reset_password");

  const changePassword = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      email: email,
      token: match.params.token,
      password: input.password,
      password_confirmation: input.password_confirmation,
    };
    axios.post("/password/reset", data).then((res) => {
      setLoading(false);
      Swal.fire({
        title: "Password Berhasil Diubah",
        icon: "success",
        confirmButtonColor: "#3085d6",
      }).then((res) => {
        localStorage.removeItem("email_reset_password");
        window.location.href = "/web-restaurant/login";
      });
    });
  };
  return (
    <Styles>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Tetapkan Password Baru</h5>
          <div className="form-group">
            <form onSubmit={changePassword}>
              <div className="form-field">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={(e) => handleOnChange(e)}
                  placeholder="New Password"
                />
                <Image
                  className="password-visible"
                  onClick={togglePasswordVisiblity}
                  src="/assets/auth/icons/eye-slash.svg"
                  style={{ cursor: "pointer" }}
                  fluid
                />
              </div>
              <div className="form-field">
                <input
                  type="password"
                  className="form-control"
                  id="password_confirmation"
                  onChange={(e) => handleOnChange(e)}
                  placeholder="Confirm New Password"
                />
                <Image
                  className="password-visible"
                  onClick={togglePasswordVisiblity}
                  src="/assets/auth/icons/eye-slash.svg"
                  style={{ cursor: "pointer" }}
                  fluid
                />
              </div>
              <button type="submit" className="btn ms-auto d-block">
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
      {loading === true && (
        <div className="loading">
          <Spinner animation="border" variant="warning" />
        </div>
      )}
    </Styles>
  );
};

export default ChangePassword;
