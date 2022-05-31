import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Styles from "./LayananStyles";

function Layanan() {
  return (
    <Styles>
      <Container>
        <Row className="text-center">
          <Col md="4" sm="12">
            <Image
              src="/assets/discount.svg"
              alt="Discount"
              style={{
                marginTop: "-5px",
              }}
            />
            <div className="discount">
              <h1 className="title 1">Promo dan Diskon</h1>
              <p className="desc">
                Banyak Promo dan Diskon yang dapat didapatkan
              </p>
            </div>
          </Col>
          <Col md="4" sm="12">
            <Image src="/assets/freshfood.svg" alt="Fresh Food" />
            <div className="fresh-food">
              <h1 className="title diff 2">Makanan Bersih</h1>
              <p className="desc">
                Makanan yang terjamin kebersihan dan kesegarannya
              </p>
            </div>
          </Col>
          <Col md="4" sm="12">
            <Image
              src="/assets/delivery.svg"
              alt="Delivery"
              style={{
                marginTop: "7px",
              }}
            />
            <div className="delivery">
              <h1 className="title diff" id="3">
                Cepat Antar
              </h1>
              <p className="desc">
                Pengirimin dilakukan dengan cepat tanpa merlukan waktu yang lama
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
}

export default Layanan;
