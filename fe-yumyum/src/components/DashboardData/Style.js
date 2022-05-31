import styled from "styled-components";

export const Styles = styled.div`
  .data {
    width: auto;
    height: 125px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .icon-data {
    margin-left: 10px;
  }

  .title-data {
    margin-left: 10px;
    padding-top: 10px;
    font-size: 18px;
    color: white;
  }

  .data {
    .d-flex {
      p {
        margin-left: 10px;
        font-size: 24px;
        color: white;
        margin-top: 10px;
      }
    }
  }

  .data-users {
    background-color: #fdba55;
  }

  .data-product {
    background-color: #22c9ee;
  }

  .data-sold {
    background-color: #fd5555;
  }

  .data-omset {
    background-color: #26ee22;
  }

  @media (max-width: 576px) {
    .data {
      margin-bottom: 1rem;
    }
  }
`;
