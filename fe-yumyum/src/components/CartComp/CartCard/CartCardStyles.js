import styled from "styled-components";

const Styles = styled.div`
  a {
    text-decoration: none;
    color: black;
  }

  .card {
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    margin-top: 1rem;
    transition: transform 0.3s ease-in;
  }

  .card:hover {
    transform: scale(1.03);
  }

  .card-img-top {
    height: 150px;
    width: 150px;
    object-fit: cover;
    border-radius: 0;
  }

  .card-body {
    margin-top: 1.2rem;
  }

  .card-title {
    font-size: 28px;
    font-weight: 600;
  }

  .card-text {
    font-size: 20px;
  }

  .disc-tag {
    position: absolute;
    z-index: 999;
  }

  .disc-50 {
    left: -60px;
    width: 100px;
  }

  .disc-70 {
    transform: rotate(25deg);
    right: -20px;
    top: -20px;
    width: 70px;
  }

  .disc-80 {
    right: 10px;
    top: -20px;
    width: 60px;
  }

  .disc-90 {
    left: -20px;
    width: 100px;
  }

  .sale {
    transform: rotate(25deg);
    width: 70px;
    top: -20px;
    right: -20px;
  }

  #btn-contain {
    width: 15%;
    right: 140px;
    top: 33%;
    position: absolute;
  }

  #btn-contain ul {
    display: flex;
    text-decoration: none;
    list-style: none;
    margin-left: -50px;
  }

  #btn-contain ul li {
    text-align: center;
    font-size: 26px;
  }

  .count {
    flex: 50%;
  }

  .count input {
    width: 50px;
    border: none;
    text-align: center;
  }

  input:focus {
    border: none;
  }

  .button-icon {
    flex: 35%;
  }

  .button-icon button {
    border: none;
    outline: none;
    margin-top: -15px;
    font-size: 40px;
    background-color: transparent;
  }

  .btn-delete {
    position: absolute;
    right: 60px;
    bottom: 40%;
  }

  .btn-delete svg {
    transition: all 0.2s;
  }
  .btn-delete svg:hover {
    color: red;
    cursor: pointer;
  }

  @media (max-width: 576px) {
    .disc-50 {
      transform: rotate(-45deg);
      top: 8px;
      left: -10px;
      width: 50px;
    }

    .disc-70 {
      transform: rotate(25deg);
      right: -10px;
      top: -10px;
      width: 35px;
    }

    .disc-80 {
      right: 10px;
      top: -10px;
      width: 30px;
    }

    .disc-90 {
      left: 0;
      width: 50px;
    }

    .sale {
      transform: rotate(25deg);
      width: 40px;
      top: -10px;
      right: -10px;
      display: block;
    }
    .card {
      .row {
        width: 100vw;
        object-fit: cover;
      }
      .card-img-top {
        width: 90px;
        height: 90px;
      }

      .card-body {
        margin: 0;
        width: 100%;
        margin-left: -1rem;
      }

      .card-title {
        font-size: 12px;
        font-weight: 600;
      }

      .card-text {
        font-size: 10px;
      }

      #btn-contain {
        width: 10%;
        top: 10%;
        bottom: 50%;
        transform: translateY(50%);
      }

      #btn-contain ul {
        margin-left: 0px;
      }

      #btn-contain ul li {
        font-size: 20px;
        margin: 0 0.3rem;
      }

      .button-icon button {
        margin-top: -15px;
        font-size: 24px;
        background-color: transparent;
      }

      .btn-delete {
        position: absolute;
        right: 20px;
        bottom: 50%;
        transform: translateY(50%);
      }

      .btn-delete svg {
        width: 20px;
      }
    }
  }
`;

export default Styles;
