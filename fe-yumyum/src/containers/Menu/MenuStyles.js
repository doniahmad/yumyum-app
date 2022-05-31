import styled from "styled-components";

const Styles = styled.div`
  /* * {
    border: 1px solid black;
  } */

  .btn:focus {
    outline: none;
  }

  .btn:hover {
    opacity: 0.8;
    transition: all 0.2s;
  }

  .title {
    color: black;
    position: relative;
  }

  .header {
    margin-bottom: 1rem;
    margin-top: 1rem;
    display: flex;
    position: relative;
    height: auto;
  }

  .nav-btn {
    margin-top: 6rem;
  }

  .nav-btn .btn {
    border-radius: 25px;
    font-size: 14px;
    width: 120px;
    margin-right: 1rem;
    border-color: var(--main-color);
    color: var(--main-color);
  }

  .nav-btn .btn:hover {
    background-color: var(--main-color);
    color: var(--text-color);
  }

  .nav-btn .active {
    .btn {
      background-color: var(--main-color);
      color: var(--text-color);
    }
  }

  .search-bar {
    width: 100%;
    border-radius: 20px;
    height: 40px;
    border: 1px solid #a8a8a8;
  }

  .search-input {
    width: 100%;
    height: 100%;
  }

  .search {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    border-radius: 20px;
  }

  .search-icon {
    margin: auto 1rem;
    margin-top: 0.2rem;
  }

  .search-i {
    color: #c4c4c4;
  }

  .card {
    border: none;
  }

  @media (max-width: 576px) {
    .title {
      font-size: 18px;
      margin-bottom: -5px;
    }

    .header .form-select {
      width: 45% !important;
      font-size: 12px;
      position: relative;
    }

    .nav-btn {
      margin-top: 5rem;
    }

    .nav-btn .btn {
      width: 80px;
      font-size: 12px;
      margin: 0;
      margin-top: -10px;
      margin-left: -5px;
      margin-right: 15px;
      margin-bottom: 10px;
    }

    .search-bar {
      width: 100%;
    }

    .header {
      margin-top: -5px;
    }
  }

  /* Dropdown */

  .select {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 14%;
    border: none;
    bottom: -10px;
    right: 0;
    width: 200px;
    height: 40px;
    z-index: 1;

    input {
      opacity: 0;
      position: absolute;
      left: -99999px;
    }

    input:checked + label {
      order: 1;
      z-index: 2;
      background: white;
      border-top: none;
      position: relative;
    }

    input:checked + label:after {
      content: "";
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid black;
      position: absolute;
      right: 10px;
      top: calc(50% - 2.5px);
      pointer-events: none;
      z-index: 3;
    }

    input:checked + label:before {
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
    width: 100%;
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

  .select:focus .option {
    position: relative;
    pointer-events: all;
  }

  @media (max-width: 576px) {
    .select {
      width: 140px;
      bottom: -25px;
      font-size: 14px;
    }

    .option {
      padding: 0 10px 0 10px;
      min-height: 30px;
    }
  }

  /* Pagination */
  .pagination-nav {
    height: 40px;
    width: fit-content;
    margin: auto;
  }

  .pagination-nav * {
    padding: 0;
    /* padding: 1px 5px; */
  }

  .pagination {
    height: 100%;
  }

  .pagination-nav i {
    padding-top: 3px;
  }

  .bi {
    font-size: 18px;
  }

  .page-item.active .page-link {
    background-color: transparent;
    color: #000;
    outline: none;
  }

  .page-item .page-link {
    margin-top: 2px;
    color: #a8a8a8;
    background-color: transparent;
    outline: none;
    border: none;
    margin: 2.5px 8px;
  }

  .pagination .page-item .page-link i {
    margin-top: 2px;
  }

  .page-link:focus {
    background-color: transparent;
    box-shadow: none;
  }

  .page-link:hover {
    color: #000;
    border: none;
    background-color: transparent;
  }
`;

export default Styles;
