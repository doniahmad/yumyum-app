import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Styles from "./CartCardStyles";
import { formatCurrency } from "../../../util/NumberFormat";
import { TrashFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function CartCard({ product, qty, removeHandler, qtyChangeHandler }) {
  let value = qty;

  const plus = (e) => {
    e.preventDefault();
    value = value + 1;
    qtyChangeHandler(product.id, value);
  };

  const minus = (e) => {
    e.preventDefault();
    if (value > 1) {
      value = value - 1;
      qtyChangeHandler(product.id, value);
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
      <Link
        to={`/item/${product.category.category}/${product.slug}`}
        style={{
          cursor: "auto",
        }}
      >
        <Card>
          <Row>
            <Col xs md={2} style={{ position: "relative" }}>
              {discount}
              <Card.Img variant="top" src={product.image} />
            </Col>
            <Col xs={5} md={8}>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                {product.discount_type !== null ? (
                  <div className="d-flex">
                    <Card.Text>
                      <s className="harga" style={{ color: "#626262" }}>
                        {formatCurrency(product.price)}
                      </s>
                    </Card.Text>
                    <Card.Text className="harga ps-2">
                      {formatCurrency(product.price_after_discount)}
                    </Card.Text>
                  </div>
                ) : (
                  <Card.Text className="harga">
                    {formatCurrency(product.price)}
                  </Card.Text>
                )}
              </Card.Body>
            </Col>
            <Col xs md={2}>
              <div id="btn-contain">
                <ul>
                  <li id="minus" className="button-icon" onClick={minus}>
                    <button>-</button>
                  </li>
                  <li className="count">{qty}</li>
                  <li id="plus" className="button-icon" onClick={plus}>
                    <button>+</button>
                  </li>
                </ul>
              </div>
            </Col>
            <Col>
              <div
                className="btn-delete"
                onClick={(e) => {
                  e.preventDefault();
                  removeHandler(product.id);
                }}
              >
                <TrashFill size={30} />
              </div>
            </Col>
          </Row>
        </Card>
      </Link>
    </Styles>
  );
}

export default CartCard;
