import styled from "styled-components";

const Styles = styled.footer`
  .footer {
    bottom: 0;
    width: 100%;
    margin-top: 3rem;
    background-color: var(--second-color);
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .logo {
    color: var(--text-color);
    font-weight: 700;
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  .icon {
    margin-right: 1rem;
    margin-top: 1rem;
  }

  .icon:hover {
    background-color: var(--main-color);
  }

  .icon:hover > .i {
    color: var(--text-color);
  }

  .icon-facebook:hover {
    background-color: var(--text-color);
  }

  .icon-facebook:hover > .facebook {
    color: var(--main-color);
  }

  .facebook {
    border: 1.5px solid var(--main-color);
    position: absolute;
    border-radius: 100%;
    color: var(--second-color);
  }

  .icon-facebook {
    background-color: var(--main-color);
    width: 41px;
    height: 41px;
    border-radius: 100%;
  }

  .instagram {
    height: 41px;
    vertical-align: middle;
    color: var(--main-color);
  }

  .icon-instagram {
    border-radius: 100%;
    border: 1.5px solid var(--main-color);
    width: 43px;
    height: 43px;
    text-align: center;
  }

  .twitter {
    height: 41px;
    vertical-align: middle;
    color: var(--main-color);
  }

  .icon-twitter {
    border-radius: 100%;
    border: 1.5px solid var(--main-color);
    width: 43px;
    height: 43px;
    text-align: center;
  }

  .footer-list {
    color: var(--text-color);
    margin-top: 1rem;
  }

  .footer-list .title {
    font-weight: 500;
    font-size: 1.1rem;
  }

  .footer-list ul li {
    list-style: none;
    font-weight: 300;
    line-height: 38px;
    letter-spacing: 1px;
  }

  a {
    text-decoration: none;
    color: var(--text-color);
    font-weight: 300;
    line-height: 38px;
    letter-spacing: 1px;
  }

  a:hover li {
    font-weight: 400 !important;
  }

  @media (max-width: 576px) {
    .navigation-list {
      display: none;
    }

    .logo {
      margin-top: -2rem;
      margin-bottom: 1rem;
    }

    .social-media {
      margin-bottom: -1rem;
    }
  }
`;

export default Styles;
