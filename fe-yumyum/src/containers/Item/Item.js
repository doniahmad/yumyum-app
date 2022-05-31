import React, { useState, useEffect } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { ArrowLeft, X } from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";
import Styles from "./ItemStyles";
import { formatCurrency } from "../../util/NumberFormat";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { getProductDetails } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/cartActions";
import { useParams } from "react-router-dom";
import { SkeletonProductDetail } from "../../components/SkeletonLoading/SkeletonLoading";

function Item({ match, user }) {
  document.title = "Detail | YumYum";
  let [value, setValue] = useState(1);
  const pathHistory = useHistory();
  const dispatch = useDispatch();
  const [bigImage, setBigImage] = useState(false);
  const { slug } = useParams();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && slug !== product.slug) {
      dispatch(getProductDetails(slug));
    }
  }, [dispatch, product, slug]);

  const plus = () => {
    value = value + 1;
    setValue(value);
  };

  const minus = () => {
    if (value > 0) {
      value = value - 1;
      setValue(value);
    }
  };

  const addToCartHandler = () => {
    if (user !== null) {
      const container = document.querySelector(`.detail-container`);
      dispatch(addToCart(product.slug, value));
      container
        .querySelector("#menu-detail-to-cart")
        .appendChild(container.querySelector(`.img-detail`).cloneNode())
        .classList.add("image-animation");
    } else {
      Swal.fire({
        title: "Anda perlu login",
        text: "Anda perlu login untuk memesan !",
        icon: "info",
        confirmButtonColor: "#3085d6",
      }).then(() => (window.location.href = "/login"));
    }
  };

  let discount;
  if (product?.discount_type) {
    switch (product.discount_type) {
      case "50%":
        discount = (
          <img
            src="/assets/discount-tag/50-percent.png"
            alt=""
            className="disc-50 disc-tag img-fluid"
          />
        );
        break;
      case "70%":
        discount = (
          <img
            src="/assets/discount-tag/70-percent.png"
            alt=""
            className="disc-70 disc-tag img-fluid"
          />
        );
        break;
      case "80%":
        discount = (
          <img
            src="/assets/discount-tag/80-percent.png"
            alt=""
            className="disc-80 disc-tag img-fluid"
          />
        );
        break;
      case "90%":
        discount = (
          <img
            src="/assets/discount-tag/90-percent.png"
            alt=""
            className="disc-90 disc-tag img-fluid"
          />
        );
        break;
      case "custom":
        discount = (
          <img
            src="/assets/discount-tag/sale.png"
            alt=""
            className="sale disc-tag img-fluid"
          />
        );
        break;
      default:
        break;
    }
  }

  return (
    <Styles>
      <Container id="container">
        {loading ? (
          <SkeletonProductDetail />
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <>
            <div className="header">
              <ArrowLeft
                size={28}
                color="black"
                onClick={() => {
                  pathHistory.goBack();
                }}
                style={{
                  cursor: "pointer",
                }}
              />
              <hr />
            </div>
            <div className="detail-container">
              <div id="menu-detail-to-cart" className="out"></div>
              <Row>
                <Col xs={12} md={7} className="contain-img">
                  {discount}
                  <img
                    className="d-block img-detail"
                    src={`${product.image}`}
                    alt=""
                    onClick={() => setBigImage(true)}
                  />
                </Col>
                <Col xs>
                  <div className="info">
                    <h1>{product.name}</h1>
                    {product.detail !== "null" && (
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        {product.detail}
                      </p>
                    )}
                    <p className="desc">{product.description}</p>
                    {product.discount_type !== null ? (
                      <div className="d-flex">
                        <s className="harga" style={{ color: "#626262" }}>
                          {formatCurrency(product.price)}
                        </s>
                        <p className="harga ps-2">
                          {formatCurrency(product.price_after_discount)}
                        </p>
                      </div>
                    ) : (
                      <p className="harga">{formatCurrency(product.price)}</p>
                    )}
                    <div className="all-button">
                      <div id="contain">
                        <ul>
                          <li
                            id="minus"
                            className="button-icon"
                            onClick={minus}
                          >
                            <button>-</button>
                          </li>
                          <li className="count">{value}</li>
                          <li id="plus" className="button-icon" onClick={plus}>
                            <button>+</button>
                          </li>
                        </ul>
                      </div>
                      <Button variant="warning" onClick={addToCartHandler}>
                        <Image src="/assets/plus-offer.svg" />
                        Kerajang
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </>
        )}
        {bigImage && (
          <div className="big-img">
            <a href={product.image} target="_blank" rel="noopener noreferrer">
              <img src={product.image} alt="" />
            </a>
            <X size={40} onClick={() => setBigImage(false)} />
          </div>
        )}
      </Container>
    </Styles>
  );
}

export default Item;
