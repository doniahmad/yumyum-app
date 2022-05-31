import React from "react";
import { Link } from "react-router-dom";
import { Pencil, Trash } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import { Styles } from "./AdminDataStyles";
import axios from "axios";
import Swal from "sweetalert2";

function AdminData({ admin }) {
  const role = localStorage.getItem("role");
  const AdminId = JSON.parse(localStorage.getItem("admin"));
  const handleOnDeleteClick = () => {
    Swal.fire({
      title: "Anda yakin menghapus ini ?",
      text: "Data akan dihapus secara permanen",
      icon: "warning",
      showCancelButton: true,
      iconColor: "#d33",
      confirmButtonColor: "#d33",
      reverseButtons: true,
      focusConfirm: false,
    }).then((result) => {
      if (result.value) {
        axios
          .delete(`/users/${admin.id}`)
          .then((res) => {})
          .catch((err) => {
            console.log(err);
          });
        Swal.fire("Data berhasil dihapus", "", "success").then(() => {
          window.location.reload();
        });
      }
    });
  };

  const buttonNavigation = (
    <td className="d-flex">
      <Link to={`/dashboard/edit/admin/${admin.id}`}>
        <Button variant="primary">
          <Pencil size={18} />
        </Button>
      </Link>
      {admin.id !== 1 && (
        <Button variant="danger" onClick={handleOnDeleteClick}>
          <Trash size={18} />
        </Button>
      )}
    </td>
  );
  return (
    <Styles>
      {role === "admin" ? ( // role admin
        admin.id === AdminId.id ? (
          <>
            <td>{admin.name}</td>
            <td>{admin.email}</td>
            <td>{admin.contact}</td>
            <td>{admin.role}</td>
            {buttonNavigation}
          </>
        ) : (
          <>
            <td>{admin.name}</td>
            <td>{admin.email}</td>
            <td>{admin.contact}</td>
            <td>{admin.role}</td>
            <td></td>
          </>
        )
      ) : (
        <>
          <td>{admin.name}</td>
          <td>{admin.email}</td>
          <td>{admin.contact}</td>
          <td>{admin.role}</td>
          {buttonNavigation}
        </>
      )}
    </Styles>
  );
}

export default AdminData;
