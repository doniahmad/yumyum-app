import styled from "styled-components";

export const Styles = styled.div`
  /* * {
    border: 1px solid black;
  } */

  background-color: #f7fbff;

  .page {
    margin-top: 5rem;
    position: relative;
    min-height: 650px;
  }

  input {
    border-color: grey;
  }

  .container {
    position: absolute;
    border-radius: 25px;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .arrow-back {
    font-size: 30px;
    margin-top: 0.3rem;
    margin-right: 1rem;
    cursor: pointer;
  }

  .image-profile {
    position: relative;
  }

  .image-profile img {
    width: 100px !important;
    height: 100px !important;
    border-radius: 100%;
    object-fit: cover;
  }

  .image-profile .edit-photo {
    background-color: white;
    border-radius: 100%;
    position: absolute;
    height: 30px;
    width: 30px;
    bottom: -10px;
    left: 52%;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  }

  .error-text {
    font-size: 14px;
    color: red;
  }

  .tooltip {
    top: 20%;
    left: 14%;
    padding: 5px;
    background-color: #f7fbff;
    border: 0.5px solid grey;

    svg {
      font-size: 14px;
      margin-top: -2px;
      margin-right: 0.3rem;
      color: var(--main-color);
    }
  }

  @media (max-width: 576px) {
    .container {
      padding: 2rem !important;
    }

    .btn {
      display: block;
      margin-left: auto;
    }

    .container {
      width: 90%;
    }
  }
`;
