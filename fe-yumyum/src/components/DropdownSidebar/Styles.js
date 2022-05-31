import styled from "styled-components";

export const Styles = styled.div`
  .btn {
    background-color: transparent;
    border-radius: 0px;
    width: 100%;
    text-align: start;
    padding: 0.5rem 0.9rem;
    display: block;
    font-weight: 500;
    color: #333;
  }

  .btn:hover {
    color: var(--main-color);
  }

  .btn:focus {
    box-shadow: none;
  }

  .dropdown-toggle::after {
    position: absolute;
    right: 10px;
    top: 50%;
  }

  .dropdown .btn svg {
    margin-right: 1rem;
    margin-top: -3px;
  }

  .nav-item-product {
    margin-left: 1rem;
  }

  .product {
    display: none;
  }

  .show {
    display: block;
  }
`;
