import styled from "styled-components";

export const Styles = styled.div`
  h2 {
    height: auto;
    margin-top: 0.2rem;
  }

  .img-profile-container {
    position: relative;
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }

  .img-profile-container img {
    width: 100px !important;
    height: 100px !important;
    border-radius: 100%;
    object-fit: cover;
  }

  .arrow-back {
    font-size: 25px;
    margin-right: 1rem;
    cursor: pointer;
    height: auto;
  }

  .tooltip {
    top: 20%;
    left: 14%;
    padding: 5px;
    background-color: #f7fbff;
    border: 0.5px solid grey;

    svg {
      font-size: 14px;
      margin-top: -2px;
      margin-right: 0.3rem;
      color: var(--main-color);
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
