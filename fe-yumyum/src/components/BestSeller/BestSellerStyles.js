import styled from "styled-components";

const Styles = styled.div`
  a {
    text-decoration: none;
    color: black;
  }

  .btn:focus {
    box-shadow: none;
  }

  .disc-tag {
    position: absolute;
    z-index: 999;
  }

  .disc-50 {
    left: -60px;
    width: 150px;
  }

  .disc-70 {
    transform: rotate(25deg);
    right: -20px;
    top: -20px;
    width: 100px;
  }

  .disc-80 {
    right: 10px;
    top: -40px;
    width: 100px;
  }

  .disc-90 {
    left: -40px;
    width: 120px;
  }

  .sale {
    transform: rotate(25deg);
    width: 100px;
    top: -20px;
    right: -20px;
  }

  .card {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 20rem;
    margin-bottom: 2.5rem;
    transition: transform 0.3s ease-in;
  }

  .harga {
    margin: 0;
  }

  .card:hover {
    transform: scale(1.1);
  }

  .card-img-top {
    border-radius: 10px 10px 0px 0px;
    height: 190px;
    object-fit: cover;
  }

  .btn {
    position: absolute;
    width: 50px;
    height: 50px;
    background: var(--main-color);
    border-radius: 100px;
    right: 1.8rem;
    bottom: 1rem;
  }

  .btn:hover {
    opacity: 0.8;
  }

  .btn img {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 29%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  /* #best-seller-to-cart {
    position: relative;
    animation: container-display-animation 1.5s ease forwards;
  } */

  .image-animation {
    border-radius: 0px;
    position: fixed;
    z-index: 999;
    animation: product-cart-animation 1.5s ease forwards;
    opacity: 0;
  }

  @keyframes container-display-animation {
    0% {
      z-index: 9999;
    }
    90% {
      z-index: 9999;
    }
    100% {
      z-index: 1;
    }
  }

  @keyframes product-cart-animation {
    from {
      position: fixed;
      top: 25%;
      right: 40%;
      height: 140px;
      width: 238px;
      opacity: 1;
    }
    to {
      position: fixed;
      top: 43%;
      right: 60%;
      height: 20px;
      width: 38px;
      transform: translate(50vw, -40vh);
      opacity: 0;
    }
  }

  @media (max-width: 576px) {
    .card-img-top {
      border-radius: 10px 10px 0px 0px;
      height: 120px;
      object-fit: cover;
    }

    .card-body {
      padding: 0.7rem;
      margin-bottom: -1rem;
    }

    p {
      padding-bottom: 1rem;
    }

    .harga-container {
      flex-direction: column;

      p {
        padding-left: 0 !important;
      }
    }

    @keyframes product-cart-animation {
      from {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 70px;
        width: 108px;
        opacity: 1;
      }
      to {
        position: fixed;
        top: 43%;
        left: 30%;
        height: 20px;
        width: 38px;
        transform: translate(50vw, -40vh);
        opacity: 0;
      }
    }

    .disc-50 {
      transform: rotate(-45deg);
      top: 20px;
      left: -40px;
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
      top: -10px;
      width: 50px;
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
      display: block;
    }

    .card {
      width: 160px;
      margin-bottom: -2rem;
    }

    .btn {
      width: 35px;
      height: 35px;
      bottom: 15px;
      right: 15px;

      img {
        width: 14px;
        height: 14px;
      }
    }
  }
`;

export default Styles;
