import React from "react";
import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../../util/NumberFormat";
import Styles from "./CardStyles";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

function CardComp({ product, category }) {
  const dispatch = useDispatch();
  const getUsers = useSelector((state) => state.getUsers);
  const { user } = getUsers;
  const addToCartHandler = (e) => {
    e.preventDefault();
    if (user.length !== 0) {
      const container = document.querySelector(`#card-${product.id}`);
      dispatch(addToCart(product.slug, 1));
      document
        .querySelector("#menu-to-cart")
        .appendChild(container.querySelector(`.card-img-top`).cloneNode())
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
    <Styles>
      <div id="menu-to-cart" className="out"></div>
      <Card id={`card-${product.id}`}>
        <Link to={`/item/${category}/${product.slug}`}>
          {discount}
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            {product.discount_type !== null ? (
              <div className="d-flex harga-container">
                <s className="harga" style={{ color: "#626262" }}>
                  {formatCurrency(product.price)}
                </s>
                <Card.Text className="harga ps-2">
                  {formatCurrency(product.price_after_discount)}
                </Card.Text>
              </div>
            ) : (
              <Card.Text>{formatCurrency(product.price)}</Card.Text>
            )}
            <Button variant="warning" onClick={addToCartHandler}>
              <img src="/assets/plus-seller.svg" alt="" />
            </Button>
          </Card.Body>
        </Link>
      </Card>
    </Styles>
  );
}

export default React.memo(CardComp);
