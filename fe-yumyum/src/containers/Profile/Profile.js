import React from "react";
import { Container, Image, Spinner } from "react-bootstrap";
import { Styles } from "./ProfileStyles";
import {
  Pencil,
  ArrowLeft,
  ExclamationCircleFill,
} from "react-bootstrap-icons";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

function Profile(props) {
  document.title = "Profile | YumYum";
  const history = useHistory();
  const [update, setUpdate] = useState(props.user);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  function previewImage(e) {
    const image = document.querySelector("#image");
    const imgPreview = document.querySelector(".image-preview");

    imgPreview.style.display = "block";

    const oFReader = new FileReader();
    oFReader.readAsDataURL(image.files[0]);

    oFReader.onload = function (oFREvent) {
      imgPreview.src = oFREvent.target.result;
    };
    const newData = { ...update };
    newData[e.target.id] = e.target.files[0];
    setUpdate(newData);
  }

  const handleOnChange = (e) => {
    const newData = { ...update };
    newData[e.target.name] = e.target.value;
    setUpdate(newData);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const setting = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const formData = new FormData();

    const dataKeys = Object.keys(update);
    for (let index = 0; index < dataKeys.length; index++) {
      if (update[dataKeys[index]] !== props.user[dataKeys[index]]) {
        formData.append(dataKeys[index], update[dataKeys[index]]);
      }
    }
    if (update !== props.user) {
      Swal.fire({
        title: "Yakin Ingin Ubah Profile ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        reverseButtons: true,
        focusConfirm: false,
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.value) {
          setLoading(true);
          formData.append("_method", "PUT");
          axios
            .post(`/user/${update.id}`, formData, setting)
            .then((res) => {
              setLoading(false);
              Swal.fire({
                title: "Profile Berhasil Diubah",
                icon: "success",
                confirmButtonColor: "#3085d6",
              }).then((res) => {
                window.location.href = "/";
              });
            })
            .catch((err) => {
              setLoading(false);
              const error = Object.values(err.response.data.errors)[0][0];
              if (error.includes("upload")) {
                setError("The photo may not be greater than 2048 kilobytes.");
              } else {
                setError(error);
              }
            });
        }
      });
    } else {
      Swal.fire({
        title: "Tidak Ada Perubahan",
        icon: "info",
        confirmButtonColor: "#3085d6",
      });
    }
  };
  return (
    <Styles>
      <div className="page">
        <Container className="p-5">
          <div className="d-flex">
            <ArrowLeft
              className="arrow-back"
              onClick={() => {
                history.goBack();
              }}
            />
            <h3>Profile</h3>
          </div>
          <form onSubmit={onSubmit} encType="multipart/form-data">
            <div className="image-profile text-center">
              <Image src={update.image} className="image-preview m-auto" />
              <label className="form-label edit-photo" htmlFor="image">
                <Pencil />
              </label>
              <input
                type="file"
                className="form-control "
                id="image"
                name="image"
                onChange={previewImage}
                hidden={true}
              />
            </div>
            <div>
              <div className="mb-2">
                <label htmlFor="name" className="form-label">
                  Nama
                </label>
                <input
                  type="text"
                  required
                  className="form-control "
                  id="name"
                  name="name"
                  value={update.name}
                  onChange={handleOnChange}
                />
              </div>
              <div
                className="mb-2"
                title="This data cannot be changed"
                style={{ position: "relative" }}
              >
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  id="username"
                  name="username"
                  value={update.username}
                  disabled
                />
                <span className="tooltip">
                  <ExclamationCircleFill />
                  Data ini tidak dapat diubah.
                </span>
              </div>
              <div
                className="mb-2"
                title="This data cannot be changed"
                style={{ position: "relative" }}
              >
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  id="email"
                  name="email"
                  value={update.email}
                  disabled
                />
                <span className="tooltip">
                  <ExclamationCircleFill />
                  Data ini tidak dapat diubah.
                </span>
              </div>
              <div className="mb-2">
                <label htmlFor="address" className="form-label">
                  Alamat
                </label>
                <input
                  type="text"
                  required
                  className="form-control 
                    "
                  id="address"
                  name="address"
                  value={update.address}
                  onChange={handleOnChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contact" className="form-label">
                  Nomor Handphone
                </label>
                <input
                  type="text"
                  required
                  className="form-control 
                    "
                  id="contact"
                  name="contact"
                  value={update.contact}
                  onChange={handleOnChange}
                />
              </div>
              <p className="error-text">{error}</p>
              <button
                type="submit"
                className="btn btn-warning "
                style={{
                  backgroundColor: "var(--main-color)",
                  color: "white",
                  width: "120px",
                }}
              >
                Update
              </button>
            </div>
          </form>
        </Container>
      </div>
      {loading && (
        <div className="loading">
          <Spinner animation="border" variant="warning" />
        </div>
      )}
    </Styles>
  );
}

export default Profile;
