import styled from "styled-components";

export const Styles = styled.div`
  .card {
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    min-height: 295px;
    padding-bottom: 4rem;
    margin-bottom: 1.5rem;
  }

  .data-menu-row {
    flex-direction: column;
    p {
      word-break: break-all;
      margin-bottom: 0px !important;
    }
  }

  .kode-pesanan {
    font-size: 14px;
    margin-top: -5px;
    margin-bottom: 5px;
  }

  .total {
    margin-bottom: -10px;
    float: left;
    .total-text {
      margin-top: 5px;
      width: 100%;
    }
  }

  .bot {
    min-height: 70px;
    position: absolute;
    bottom: 10px;
    width: 85%;
    hr {
      margin-bottom: 10px;
    }

    .btn {
      color: var(--text-color);
      margin-left: 1rem;
      height: 40px;
      float: right;
    }
  }

  .detail-pesanan {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }

  .detail-card {
    margin: auto;
    margin-top: 6rem;
    background-color: white;
    width: 70%;
    padding-bottom: 20px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;

    .icon-x {
      margin: 2rem;
      float: right;
      cursor: pointer;
    }

    .container {
      padding-top: 2rem;
    }
  }

  .container-detail {
    z-index: 1;
  }

  .btn-see {
    cursor: pointer;
    margin-left: 0.7rem;
    letter-spacing: 2px;
    font-size: 15px;
    color: grey;
  }

  #btn-see:hover {
    color: black;
  }

  @media (max-width: 576px) {
    .card {
      width: 100%;
      min-height: 250px;
      font-size: 12px;
      .card-body {
        .kode-pesanan {
          font-size: 10px;
        }

        .btn {
          font-size: 10px;
          height: 30px;
          margin-top: 0.5rem;
        }
      }
    }

    .detail-pesanan {
      background-color: rgba(0, 0, 0, 0.15);
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }

    .detail-card {
      position: absolute;
      top: 25%;
      left: 50%;
      transform: translate(-50%, -25%);

      .container {
        margin-top: -10px;
      }

      h1 {
        font-size: 16px;
      }

      .icon-x {
        margin: 1rem;
      }
    }
  }
`;
