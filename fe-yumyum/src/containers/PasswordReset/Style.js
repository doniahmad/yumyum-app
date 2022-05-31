import styled from "styled-components";

export const Styles = styled.div`
  background-color: #f7fbff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    padding: 10px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  }

  .card-title {
    font-size: 30px;
    font-weight: bold;
  }

  .card-text {
    font-size: 20px;
    span {
      font-weight: bold;
    }
  }

  .form-group {
    margin-top: 15px;

    label {
      font-size: 18px;
      margin-bottom: 0.5rem;
    }
  }

  .form-control {
    height: 40px;
    border-radius: 5px;
    margin-bottom: 1rem;
  }

  .form-control:focus {
    box-shadow: none;
    border-color: var(--main-color);
  }

  .btn {
    background-color: var(--main-color);
    color: white;
    width: 100px;
    height: 40px;
    border-radius: 5px;
  }

  .btn:focus {
    box-shadow: none;
  }

  .form-field {
    position: relative;
    display: flex;
    border: 1px solid #ccc;
    height: 40px;
    margin-bottom: 20px;
    border-radius: 5px;

    input {
      border: none;
      margin: 0 !important;
      padding: 0 15px;
      height: 100%;
    }

    .password-visible {
      width: 25px;
      height: 25px;
      margin-top: 7px;
      margin-right: 10px;
      color: black !important;
    }
  }

  .form-field:focus-within {
    border-color: var(--main-color);
  }

  .resend-token {
    margin-left: 0.3rem;
    cursor: pointer;

    :hover {
      color: var(--main-color);
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

  .logo {
    width: 50px;
    margin-bottom: 20px;
  }

  @media (max-width: 576px) {
    .card {
      width: 90%;
    }

    .card-title {
      font-size: 24px;
    }

    .form-group {
      margin-top: 10px;
      label {
        font-size: 16px;
      }

      small {
        font-size: 14px;
      }
    }
    .btn {
      height: 40px;
      font-size: 16px;
    }
  }
`;
