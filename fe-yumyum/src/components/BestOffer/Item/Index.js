import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions/cartActions";
import { formatCurrency } from "../../../util/NumberFormat";
import Swal from "sweetalert2";

const Item = ({ product, user }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    if (user.length !== 0) {
      const container = document.querySelector(`#card-${product.id}`);
      dispatch(addToCart(product.slug, 1));
      container
        .querySelector("#best-offer-to-cart")
        .appendChild(container.querySelector(`.img-item`).cloneNode())
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
  return (
    <Row id={`card-${product.id}`}>
      <Col sm="12">
        <div id="best-offer-to-cart" className="out"></div>

        <div className="img-container">
          {discount}
          <Image src={product.image} alt="" className="img-item" fluid />
        </div>
      </Col>
      <Col sm="12">
        <div className="item-info text-start">
          <h1 className="title">{product.name}</h1>
          {product.price_after_discount !== null && (
            <div className="d-flex container-harga">
              <s className="harga" style={{ color: "#b3b3b3" }}>
                {formatCurrency(product.price)}
              </s>
              <p className="harga ps-3">
                {formatCurrency(product.price_after_discount)}
              </p>
            </div>
          )}
          <p className="desc">{product.description}</p>
          <Button
            variant="warning"
            onClick={(e) => {
              e.preventDefault();
              addToCartHandler();
            }}
          >
            <Image src="/assets/plus-offer.svg" />
            Kerajang
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default Item;
