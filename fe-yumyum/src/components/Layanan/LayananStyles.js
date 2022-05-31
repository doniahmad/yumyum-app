import styled from "styled-components";

const Styles = styled.div`
  /* * {
    border: 1px solid black;
  } */

  .title {
    font-weight: 500;
    font-size: 30px;
    line-height: 45px;
    margin-top: 30px;
  }

  .desc {
    margin-top: -10px;
    font-weight: 300;
    font-size: 20px;
  }

  .discount {
    margin-top: -2px;
  }

  .delivery {
    margin-top: -1px;
  }

  .layanan.active {
    animation: fade-in-bottom 1.5s ease-in;
  }

  @keyframes fade-in-bottom {
    0% {
      -webkit-transform: translateY(50px);
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 576px) {
    .title {
      line-height: 1.5rem;
      font-size: 24px;
    }

    .desc {
      font-size: 18px;
    }
  }
`;

export default Styles;
