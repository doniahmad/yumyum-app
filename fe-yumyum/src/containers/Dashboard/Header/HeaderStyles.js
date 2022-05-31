import styled from "styled-components";

export const Styles = styled.div`
  .navbar {
    position: fixed;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: white;
  }

  p {
    margin-top: 0.9rem;
    margin-right: 0.5rem;
  }

  .navbar-toggler {
    display: none;
  }

  img {
    width: 40px;
    height: 40px;
    margin: 0.5rem;
    margin-right: 1rem;
    border-radius: 100%;
    object-fit: cover;
  }

  .profile {
    cursor: pointer;
    padding: 0 1rem;
  }

  .profile:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 576px) {
    .navbar-brand {
      display: none;
    }

    .navbar .navbar-toggler {
      left: 0;
      display: block;

      :focus {
        box-shadow: none;
      }
    }

    img {
      margin-right: 0px;
    }
  }
`;
