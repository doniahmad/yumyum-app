import styled from "styled-components";

const Styles = styled.div`
  .navbar-default {
    background-color: var(--second-color);
    transition: 0.5s;
  }

  .navbar-clear {
    opacity: 100%;
    transition: 0.5s ease-in;
  }

  .navbar-nav .nav-link {
    margin-right: 3.5rem;
    color: var(--text-color);
    position: relative;
    padding: 0px;
    padding-bottom: 5px;
  }

  .nav-link::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 3px;
    border-radius: 50px;
    background-color: var(--main-color);
    transition: all 0.3s ease;
    transform: scale(0);
  }

  .nav-link.active::before,
  .nav-link:hover::before {
    transform: scale(1);
  }

  /* dropdown */
  #basic-navbar-nav {
    position: relative;
  }

  .dropdown-item {
    color: black;
  }

  .dropdown-item:hover {
    background-color: #ccc;
  }

  @media screen and (min-width: 992px) {
    #basic-navbar-dropdown .dropdown-menu {
      border-radius: 5px;
      position: absolute;
      top: 0;
      left: -50px;
    }

    .dropdown-item {
      text-align: center;
    }

    .dropdown-profile-btn {
      margin-right: -2rem;

      img {
        width: 35px !important;
        height: 35px !important;
      }
    }

    .dropdown-profile .dropdown-menu {
      position: absolute;
      top: -15px;
      right: 0;
      border-radius: 0px;
    }

    .dropdown-profile .dropdown-menu .dropdown-item {
      padding: 0.5rem;
    }

    .cart a img {
      width: 25px !important;
      height: 25px !important;
    }
  }

  /* btn */
  .btn {
    background-color: var(--main-color);
    color: var(--text-color);
    border-radius: 25px;
    height: 2.5rem;
    width: 7.25rem;
    font-weight: 600;
  }

  #btn-profile:focus {
    box-shadow: none !important;
    outline: none;
    border: none;
    background-color: transparent;
  }

  #btn-profile {
    background-color: transparent;
    width: fit-content;
    height: fit-content;
    margin-left: 2rem;
    border-radius: 100%;
    border: none;
    position: relative;
  }

  .dropdown-profile-btn img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 100%;
  }

  .dropdown-toggle:after {
    display: none !important;
  }

  .hide {
    display: none;
  }

  // phone
  @media (max-width: 876px) {
    .dropdown-profile-btn {
      margin-left: -5rem;
    }

    .dropdown-menu {
      position: absolute;
      right: 0;
      top: 0;
      transform: translate(-25%, -5%);
      text-align: center;
      border-radius: 0px;
      width: 80px;
    }

    .cart {
      margin-left: 6rem;
      z-index: 99;
    }

    .navbar-brand {
      display: none;
    }

    .btn {
      margin: 0;
    }

    .show {
      .cart {
        display: none;
      }
    }
    .dropdown-profile-btn {
      margin-left: -4rem;
    }

    .dropdown-profile-btn img {
      width: 35px;
      height: 35px;
    }

    .dropdown-menu {
      position: absolute;
      right: 0;
      top: 0;
      transform: translate(-25%, -5%);
      text-align: center;
      border-radius: 0px;
      width: 80px;
    }

    .cart {
      margin-left: auto;
      margin-right: -20px;
      width: 30px;
      height: 30px;
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
