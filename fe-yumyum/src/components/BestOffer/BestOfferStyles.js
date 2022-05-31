import styled from "styled-components";

const Styles = styled.div`
  .title-offers {
    margin-bottom: -80px;
    margin-top: 1rem;
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
    color: var(--text-color);
    text-align: center;
    position: relative;
    z-index: 1;
  }

  .bg-item {
    object-fit: cover;
    width: 100%;
    height: 610px;
  }

  .img-container:hover {
    transform: scale(1.1);
  }

  .item-info {
    width: 30%;
    margin: 0;
    position: absolute;
    top: 45%;
    right: 12%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .item-info .title {
    text-align: start;
    font-weight: 500;
    font-size: 28px;
    margin-bottom: 0.5rem;
  }

  .item-info .harga {
    font-weight: 300;
    font-size: 20px;
  }

  .item-info .desc {
    font-size: 16px;
  }

  .btn {
    margin-top: 1rem;
    height: 50px;
    width: 200px;
    font-weight: 500;
    font-size: 19px;
    background-color: var(--main-color);
    text-align: start;
    color: var(--text-color);
    border-radius: 50px;
  }

  .btn:focus {
    box-shadow: none;
  }

  .btn:hover {
    outline: none;
    background-color: #ffc168;
  }

  .btn img {
    margin-top: -5px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .carousel-caption {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 70%);
  }

  #best-offer-to-cart {
    position: relative;
    z-index: 999;
    animation: container-display-animation 1.5s ease forwards;
  }

  .img-container {
    position: relative;
    transition: all 0.3s ease-in;
    margin-top: 10%;
    margin-right: 40%;
    .disc-tag {
      position: absolute;
    }
    .img-item {
      object-fit: cover;
      width: 481px;
      height: 351px;
    }
  }

  .disc-50 {
    left: 30px;
    width: 250px;
  }

  .disc-70 {
    transform: rotate(25deg);
    right: 100px;
    top: -40px;
    width: 200px;
  }

  .disc-80 {
    right: 160px;
    top: -60px;
    width: 150px;
  }

  .disc-90 {
    left: 60px;
    width: 300px;
  }

  .sale {
    transform: rotate(25deg);
    right: 60px;
    top: -60px;
    width: 200px;
  }

  .image-animation {
    height: 140px;
    width: 238px;
    border-radius: 0px;
    position: fixed;
    animation: product-cart-animation 1.5s ease forwards;
  }

  @keyframes product-cart-animation {
    from {
      position: fixed;
      top: 40%;
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

  @media (max-width: 768px) {
    .img-item {
      position: absolute;
      width: 260px;
      height: 180px;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .img-container {
      transition: all 0.3s ease-in;
      margin-top: 50%;

      .img-item {
        width: 200px;
        height: 180px;
        margin-left: 35%;
      }

      .disc-tag {
        z-index: 999;
      }
    }

    .disc-50 {
      left: 20px;
      width: 150px;
      top: -90px;
    }

    .disc-70 {
      transform: rotate(25deg);
      right: -100px;
      top: -120px;
      width: 120px;
    }

    .image-animation {
      height: 100px;
      width: 140px;
      border-radius: 0px;
      position: fixed;
      animation: product-cart-animation 2.5s ease forwards;
    }

    @keyframes product-cart-animation {
      from {
        position: fixed;
        top: 50%;
        right: 50%;
        height: 100px;
        transform: translate(-50%, -50%);
        width: 140px;
        opacity: 1;
      }
      to {
        position: fixed;
        top: 4%;
        right: 20%;
        height: 10px;
        width: 18px;
        transform: translate(50vw, -40vh);
        opacity: 0;
      }
    }

    .disc-80 {
      right: -50px;
      top: -110px;
      width: 70px;
    }

    .disc-90 {
      left: 20px;
      top: -90px;
      width: 150px;
    }

    .sale {
      right: -120px;
      top: -120px;
      width: 120px;
    }

    .bg-item {
      object-fit: cover;
      width: 100%;
      height: 510px;
    }

    .item-info {
      width: 70%;
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .item-info .title {
      text-align: start;
      font-weight: 500;
      font-size: 28px;
      margin-bottom: 0.5rem;
      text-align: center;
    }

    .item-info .harga {
      font-weight: 300;
      font-size: 20px;
      text-align: center;
    }

    .item-info div {
      margin-left: 50%;
      transform: translateX(-50%);
    }

    .item-info .desc {
      display: none;
    }

    .item-info .btn {
      height: 50px;
      width: 200px;
      display: block;
      margin: auto !important;
    }
  }
`;

export default Styles;
