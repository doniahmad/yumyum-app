import axios from "axios";
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import Swal from "sweetalert2";
import { Styles } from "./Style";

const SendEmail = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const emailResetPassword = localStorage.getItem("email_reset_password");
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("email", email);
    localStorage.setItem("email_reset_password", email);
    axios
      .post("/password/forgot", data)
      .then((res) => {
        setLoading(false);
        Swal.fire({
          title: "Email Telah Dikirim",
          icon: "success",
          confirmButtonColor: "#3085d6",
        }).then(() => {
          window.location.href = "/web-restaurant/password/token_sent";
        });
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  return (
    <Styles>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Temukan Akun</h5>
          <p>
            Masukkan email yang sesuai dengan yang anda gunakan di akun anda.
          </p>
          <div className="form-group">
            <form onSubmit={sendEmail}>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan Email"
                defaultValue={emailResetPassword || ""}
                required
                style={{ marginBottom: "0px" }}
              />
              <small style={{ color: "red" }}>{error}</small>
              <button type="submit" className="btn ms-auto mt-2 d-block">
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

export default SendEmail;
