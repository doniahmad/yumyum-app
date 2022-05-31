import styled from "styled-components";

export const Styles = styled.div`
  position: relative;
  /* * {
    border: 1px solid black;
  } */

  .container {
    margin-top: 1rem;
  }

  .simpan-btn {
    position: absolute;
    top: -20px;
    right: 24px;
  }

  .disc-table {
    width: 40%;
    text-align: start;
  }

  h2 {
    margin-bottom: 2rem;
  }

  table {
    margin-bottom: 4rem;
  }

  input {
    border-radius: 0;
    border: 1px solid #ccc;
  }

  input:focus {
    box-shadow: none;
    outline: none;
  }

  .hstack {
    position: relative;
  }

  .btn-plus {
    background-color: green;
    color: white;
    width: 40px;
    height: 38px;
    border-radius: 0;
    position: relative;
    span {
      font-size: 35px;
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  tbody {
    tr {
      td:first-child {
        text-align: start;
      }
    }
  }

  .suggestion {
    box-shadow: rgba(100, 100, 100, 0.2) 0px 1px 29px 0px;

    div {
      padding: 7.5px;
      padding-left: 15px;
      border-radius: 0;
      border: none;
      box-shadow: none;
      border-bottom: 1px solid #ccc;
    }

    div:hover {
      background-color: #f5f5f5;
    }

    div:last-child {
      border-bottom: none;
    }
  }

  .arrow-back {
    font-size: 25px;
    height: auto;
    margin-bottom: 1.8rem;
    margin-right: 0.5rem;
    cursor: pointer;
  }

  .x {
    position: absolute;
    right: 5%;
    cursor: pointer;
    color: grey;
  }
`;
