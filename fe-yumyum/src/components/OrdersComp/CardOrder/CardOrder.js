import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { formatCurrency } from "../../../util/NumberFormat";
import { Styles } from "./CardOrderStyle";
import Swal from "sweetalert2";
import { db, storage } from "../../../util/firebase";
import { update, ref, remove } from "firebase/database";
import { deleteObject, ref as sRef } from "firebase/storage";

function CardOrder({ item }) {
  let status;
  let button;
  const [showAll, setShowAll] = useState(false);

  const dbRef = ref(db, `orders/${item.order_code}`);
  const stRef = sRef(storage, `orderProof/${item.order_code}`);

  const updateStatus = (status) => {
    const data = {
      status: status,
    };

    return update(dbRef, data);
  };

  const dataMenuShowAll = () => {
    showAll ? setShowAll(false) : setShowAll(true);
  };

  const handleDeliveredClick = (e) => {
    e.stopPropagation();
    const status = "terkirim";

    const data_product = item.order_items.map((item) => {
      return {
        product_id: item.item_id,
        quantity: item.quantity,
      };
    });

    Swal.fire({
      title: "Barang sudah terkirim ?",
      text: "Pastikan pesananmu sudah terkirim sebelum menekan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      reverseButtons: true,
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.value) {
        updateStatus(status);
        axios.post("/sold-product", data_product);
      }
    });
  };
  const handleCancelClick = (e) => {
    e.stopPropagation();
    const status = "dibatalkan";
    Swal.fire({
      title: "Yakin membatalkan pesanan ?",
      text: "Pesanan akan dibatalkan ketika anda setuju",
      icon: "warning",
      iconColor: "#d33",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      reverseButtons: true,
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.value) {
        updateStatus(status);
      }
    });
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();

    Swal.fire({
      title: "Yakin Menghapus History Pesanan ?",
      text: "History pesanan akan dihapus!",
      icon: "warning",
      iconColor: "#d33",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      reverseButtons: true,
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.value) {
        remove(dbRef);
        deleteObject(stRef);
      }
    });
  };

  switch (item.status.toLowerCase()) {
    case "diproses":
      status = (
        <p
          style={{
            listStyleType: "disc",
            display: "list-item",
            marginLeft: "1rem",
            color: "#FFDF34",
            fontWeight: "500",
          }}
        >
          Sedang Diproses
        </p>
      );
      break;

    case "dikirim":
      status = (
        <p
          style={{
            listStyleType: "disc",
            display: "list-item",
            marginLeft: "1rem",
            color: "#",
            fontWeight: "500",
          }}
          className="text-info"
        >
          Sedang Dikirim
        </p>
      );

      button = (
        <Button
          variant="warning"
          className={`ms-auto btn-deliver`}
          onClick={handleDeliveredClick}
        >
          Terkirim
        </Button>
      );
      break;
    case "terkirim":
      status = (
        <p
          style={{
            listStyleType: "disc",
            display: "list-item",
            marginLeft: "1rem",
            color: "green",
            fontWeight: "500",
          }}
        >
          Pesanan Terkirim
        </p>
      );

      button = (
        <Button
          variant="danger"
          className={`ms-auto btn-deliver btn-cancel-${item.id}`}
          onClick={handleDeleteClick}
        >
          Hapus
        </Button>
      );
      break;

    case "dibatalkan":
      status = (
        <p
          style={{
            listStyleType: "disc",
            display: "list-item",
            marginLeft: "1rem",
            color: "#FA2A2A",
            fontWeight: "500",
          }}
        >
          Pesanan Dibatalkan
        </p>
      );

      button = (
        <Button
          variant="danger"
          className={`ms-auto btn-deliver btn-cancel-${item.id}`}
          onClick={handleDeleteClick}
        >
          Hapus
        </Button>
      );
      break;

    case "menunggu":
      status = (
        <p
          style={{
            listStyleType: "disc",
            display: "list-item",
            marginLeft: "1rem",
            color: "#747474",
            fontWeight: "500",
          }}
        >
          Menunggu Konfirmasi
        </p>
      );

      button = (
        <Button
          variant="danger"
          className={`ms-auto btn-deliver btn-cancel-${item.id}`}
          onClick={handleCancelClick}
        >
          Batalkan
        </Button>
      );
      break;

    default:
      status = <p></p>;
      break;
  }

  return (
    <Styles>
      <Card onClick={dataMenuShowAll}>
        <Card.Body>
          <div className="status">{status}</div>
          <hr />
          <p className="kode-pesanan">Kode Pesanan : {item.order_code}</p>
          <Row className="row-card-parent">
            <Col>
              <Row className="data-menu-row" id={`card-${item.id}`}>
                {showAll
                  ? item.order_items.map((item, index) => {
                      return (
                        <Col key={index + 1} className="d-flex">
                          <p>
                            {index + 1}. {item.name}
                          </p>
                          <p className="ms-auto"> x {item.quantity}</p>
                        </Col>
                      );
                    })
                  : item.order_items.slice(0, 5).map((item, index) => {
                      if (index < 4) {
                        return (
                          <Col key={index + 1} className="d-flex">
                            <p>
                              {index + 1}. {item.name}
                            </p>
                            <p className="ms-auto"> x {item.quantity}</p>
                          </Col>
                        );
                      } else {
                        return <p className={"btn-see"}>.....</p>;
                      }
                    })}
              </Row>
            </Col>
          </Row>
          <div className="bot">
            <hr />
            <div className="d-flex">
              <div className="total">
                <p className="total-text">
                  Total : {formatCurrency(item.total_price)}
                </p>
              </div>
              {button}
            </div>
          </div>
        </Card.Body>
      </Card>
    </Styles>
  );
}

export default CardOrder;
