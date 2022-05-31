import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Styles } from "./Styles";
import Swal from "sweetalert2";
import { ArrowLeft, ExclamationCircleFill } from "react-bootstrap-icons";

function CreateEdit({ dataAdmin }) {
  const [data, setData] = useState({});
  const formData = new FormData();
  const history = useHistory();
  const [title, setTitle] = useState("Tambah");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  let username, email;

  useEffect(() => {
    if (dataAdmin !== undefined) {
      setData(dataAdmin);
      setTitle("Profile");
    }

    return () => {
      setData({});
      setTitle("Tambah");
    };
  }, [dataAdmin]);

  function handleOnChange(e) {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  }

  const displayAlert = (e) => {
    const tooltip = e.currentTarget.lastChild;
    tooltip.style.opacity = 1;
    setTimeout(() => {
      tooltip.style.opacity = 0;
    }, 2000);
  };

  function previewImage(e) {
    const image = document.querySelector("#img");
    const imgPreview = document.querySelector(".image-preview");

    imgPreview.style.display = "block";
    const oFReader = new FileReader();
    oFReader.readAsDataURL(image.files[0]);
    oFReader.onload = function (oFREvent) {
      imgPreview.src = oFREvent.target.result;
    };

    const newData = { ...data };
    newData[e.target.name] = e.target.files[0];
    setData(newData);
  }

  if (dataAdmin !== undefined) {
    username = (
      <div className="mb-3" style={{ position: "relative" }}>
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          required
          className="form-control"
          id="username"
          name="username"
          defaultValue={data.username || ""}
          disabled
        />
        <span className="tooltip">
          <ExclamationCircleFill />
          Data ini tidak dapat diubah.
        </span>
      </div>
    );
    email = (
      <div className="mb-3" style={{ position: "relative" }}>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          required
          className="form-control"
          id="email"
          name="email"
          defaultValue={data.email || ""}
          onChange={(e) => handleOnChange(e)}
          disabled
        />
        <span className="tooltip">
          <ExclamationCircleFill />
          Data ini tidak dapat diubah.
        </span>
      </div>
    );
  } else {
    username = <div></div>;
    email = (
      <div className="mb-3" style={{ position: "relative" }}>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          required
          className="form-control"
          id="email"
          name="email"
          defaultValue={data.email || ""}
          onChange={(e) => handleOnChange(e)}
        />
      </div>
    );
  }

  function handleOnSubmit(e) {
    e.preventDefault();

    const setting = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    if (dataAdmin !== undefined) {
      const dataKeys = Object.keys(dataAdmin);
      for (let index = 0; index < dataKeys.length; index++) {
        if (dataAdmin[dataKeys[index]] !== data[dataKeys[index]]) {
          formData.append(dataKeys[index], data[dataKeys[index]]);
        }
      }
      if (data !== dataAdmin) {
        formData.append("_method", "PUT");
        Swal.fire({
          title: "Yakin ingin menyimpan perubahan ?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          reverseButtons: true,
          focusConfirm: false,
        }).then((result) => {
          if (result.value) {
            setLoading(true);
            axios
              .post(`/admin/${data.id}`, formData, setting)
              .then((res) => {
                setLoading(false);
                Swal.fire({
                  title: "Berhasil",
                  text: "Data berhasil disimpan",
                  icon: "success",
                  confirmButtonColor: "#3085d6",
                }).then(() => {
                  window.location.href = "/dashboard/admin";
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
          } else {
            setLoading(false);
          }
        });
      } else {
        Swal.fire({
          title: "Tidak ada perubahan",
          icon: "info",
          confirmButtonColor: "#3085d6",
        });
      }
    } else {
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("contact", data.contact);
      formData.append("address", data.address);
      formData.append("password", data.password);
      formData.append("password_confirmation", data.password_confirmation);
      formData.append("role", "admin");
      if (data.image !== undefined) {
        formData.append("image", data.image);
      }
      Swal.fire({
        title: "Yakin ingin menyimpan data ?",
        text: "Data akan disimpan",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        reverseButtons: true,
        focusConfirm: false,
      }).then((result) => {
        if (result.value) {
          setLoading(true);
          axios
            .post("/register", formData)
            .then((res) => {
              setLoading(false);
              Swal.fire({
                title: "Berhasil",
                text: "Data berhasil disimpan",
                icon: "success",
                confirmButtonColor: "#3085d6",
              }).then(() => {
                history.push("/dashboard/admin");
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
        } else {
          setLoading(false);
        }
      });
    }
  }
  return (
    <Styles>
      <Container>
        <div className="d-flex mt-3">
          <ArrowLeft className="arrow-back" onClick={() => history.goBack()} />
          <h2>{title} Admin</h2>
        </div>

        <form onSubmit={handleOnSubmit} encType="multipart/form-data">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              required
              className="form-control"
              id="name"
              name="name"
              defaultValue={data.name || ""}
              onChange={(e) => handleOnChange(e)}
            />
          </div>

          {username}

          {email}

          <div className="mb-3 d-flex flex-column">
            <label className="form-label" htmlFor="img">
              Photo Profile
            </label>
            {data.image !== undefined ? (
              <div className="img-profile-container">
                <img
                  className="image-preview img-fluid mb-3 w-25 "
                  alt=""
                  src={data.image}
                />
              </div>
            ) : (
              <div className="img-profile-container">
                <img
                  className="image-preview img-fluid mb-3 w-25"
                  alt=""
                  src="/assets/person.svg"
                />
              </div>
            )}
            <input
              type="file"
              className="form-control"
              id="img"
              name="image"
              onChange={previewImage}
            />
            <div className="text-danger"></div>
          </div>

          {dataAdmin === undefined && (
            <>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  required
                  className="form-control"
                  id="password"
                  name="password"
                  defaultValue={data.password || ""}
                  onChange={(e) => handleOnChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password_confirmation" className="form-label">
                  Password Confirmation
                </label>
                <input
                  type="password"
                  required
                  className="form-control"
                  id="password_confirmation"
                  name="password_confirmation"
                  defaultValue={data.password_confirmation || ""}
                  onChange={(e) => handleOnChange(e)}
                />
              </div>
            </>
          )}

          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              required
              className="form-control"
              id="address"
              name="address"
              defaultValue={data.address || ""}
              onChange={(e) => handleOnChange(e)}
            />
            <div
              id="validationServerAddressFeedback"
              className="invalid-feedback"
            ></div>
          </div>
          <div className="mb-3">
            <label htmlFor="contact" className="form-label">
              Contact
            </label>
            <input
              type="text"
              required
              className="form-control"
              id="contact"
              name="contact"
              defaultValue={data.contact || ""}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          {error === "" ? null : <p className="text-danger">{error}</p>}
          <button
            type="submit"
            className="btn btn-warning mb-5"
            style={{ backgroundColor: "var(--main-color)", color: "white" }}
          >
            {dataAdmin === undefined ? "Tambah" : "Ubah"}
          </button>
        </form>
      </Container>
      {loading && (
        <div className="loading">
          <Spinner animation="border" variant="warning" />
        </div>
      )}
    </Styles>
  );
}

export default CreateEdit;
