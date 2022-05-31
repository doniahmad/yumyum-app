import styled from "styled-components";

const Styles = styled.div`
  .container {
    margin-top: 5rem;
    color: black;
  }

  #map {
    border: 1px solid black;
    width: 100%;
    height: 400px;
    margin-top: -40px;
  }

  .col-info {
    margin-top: 1rem;

    .info {
      div {
        display: flex;

        * {
          margin-top: 0.8em;
        }

        svg {
          font-size: 20px;
        }

        p {
          margin-left: 1rem;
        }
      }
    }
  }

  .title {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .company-name {
    margin-bottom: 1rem;
  }

  .street-name {
    margin-bottom: 1rem;
  }

  .phone-number {
    margin-bottom: 1rem;
  }

  .email {
    margin-bottom: 1rem;
  }

  .btn-kontak {
    width: 222px;
    height: 50px;
    margin-top: 1rem;
    font-weight: 500;
    background-color: var(--main-color);
    color: var(--text-color);
    transition: all 0.2s ease;
  }

  .btn-kontak:hover {
    opacity: 0.8;
  }

  #contact-form {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  .contact-container {
    padding: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    background-color: white;

    .btn-form {
      width: fit-content;
      margin-left: auto;
    }

    button {
      border: none;
      margin-left: 10px;
    }
  }

  @media (max-width: 576px) {
    .title {
      margin-top: 4rem;
      margin-bottom: 0px;
    }

    .contact-container {
      width: 90%;
    }

    .row {
      flex-direction: column-reverse;
      margin-top: -1rem;
    }

    #map {
      height: 280px;
      margin-top: 2rem;
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
`;

export default Styles;
