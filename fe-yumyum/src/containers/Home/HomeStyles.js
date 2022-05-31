import styled from "styled-components";

const Styles = styled.div`
  /* * {
    border: 1px solid black;
  } */

  @keyframes fade-in-bottom {
    0% {
      -webkit-transform: translateY(200px);
      transform: translateY(200px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }

  a {
    text-decoration: none;
  }

  .title {
    font-weight: 600;
    font-size: 36px;
    text-align: center;
    margin-top: 3.5rem;
    margin-bottom: 2rem;
  }

  .jumbotron {
    background-image: url("/assets/jumbotron-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .jumbotron-title {
    font-weight: 400;
    font-size: 45px;
    color: var(--text-color);
  }

  .jumbotron-dark {
    background-color: rgba(0, 0, 0, 50%);
    padding-top: 10rem;
    padding-bottom: 7.5rem;
  }

  .name {
    font-weight: bold;
  }

  .jumbotron-desc {
    color: var(--text-color);
    font-weight: 300;
    font-size: 26px;
    line-height: 39px;
    width: 75%;
    margin: auto;
    margin-top: 3rem;
  }

  .btn-jumbotron {
    color: var(--text-color);
    width: 11.5rem;
    height: 3.5rem;
    border-radius: 50px;
    font-weight: 500;
    font-size: 26px;
    margin-top: 4rem;
  }

  .jumbotron-container {
    opacity: 0;
  }

  .btn-pesan {
    background-color: var(--main-color);
  }

  .btn-pesan:hover {
    background-color: #ffc168;
  }

  .btn-lokasi {
    color: var(--main-color);
  }

  .btn-lokasi:hover {
    color: var(--text-color);
    background-color: var(--main-color);
  }

  @media (max-width: 576px) {
    .title {
      font-size: 20px;
    }

    .jumbotron {
      background-position: center;
    }

    .jumbotron-dark {
      background-color: rgba(0, 0, 0, 50%);
      padding-top: 7rem;
      padding-bottom: 2.5rem;
    }

    .jumbotron-title {
      font-size: 34px;
    }

    .jumbotron-desc {
      margin-top: 2rem;
      font-size: 16px;
      line-height: 30px;
    }

    .btn-jumbotron {
      font-size: 15px;
      width: 120px;
      height: 40px;
    }
  }

  /* Layanan */
  .layanan {
    padding-bottom: 2rem;
    opacity: 0;
  }

  .penawaran-terbaik {
    margin-top: 3rem;
  }

  /* Penjualan Terbanyak */
  .card {
    margin: auto;
    margin-top: 1rem;
  }

  .btn-more {
    margin: auto;
    display: block;
    color: var(--text-color);
    width: 300px;
    height: 45px;
    border-radius: 50px;
    margin-top: 4rem;
    font-weight: 400;
    font-size: 18px;
    background-color: var(--main-color);
  }

  .btn-more:hover {
    background-color: #ffc168;
  }
`;

export default Styles;
