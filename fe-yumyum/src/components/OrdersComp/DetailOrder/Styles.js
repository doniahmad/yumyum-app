import styled from "styled-components";

export const Styles = styled.div`
  .detail-order {
    position: relative;
  }

  .detail-container img {
    width: 200px;
  }

  .detail-order .detail-container {
    width: 100%;
    height: 100%;
    padding: 1rem;

    td {
      padding: 2px 0;
      vertical-align: top;

      .item-pesanan {
        margin-bottom: -10px;
        width: 400px;
      }
    }

    .more-detail { 
      display: none;
    }

    .sidetable {
      position: fixed;
      right: 0;
      bottom: 0;
      top: 0;
      width: 39%;
      padding: 1rem;
      padding-right: 2rem;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
        rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
      z-index: 9990;
      background-color: white;

      .close-sidetable {
        display:none ;
      }
    }
  }

  .img-proof {
    width: 100%;
    height: 100px;
    object-fit: cover;
  }

  .title {
    margin-bottom: -10px;

    svg {
      cursor: pointer;
    }

    h2 {
      margin-left: 1rem;
    }
  }

  .btn-container {
    margin-top: 1rem;
  }

  .btn-location {
    border: 1px solid black;
    background-color: transparent;
    padding: 0.5em 1em 0.5em 1em;
    margin-right: 1rem;

    a {
      text-decoration: none;
      color: black;
    }
  }

  .btn-print {
    border: 1px solid black;
    background-color: transparent;
    padding: 0.5em 1em 0.5em 1em;
  }

  img {
    width: 20%;
    cursor: pointer;
  }

  .big-img {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom:0 ;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
    
    svg {
      fill: white;
      position: absolute;
      top: 0;
      right: 10px;
      cursor: pointer;
    }
    
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
  }

}
@media (max-width: 576px) {

  .detail-order {
    
    .detail-container {

      .title {
        h2 {
          margin-left: 10px;
          font-size: 14px;
          margin-top: 6px;
        }

        svg {
          height: 15px;
          width: 15px;
        }
      }
      
      .more-detail {
        display: block;
        margin-bottom: -20px;
        margin-left: auto;
        font-size: 12px;
        
        img {
          height: 15px;
          width: 14px;
          margin-left:0.2rem ;
          margin-top: -0.1rem;
        }
      }

      .table-order {
        display: block!important;

        
        .pesanan {
          width: 100%;
        }
        
        .item-pesanan {
          width: 100%;

          .item-name {
            word-break: break-all;
            width: 40%;
          }
        }


        
        .sidetable {
          .close-sidetable {
            display: block;
            position: absolute;
            right: 5px;
            top: 5px;
          }
          transition: all 0.5s ease-in-out;
          padding-top: 30px;
          transform: translateY(-100%);
          left: 0;
          top: 0;
          bottom: 0;
          width: 100%;
    }
      }
  }
`;
