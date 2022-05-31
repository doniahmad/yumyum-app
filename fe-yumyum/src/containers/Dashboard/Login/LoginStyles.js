import styled from "styled-components";

export const Styles = styled.div`
  .container-login {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #eeeeee;
  }

  .card-login {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 400px;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .title {
    margin-top: 1rem;
  }

  form {
    margin-top: 2rem;
  }

  .container {
    padding: 2rem;
  }

  .form-input {
    position: relative;
  }

  .form-input .password-visible {
    width: 25px;
    position: absolute;
    right: 15px;
    top: 38px;
  }

  form .btn {
    width: 100px;
  }

  .forgot-pass {
    text-decoration: none;
    color: #474747;
    font-size: 15px;
    margin-top: 1rem !important;
  }

  .forgot-pass:hover {
    color: var(--main-color);
  }

  @media (max-width: 576px) {
    .card-login {
      width: 100%;
    }

    .container {
      padding: 1rem;
    }

    .btn {
      margin: 2rem auto !important;
    }
  }
`;
