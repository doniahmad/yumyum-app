import styled from "styled-components";

const Styles = styled.div`
  .container {
    margin-top: 6rem;
  }

  .contain-img {
    position: relative;
  }

  .img-detail {
    width: 100%;
    height: 430px;
    object-fit: cover;
  }

  .disc-tag {
    position: absolute;
    z-index: 999;
  }

  .disc-50 {
    transform: rotate(-25deg);
    top: 30px;
    left: -50px;

    width: 200px;
  }

  .disc-70 {
    transform: rotate(25deg);
    right: -10px;
    top: -30px;
    width: 140px;
  }

  .disc-80 {
    right: 30px;
    top: -40px;
    width: 120px;
  }

  .disc-90 {
    left: -40px;
    width: 200px;
  }

  .sale {
    transform: rotate(25deg);
    width: 140px;
    top: -30px;
    right: -10px;
  }

  .all-button {
    display: flex;
  }

  .info {
    display: flex;
    flex-direction: column;
  }

  #contain ul {
    display: flex;
    text-decoration: none;
    list-style: none;
    margin-left: -30px;
    .count {
      width: 50px;
    }

    .button-icon {
      flex: 35%;
    }
  }

  #contain ul li {
    border: 1px solid #c1bfbf;
    text-align: center;
    padding: 0.5rem;
  }

  .button-icon button {
    border: none;
    outline: none;
    background-color: transparent;
  }

  .btn {
    margin-left: 2rem;
    height: 43px;
    width: 130px;
    color: var(--text-color);
    background-color: var(--main-color);
  }

  .btn img {
    width: 15px;
    height: 15px;
    margin-top: -3px;
    margin-left: -10px;
    margin-right: 10px;
  }

  .out {
    position: relative;
    z-index: 999;
    animation: container-display-animation 1.5s ease forwards;
  }

  .out .image-animation {
    height: 140px;
    width: 238px;
    display: block;
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
      width: 20px;
      transform: translate(50vw, -40vh);
      opacity: 0;
    }
  }

  .big-img {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);

    svg {
      fill: white;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  @media (max-width: 576px) {
    .contain-img {
      width: 100%;
      height: 200px;
      .img-detail {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    .info {
      margin-top: 1rem;
      h1 {
        font-size: 18px;
      }
      p {
        font-size: 14px;
      }
    }

    .harga {
      font-size: 14px;
    }

    .all-button {
    }
  }
`;

export default Styles;
