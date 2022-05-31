import styled from "styled-components";

export const Styles = styled.div`
  hr {
    border-top: solid 3px #000 !important;
    opacity: 1;
  }

  .list-item {
    * {
      text-align: center;
      border: 1px solid black;
    }

    td:nth-child(2) {
      text-align: start;
    }

    tr:last-child td,
    tr:nth-last-child(2) td,
    tr:nth-last-child(3) td {
      text-align: center;
    }
  }
`;
