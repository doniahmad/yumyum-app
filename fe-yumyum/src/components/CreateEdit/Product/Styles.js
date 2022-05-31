import styled from "styled-components";

export const Styles = styled.div`
  h2 {
    margin-top: 1rem;
  }

  .arrow-back {
    font-size: 25px;
    margin-top: 0.8rem;
    margin-right: 1rem;
    cursor: pointer;
    height: auto;
  }

  .form-number {
    background-color: #e9ecef;
    border-radius: 0.25rem;
    border: 1px solid #ced4da;
    span {
      padding: 0.3rem 0.8rem;
    }

    input {
      border: none;
      border-left: 1px solid #ced4da;
      border-radius: 0 0.25rem 0.25rem 0;
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
