import styled from "styled-components";

const Styles = styled.div`
  body {
    margin: 0;
    padding: 0;
  }

  /* * {
    border: 1px solid black;
  } */

  .content {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
  }

  .col {
    height: 100vh;
  }

  .col img {
    height: 100%;
    width: 90%;
    object-fit: cover;
  }

  .container {
    margin-left: -3rem;
    margin-top: 2rem;
    position: relative;
    height: 100vh;
  }

  .container .title {
    font-weight: 700;
    font-size: 46px;
  }

  .container form {
    position: absolute;
    margin-top: 2.5rem;
    top: 40%;
    left: 3%;
    right: 0;
    transform: translate(0%, -50%);
  }

  .form-field {
    display: flex;
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: #858585;
  }

  .form-field:focus-within {
    border-color: var(--main-color);

    .icon-contain svg {
      color: var(--main-color);
    }
  }

  .form-field .form-floating {
    width: 100%;
  }

  .form-field .icon-contain {
    width: 50px;
  }

  .form-field .icon-contain svg {
    width: 60%;
    height: 60%;
    margin-top: 25%;
    margin-left: 20%;
    color: grey;
  }

  .form-floating .form-noborder {
    border-width: 0px;
  }

  .form-floating > label {
    font-weight: 200;
  }

  .form-floating .form-noborder:focus {
    box-shadow: none;
  }

  .form-floating .password-visible {
    object-fit: contain;
    height: 50%;
    width: auto;
    position: absolute;
    top: 20px;
    right: 15px;
  }

  .forgot-pass {
    text-decoration: none;
    color: #474747;
    font-size: 15px;
    margin-top: 1rem;
    display: block;
  }

  .forgot-pass:hover {
    color: var(--main-color);
  }

  .register-button {
    width: 179px;
    height: 47px;
    border-radius: 25px;
    background-color: var(--main-color);
    font-size: 20px;
    font-weight: 500;
    color: var(--text-color);
  }

  .register-check {
    text-align: center;
    font-weight: normal;
    font-size: 16px;
    color: #212041;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10%;
  }

  .register-check a {
    font-weight: 500;
    text-decoration: none;
    color: #212041;
  }

  .register-check a:hover {
    color: #4e4e4ed8;
  }

  @media (max-width: 576px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("/assets/auth/auth-bg.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    .card {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 90%;
      transform: translate(-50%, -50%);
      padding: 2rem 0.5rem;

      .title {
        font-size: 36px;
        text-align: center;
      }

      form {
        width: 90%;
        text-align: center;
        margin: auto;

        .form-field {
          margin-bottom: 0.5rem;
        }

        .text-danger {
          text-align: start;
          margin-bottom: 0;
        }

        .forgot-pass {
          margin: 0 !important;
          margin-bottom: 0.5rem !important;
          display: block !important ;
          text-align: start;
        }

        .register-button {
          display: block !important;
          margin: auto;
          margin-bottom: 0.5rem;
          float: none !important;
          font-size: 18px;
        }
      }
      .register-check {
        position: relative;
        margin-bottom: -1rem;
      }
    }
  }

  .loading {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
  }

  .spinner-border {
    position: fixed;
    width: 100px;
    height: 100px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    z-index: 9999;
  }
`;

export default Styles;
