import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import { Pencil, Trash } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../util/NumberFormat";
import { Styles } from "./Styles";
import Swal from "sweetalert2";

function DataProduct(props) {
  const handleOnDeleteClick = () => {
    Swal.fire({
      title: "Yakin ingin menghapus ini ?",
      text: "Data akan dihapus secara permanen",
      icon: "warning",
      showCancelButton: true,
      iconColor: "#d33",
      confirmButtonColor: "#d33",
      reverseButtons: true,
      focusConfirm: false,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.value) {
        axios
          .delete(`/product/${props.id}`)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        Swal.fire({
          title: "Berhasil dihapus",
          icon: "success",
          confirmButtonColor: "#3085d6",
        }).then(() => window.location.reload());
      }
    });
  };

  return (
    <Styles>
      <td>{props.nama}</td>
      <td>{formatCurrency(props.harga)}</td>
      <td className="btn-nav d-flex">
        <Link to={`/dashboard/edit/${props.category}/${props.slug}`}>
          <Button variant="primary">
            <Pencil size={18} />
          </Button>
        </Link>
        <Button variant="danger" onClick={handleOnDeleteClick}>
          <Trash size={18} />
        </Button>
      </td>
    </Styles>
  );
}

export default DataProduct;
