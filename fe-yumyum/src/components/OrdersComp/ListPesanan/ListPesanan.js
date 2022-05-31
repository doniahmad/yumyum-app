import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import CardPesanan from "../CardPesanan/CardPesanan";

function ListPesanan(props) {
  return (
    <div>
      <Container>
        <h2>History Pesanan</h2>
        <hr />
        <Row>
          {props.loading ? (
            <Spinner animation="border" role="status" variant="warning">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : props.error ? (
            <p>{props.error}</p>
          ) : (
            props.order
              .slice()
              .reverse()
              .map((item, index) => (
                <Col className="col-pesanan" md={3} key={index + 1}>
                  <CardPesanan item={item} />
                </Col>
              ))
          )}
        </Row>
        <hr />
      </Container>
      );
    </div>
  );
}

export default ListPesanan;
