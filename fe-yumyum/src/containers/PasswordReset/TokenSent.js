import React from "react";
import { useHistory } from "react-router-dom";
import { Styles } from "./Style";

const TokenSent = () => {
  const email = localStorage.getItem("email_reset_password");
  const history = useHistory();
  return (
    <Styles>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Token Telah Dikirim</h5>
          <p className="card-text mt-3">
            Token telah terkirim ke <span>{email}</span>
          </p>
          <small>
            Belum menerima token ?
            <span
              onClick={() => history.goBack()}
              className="resend-token"
              style={{ fontWeight: 500 }}
            >
              kirim ulang
            </span>
          </small>
          {/* <div>
            <img src="/assets/logo.png" alt="" className="logo" />
            Terima kasih telah menggunakan YumYumApp
          </div> */}
        </div>
      </div>
    </Styles>
  );
};

export default TokenSent;
