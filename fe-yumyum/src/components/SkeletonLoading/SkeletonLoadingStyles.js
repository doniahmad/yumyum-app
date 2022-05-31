import styled from "styled-components";

export const SkeletonCardMenuStyle = styled.section`
  .card {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 15rem;
    margin-bottom: 2rem;
    height: 13.5rem;
  }

  .btn-skeleton {
    position: absolute;
    right: 1.5rem;
    bottom: 0.7rem;
  }

  @media (max-width: 576px) {
    .card-body {
      padding: 0.5rem;
      height: 50px;
    }

    .card {
      height: 180px;
      width: 150px;
      margin-bottom: 1rem;
      .skeleton-card-img {
        height: 100px !important;
      }
    }

    .btn-skeleton {
      width: 35px !important;
      height: 35px !important;
      bottom: 10px;
      right: 10px;
    }
  }
`;

export const SkeletonCardMenuPopulerStyle = styled.section`
  margin-top: 2rem;

  .card {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 20rem;
    margin-bottom: 2.5rem;
  }

  .btn-skeleton {
    position: absolute;
    right: 1.8rem;
    bottom: 1.8rem;
  }

  @media (max-width: 576px) {
    .card-body {
      padding: 0.7rem;
      height: 85px;
    }

    .card {
      .skeleton-card-img {
        height: 120px !important;
      }

      width: 160px;
      margin-bottom: 0rem;
    }

    .btn-skeleton {
      width: 35px !important;
      height: 35px !important;
      bottom: 10px;
      right: 15px;
    }
  }
`;

export const SkeletonBestOfferStyle = styled.section`
  .bg-skeleton {
    position: relative;
    background-color: #e0e0e0;
    width: 100%;
    height: 610px;
  }

  .bg-skeleton .title {
    text-align: center;
    padding-top: 2.5rem;
  }

  .img-skeleton {
    width: 481px;
    height: 351px;
    margin: 0;
    position: absolute;
    top: 50%;
    right: 55%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .skeleton-info {
    width: 35%;
    position: absolute;
    top: 50%;
    right: 12%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  @media (max-width: 768px) {
    .bg-skeleton {
      height: 450px;

        .title {
          span {
            height: 30px!important;
            width: 60%!important;
         }
        }
        
        .img-skeleton {
          position:absolute ;
          width: 220px!important;
          height: 160px;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

 .skeleton-info {
      width: 80%;
      position: absolute;
      text-align: center;
      top: 80%;
      left: 50%;
      transform: translate(-50%, -50%);

      .skeleton-text {
        display: none ;
      }
  }
    
  }
`;

export const SkeletonLocationStyle = styled.section`
  .skeleton-title {
    margin-top: 8rem;
    margin-bottom: 3rem;
  }

  .skeleton-info * {
    margin-bottom: 0.5rem;
  }

  .skeleton-col-map {
    margin-top: -7rem;
  }
`;

export const SkeletonListStyle = styled.tbody`
  .btn-skeleton * {
    margin: 0 2px;
  }

  tr:nth-child(odd) td * {
    --base-color: #ffffff;
  }
`;

export const SkeletonOrderStyle = styled.section`
  .card {
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    min-height: 295px;
    margin-bottom: 1.5rem;
  }
`;

export const SkeletonOrderDashboardStyle = styled.tr`
  :nth-child(odd) td * {
    --base-color: #ffffff;
  }
`;

export const SkeletonProductDetailStyle = styled.section`

  @media (max-width: 576px) {
    .img-skeleton {
      width: 100%!important;
      height: 200px!important;
    }

    .info-skeleton {
      margin-top: 1rem;
      width: 100%!important;
      margin-left: 0 !important;

      .skeleton-title {
        width: 200px!important;
      }
    }
`;

export const SkeletonDataDashboardStyle = styled.section``;
