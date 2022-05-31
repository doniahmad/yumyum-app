import styled from "styled-components";

export const Styles = styled.div`
  .nav-btn .btn {
    border-radius: 25px;
    font-size: 14px;
    width: 120px;
    margin-right: 1rem;
    margin-top: 1rem;
    border-color: var(--main-color);
    color: var(--main-color);
    :focus {
      box-shadow: none;
      outline: none;
    }
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

  .container {
    margin-top: 5rem;
  }

  @media (max-width: 576px) {
    .row {
      min-height: 300px !important;
    }

    .container {
      margin-top: 4.5rem;
      width: 100vw;
      h2 {
        font-size: 14px;
      }
      .nav-btn .btn {
        margin: 0;
        width: 65px;
        margin-right: 0.4rem;
        margin-bottom: -10px;
        height: 25px;
        font-size: 8px;
      }
    }

    .col-pesanan {
      justify-content: center;
    }
  }
`;
