import React from "react";
import { Styles } from "./Styles";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { formatCurrency } from "../../../util/NumberFormat";
import { db, storage } from "../../../util/firebase";
import { update, ref, remove } from "firebase/database";
import { deleteObject, ref as sRef } from "firebase/storage";
import { useHistory } from "react-router-dom";
import axios from "axios";

function ListOrders({ item }) {
  let status;
  let button;
  const history = useHistory();
  const dbRef = ref(db, `orders/${item.order_code}`);
  const stRef = sRef(storage, `orderProof/${item.order_code}`);

  const updateStatus = (status) => {
    const data = {
      status: status,
    };

    return update(dbRef, data);
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
      title: "Apakah barang sudah terkirim ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        updateStatus(status);
        axios.post("/sold-product", data_product);
      }
    });
  };
  const handleOnDeliveryClick = (e) => {
    e.stopPropagation();
    const status = "dikirim";

    Swal.fire({
      title: "Apakah barang siap dikirim ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        updateStatus(status);
      }
    });
  };

  const handleOnProsesClick = (e) => {
    e.stopPropagation();

    const status = "diproses";

    updateStatus(status);
  };

  const handleCancelClick = (e) => {
    e.stopPropagation();
    const status = "dibatalkan";

    Swal.fire({
      title: "Yakin ingin membatalkan pesanan ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      reverseButtons: true,
      iconColor: "#d33",
      confirmButtonText: "Ya",
      focusConfirm: false,
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.value) {
        updateStatus(status);
      }
    });
  };

  const handleRemoveClick = (e) => {
    e.stopPropagation();

    Swal.fire({
      title: "Yakin ingin menghapus pesanan ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      reverseButtons: true,
      iconColor: "#d33",
      confirmButtonText: "Ya",
      focusConfirm: false,
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.value) {
        remove(dbRef);
        deleteObject(stRef);
      }
    });
  };

  switch (item.status) {
    case "diproses":
      status = (
        <td
          style={{
            marginLeft: "1rem",
            color: "#FFDF34",
          }}
        >
          Pesanan Sedang Diproses
        </td>
      );
      button = (
        <div className="d-block text-center">
          <Button
            variant="info"
            title="Terkirim"
            onClick={handleOnDeliveryClick}
          >
            Kirim Pesanan
          </Button>
          <Button variant="danger" onClick={handleCancelClick}>
            Batalkan Pesanan
          </Button>
        </div>
      );
      break;
    case "dikirim":
      status = (
        <td
          style={{
            marginLeft: "1rem",
          }}
          className="text-info"
        >
          Pesanan Sedang Dikirim
        </td>
      );
      button = (
        <div className="d-block text-center">
          <Button
            variant="success"
            title="Terkirim"
            onClick={handleDeliveredClick}
          >
            Pesanan Terkirim
          </Button>
        </div>
      );
      break;

    case "dibatalkan":
      status = (
        <td
          style={{
            marginLeft: "1rem",
            color: "red",
          }}
        >
          Pesanan Dibatalkan
        </td>
      );

      button = (
        <Button
          variant="danger"
          style={{ display: "block", margin: "auto" }}
          onClick={handleRemoveClick}
        >
          Hapus Pesanan
        </Button>
      );
      break;

    case "terkirim":
      status = (
        <td
          style={{
            marginLeft: "1rem",
            color: "green",
            fontWeight: "500",
          }}
        >
          Pesanan Terkirim
        </td>
      );
      button = (
        <div className="d-block text-center">
          <Button
            variant="danger"
            style={{ display: "block", margin: "auto" }}
            onClick={handleRemoveClick}
          >
            Hapus Pesanan
          </Button>
        </div>
      );

      break;

    case "menunggu":
      status = (
        <td
          style={{
            marginLeft: "1rem",
            color: "grey",
          }}
        >
          Menunggu Konfirmasi
        </td>
      );
      button = (
        <div className="d-block text-center">
          <Button
            variant="warning"
            title="DiProses"
            onClick={handleOnProsesClick}
          >
            Proses Pesanan
          </Button>

          <Button variant="danger" onClick={handleCancelClick}>
            Batalkan Pesanan
          </Button>
        </div>
      );
      break;

    default:
      status = <p>error</p>;
      button = <p>error</p>;
      break;
  }

  const handleItemClick = (e) => {
    history.push({
      pathname: `/dashboard/detail/${item.order_code}`,
      state: {
        detail: item,
      },
    });
  };

  return (
    <Styles key={item.id} onClick={handleItemClick}>
      <td className="date">{item.created_at}</td>
      <td className="order-code">{item.order_code}</td>
      <td className="name">{item.user.name}</td>
      <td className="total-price">{formatCurrency(item.total_price)}</td>
      {status}
      <td style={{ width: "20%" }}>{button}</td>
    </Styles>
  );
}

export default ListOrders;
