import styled from "styled-components";

export const Styles = styled.div`
  body {
    font-size: 0.875rem;
  }

  .feather {
    width: 16px;
    height: 16px;
    vertical-align: text-bottom;
  }

  /* Button */

  .btn-group .btn {
    svg {
      margin-top: -5px;
      margin-right: 5px;
    }
  }

  /*
 * Sidebar
 */

  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    /* rtl:remove */
    left: 0;
    z-index: 100; /* Behind the navbar */
    padding: 48px 0 0; /* Height of navbar */
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
  }

  .sidebar-sticky {
    position: relative;
    top: 0;
    height: calc(100vh - 48px);
    padding-top: 0.5rem;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  }

  .sidebar .nav-item {
    cursor: pointer;
  }

  .sidebar .nav-link {
    font-weight: 500;
    color: #333;
  }

  .sidebar .nav-link .feather {
    margin-right: 4px;
    color: #727272;
  }

  .sidebar .nav-link svg {
    margin-right: 1rem;
    margin-top: -3px;
  }

  .sidebar .nav-link.active {
    color: #2470dc;
  }

  .sidebar .nav-link:hover {
    color: var(--main-color);
  }

  .sidebar .nav-link.active {
    color: var(--main-color);
    background-color: #fffaf3;
  }

  .sidebar .nav-link:hover .feather,
  .sidebar .nav-link.active .feather {
    color: inherit;
  }

  .sidebar-heading {
    font-size: 0.75rem;
    text-transform: uppercase;
  }

  /*
 * Navbar
 */

  .navbar-brand {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.25);
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
  }

  .navbar .form-control {
    padding: 0.75rem 1rem;
    border-width: 0;
    border-radius: 0;
  }

  .form-control-dark {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.1);
  }

  .form-control-dark:focus {
    border-color: transparent;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
  }

  /* order */
  .order-length {
    margin-left: 15px;
    font-size: 21px;
  }

  .rigth-header {
    margin-bottom: 0.3rem;
  }

  .select {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    border: none;
    width: 220px;
    height: 40px;
    z-index: 100;

    .selectopt {
      opacity: 0;
      position: absolute;
      left: 0px;
    }

    .selectopt:checked + label {
      order: 1;
      z-index: 2;
      background: white;
      border-top: none;
      position: relative;
    }

    .selectopt:checked + label:after {
      content: "";
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid black;
      position: absolute;
      right: 10px;
      top: calc(50% - 2.5px) !important;
      pointer-events: none;
      z-index: 3;
    }

    .selectopt:checked + label:before {
      position: absolute;
      right: 0;
      height: 40px;
      width: 40px;
      content: "";
      background: #fff;
    }
  }

  .option {
    padding: 0 30px 0 10px;
    min-height: 40px;
    display: flex;
    align-items: center;
    background: #fff;
    border-top: #fff solid 1px;
    position: absolute;
    top: 0;
    pointer-events: none;
    order: 2;
    z-index: 1;
    transition: background 0.4s ease-in-out;
    box-sizing: border-box;
    overflow: hidden;
    white-space: nowrap;
  }

  .option:hover {
    background: #fff;
  }

  .coordinate_location {
    label {
      padding-right: 10px;

      :last-of-type {
        padding-left: 10px;
      }
    }
  }

  .select:focus .option {
    position: relative;
    pointer-events: all;
  }

  .search-bar {
    border: 1px solid #a8a8a8;
    margin-left: 1rem;
    padding: 5px;
    border-radius: 20px;

    .search-input {
      width: 100%;
      height: 100%;
    }

    .search {
      width: 100%;
      height: 100%;
      outline: none;
      border: none;
    }

    .search-icon {
      margin: 0px 0.5rem;
      margin-top: 1px;
      color: #727272;
    }
  }

  .btn-warning {
    background-color: #ffbf00 !important;
  }

  @media (max-width: 576px) {
    .date {
      display: none;
    }

    .select {
      transform: translateY(-10%);
    }

    .name {
      display: none;
    }

    .img-no-data {
      transform: translateX(-50%);
    }

    .orders {
      .order-header {
        display: block !important;

        .order-title {
          display: flex;
          float: left;

          p {
            margin-top: -3px;
          }
        }
      }

      .rigth-header {
        display: block !important;

        .select {
          input {
            z-index: 100;
          }
        }

        .search-bar {
          position: relative;
          width: 100%;
          z-index: -1;
          margin-left: 0;

          .search-icon {
            margin-top: -3px;
          }
        }
      }
    }

    .nav-product {
      padding: 0px;

      .btn-group {
        .btn {
          font-size: 10px;
        }
      }
    }
  }
`;
