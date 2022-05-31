import styled from "styled-components";

export const Styles = styled.tr`
  td {
    vertical-align: middle;
  }

  .btn {
    width: 200px;
    margin: 0.2rem 0px;
  }

  ol {
    margin-left: -15px;
  }

  .swal-modal {
    background-color: rgba(63, 255, 106, 0.69);
    border: 3px solid white;
  }

  @media (max-width: 576px) {
    .btn {
      width: 100px;
      font-size: 10px;
    }

    .date {
      display: none;
    }

    .name {
      display: none;
    }
  }
`;
