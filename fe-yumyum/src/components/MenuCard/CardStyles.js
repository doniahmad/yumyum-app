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

  .card {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 15rem;
    margin-bottom: 2rem;
    max-height: 15rem;
    transition: transform 0.3s;
  }

  .card:hover {
    transform: scale(1.1);
  }

  .card-title {
    font-size: 18px;
    font-height: 1.5;
    margin-top: -0.5rem;
    margin-bottom: 0.5rem;
  }

  .card-body {
    padding-bottom: 0.2rem;

    p {
      margin-bottom: 0.5rem;
    }
  }

  .card-img-top {
    border-radius: 10px 10px 0px 0px;
    height: 140px;
    object-fit: cover;
  }

  .btn {
    position: absolute;
    width: 40px;
    height: 40px;
    background: var(--main-color);
    border-radius: 100px;
    right: 1.5rem;
    bottom: 0.6rem;
  }

  .btn img {
    margin: 0;
    position: absolute;
    width: 18px;
    height: 18px;
    top: 50%;
    left: 27%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .harga-container {
    * {
      margin-bottom: 0.5rem;
    }
  }

  #menu-to-cart {
    position: relative;
    z-index: 9999;
    animation: container-display-animation 1.5s ease forwards;
  }

  .image-animation {
    border-radius: 0px;
    position: fixed;
    animation: product-cart-animation 1.5s ease forwards;
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
    .disc-50 {
      transform: rotate(-40deg);
      top: 9px;
      left: -20px;
      width: 65px;
    }

    .disc-70 {
      transform: rotate(25deg);
      right: -10px;
      top: -10px;
      width: 60px;
    }

    .disc-80 {
      right: 10px;
      top: -10px;
      width: 40px;
    }

    .disc-90 {
      left: -20px;
      width: 70px;
    }

    .sale {
      transform: rotate(25deg);
      width: 60px;
      top: -10px;
      right: -10px;
      display: block;
    }

    .card {
      width: 100%;
      margin-bottom: 1.5rem;

      .card-img-top {
        border-radius: 10px 10px 0px 0px;
        height: 100px;
        object-fit: cover;
      }

      .card-body {
        padding: 0.5rem;
        padding-top: 1rem;
        margin-bottom: -10px;
      }
    }

    .harga-container {
      flex-direction: column;

      * {
        padding: 0 !important ;
        margin-bottom: 0;
      }
    }

    @keyframes product-cart-animation {
      from {
        position: fixed;
        top: 25%;
        left: 30%;
        height: 70px;
        width: 140px;
        opacity: 1;
      }
      to {
        position: fixed;
        top: 43%;
        left: 25%;
        height: 20px;
        width: 38px;
        transform: translate(50vw, -40vh);
        opacity: 0;
      }
    }

    .btn {
      width: 35px;
      height: 35px;
      position: absolute;
      bottom: 10px;
      right: 10px;

      img {
        width: 18px;
        height: 18px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;

export default Styles;
