import styled from "styled-components";

const Styles = styled.div`
  .container {
    margin-top: 6rem;
  }

  .btn {
    background-color: var(--main-color);
    color: var(--text-color);
    width: 200px;
    height: 50px;
    font-size: 20px;
    font-weight: 500;
    align-items: flex-start;
  }

  .bottom {
    width: 100%;
    justify-content: flex-end;
  }

  .total {
    margin-left: auto;
    margin-right: 40px;
  }

  .total p {
    margin-top: 0.6rem;
    font-weight: 500;
    font-size: 20px;
  }

  hr {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  // lokasi pengiriman
  .delivery-location {
    display: none;
    background-color: rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;

    .btn {
      margin-top: 1rem;
    }
  }

  .arrow-back {
    font-size: 25px;
    margin-right: 10px;
    cursor: pointer;
  }

  .container-location {
    padding: 1rem 1.5rem;
    position: absolute;
    top: 55%;
    left: 50%;
    width: 450px;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  }
  .btn-location {
    width: 100px;
    height: 35px;
    font-size: 14px;
    float: right;
  }

  .btn-current-location {
    font-size: 14px;
    height: 35px;
    width: 180px;
    background-color: white;
    color: black;
    border-color: black;
    float: left;
  }

  .btn-current-location:focus {
    outline: none;
    box-shadow: none;
  }

  .map {
    width: 100%;
    height: 300px;
  }

  .distance-container {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 1;
  }

  .distance-container > * {
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 11px;
    line-height: 18px;
    display: block;
    margin: 0;
    padding: 5px 10px;
    border-radius: 3px;
  }

  // pembayaran
  .pembayaran {
    display: none;
    background-color: rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;

    p {
      margin: 0;
    }

    .info {
      margin-top: -5px;
      margin-bottom: 10px;
    }
    span {
      text-decoration: underline;
      cursor: pointer;
    }

    span:hover {
      color: grey;
    }

    hr {
      margin: 0.5rem 0px;
    }
  }

  .pembayaran-center {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .container-pembayaran {
    padding: 1.3rem;
    background-color: white;
    width: 400px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    transition: all 0.5s ease-in-out;
  }

  .btn-payment {
    width: 100px;
    height: 35px;
    font-size: 14px;
  }

  label {
    z-index: 10;
    width: 100%;
    background-color: white;
  }

  #image_proof_url {
    position: absolute;
    width: 10px;
    left: 50%;
    top: 50%;
    z-index: -99 !important;
  }

  .input-image {
    margin: auto;
    width: 100%;
    max-height: 200px;
    color: grey;
    cursor: pointer;
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

  .cara-pembayaran {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s ease-in-out;
    left: 10px;
    z-index: -1;
    height: 100%;
    display: flex !important;
    flex-direction: column;
    justify-content: center;

    h3 {
      margin-top: 10px;
    }

    hr {
      margin: 0.8rem 0px;
    }

    .card-contain {
      border-radius: 0 10px 10px 0;
      background-color: white;

      width: 380px;
      padding: 0.5rem 1rem;
    }

    .list .data-list {
      margin-bottom: 0.7rem;
      border-radius: 10px;
      border: 1px solid #ccc;
      font-size: 18px;
    }

    .card-contain > * div {
      display: flex;
      padding: 5px;
      p {
        height: 100%;
        margin-top: 5px;
        margin-left: 20px;
      }

      :first-child img {
        object-fit: contain;
      }

      :first-child .img-logo img {
        object-fit: cover;
      }
    }

    .img-logo {
      width: 100px;
      height: 40px;
      margin: 0;
      padding: 0;
      border: none;
    }

    .img-logo img {
      width: 100%;
      display: block;
      object-fit: contain;
    }
  }

  @media (max-width: 576px) {
    .container {
      margin-top: 4.5rem;

      h2 {
        margin-bottom: -1rem;
      }
    }

    .bottom {
      justify-content: flex-start;
      .total {
        margin-left: 0;
        p {
          font-size: 14px !important;
        }
      }

      .btn {
        width: 120px;
        height: 40px;
        font-size: 15px;
        margin-left: auto;
      }
    }

    .delivery-location {
      .container-location {
        width: 80%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .distance-container {
          top: 10px;
          left: 10px;
        }

        .map {
          height: 280px;
        }

        .mapboxgl-ctrl-top-right .mapboxgl-ctrl-geocoder {
          min-width: 0px;
          width: 40px;
          height: 40px;
          border-radius: 25px;

          input {
            width: 100%;
            height: 100%;
            border: none;
            color: none;
          }

          svg {
            width: 20px;
            height: 20px;
            top: 50%;
            left: 10px;
            transform: translateY(-50%);
            z-index: -1;
          }

          .mapboxgl-ctrl-geocoder--button {
            height: 40px;
            background-color: transparent;
          }

          :focus-within {
            width: 90%;
            border-radius: 0;
          }
        }

        .btn {
          margin-top: 1rem;
        }

        .btn-current-location {
          width: 120px;
          font-size: 10px;
        }

        .btn-location {
          width: 100px;
          height: 35px;
          font-size: 10px;
          float: right;
        }
      }
    }

    .pembayaran {
      .pembayaran-center {
        display: block !important;
        width: 90%;
        .container-pembayaran {
          width: 100%;
          h2 {
            font-size: 20px;
          }
          font-size: 12px;
        }

        .cara-pembayaran {
          opacity: 1;
          margin: 0;
          left: 0;

          .card-contain {
            border-radius: 10px;
            width: 90vw;
            h3 {
              font-size: 18px;

              span {
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
  }
`;

export default Styles;
