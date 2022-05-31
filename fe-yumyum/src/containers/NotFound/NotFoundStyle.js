import styled from "styled-components";

export const Styles = styled.div`
  margin-top: 7rem;
  p {
    margin-top: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    color: #3f3d56;
    span {
      text-decoration: underline;
    }

    span:hover {
      cursor: pointer;
      color: var(--main-color);
    }
  }

  img {
    width: 50%;
  }
`;
