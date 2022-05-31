import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Styles } from "./Styles";
import Swal from "sweetalert2";
import { ArrowLeft } from "react-bootstrap-icons";
import { formatNumber } from "../../../util/NumberFormat";

function CreateEdit({ dataProduct }) {
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
    detail: "",
    category_id: 1,
  });
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (dataProduct !== undefined) {
      setData(dataProduct);
      setTitle("Ubah");
    } else {
      setTitle("Tambah");
    }
    return () => {
      setData({});
      setTitle("");
    };
  }, [dataProduct]);

  function previewImage(e) {
    const image = document.querySelector("#img");
    const imgPreview = document.querySelector(".image-preview");

    imgPreview.style.display = "block";
    const oFReader = new FileReader();
    if (!image.files[0]) {
      imgPreview.src = "";
    }
    oFReader.readAsDataURL(image.files[0]);
    oFReader.onload = function (oFREvent) {
      imgPreview.src = oFREvent.target.result;
    };

    const newData = { ...data };
    newData[e.target.name] = e.target.files[0];
    setData(newData);
  }
  function handleOnChange(e) {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  }

  function handleOnKeyUp(e) {
    const price = formatNumber(e.target.value);
    e.target.value = price;
    const newData = { ...data };
    newData[e.target.name] = parseInt(e.target.value.replace(/\./g, ""));
    setData(newData);
  }

  function handleOnSubmit(e) {
    e.preventDefault();

    const setting = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const objData = new FormData();

    if (dataProduct !== undefined) {
      const dataKeys = Object.keys(dataProduct);
      for (let index = 0; index < dataKeys.length; index++) {
        if (dataProduct[dataKeys[index]] !== data[dataKeys[index]]) {
          objData.append(dataKeys[index], data[dataKeys[index]]);
        }
      }
      if (dataProduct !== data) {
        objData.append("_method", "put");
        Swal.fire({
          title: "Apakah anda yakin?",
          text: "Data yang anda ubah akan disimpan",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          focusConfirm: false,
          reverseButtons: true,
        }).then((result) => {
          if (result.value) {
            setLoading(true);
            axios
              .post(`/product/${dataProduct.id}`, objData, setting)
              .then((res) => {
                setLoading(false);
                Swal.fire({
                  title: "Berhasil",
                  text: "Data berhasil diubah",
                  icon: "success",
                  confirmButtonColor: "#3085d6",
                }).then(() => {
                  history.goBack();
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
      setLoading(true);
      objData.append("name", data.name);
      objData.append("description", data.description);
      objData.append("price", data.price);
      objData.append("image", data.image);
      objData.append("detail", data.detail);
      objData.append("category_id", data.category_id);

      axios
        .post(`/product`, objData, setting)
        .then((res) => {
          setLoading(false);
          Swal.fire({
            title: "Berhasil",
            text: "Data berhasil disimpan",
            icon: "success",
            confirmButtonColor: "#3085d6",
          }).then(() => history.goBack());
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
  }

  return (
    <Styles>
      <Container>
        <div className="d-flex">
          <ArrowLeft className="arrow-back" onClick={() => history.goBack()} />
          <h2>{title + " Product"}</h2>
        </div>
        <span style={{ color: "red", fontSize: "12px" }}>* Wajib disi</span>

        <form onSubmit={handleOnSubmit} encType="multipart/form-data">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nama<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              required
              className="form-control"
              id="name"
              name="name"
              defaultValue={data.name}
              onChange={handleOnChange}
            />
            <div
              id="validationServerNameFeedback"
              className="invalid-feedback"
            ></div>
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Harga<span style={{ color: "red" }}>*</span>
            </label>
            <div className="d-flex form-number">
              <span>Rp</span>
              <input
                type="text"
                required
                className="form-control"
                name="price"
                id="price"
                defaultValue={formatNumber(data.price) || ""}
                onKeyUp={(e) => {
                  handleOnKeyUp(e);
                }}
              />
            </div>
            <div
              id="validationServerPriceFeedback"
              className="invalid-feedback"
            ></div>
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category : &nbsp;
            </label>
            <select
              id="category_id"
              name="category_id"
              defaultValue={data.category_id}
              onChange={handleOnChange}
            >
              <option value={1} key={1}>
                Makanan
              </option>
              <option value={2} key={2}>
                Minuman
              </option>
              <option value={3} key={3}>
                Paket
              </option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="detail" className="form-label">
              Detail
            </label>
            <input
              type="text"
              className="form-control"
              id="detail"
              name="detail"
              defaultValue={data.detail}
              onChange={(e) => {
                handleOnChange(e);
              }}
            />
            <div
              id="validationServerNameFeedback"
              className="invalid-feedback"
            ></div>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Deskripsi<span style={{ color: "red" }}>*</span>
            </label>
            <textarea
              type="text"
              required
              className="form-control"
              rows={3}
              id="description"
              name="description"
              defaultValue={data.description}
              onChange={(e) => {
                handleOnChange(e);
              }}
              maxLength={325}
            />
            <div
              id="validationServerDescFeedback"
              className="invalid-feedback"
            ></div>
          </div>
          <div className="mb-3 d-flex flex-column">
            <label className="form-label" htmlFor="img">
              Image<span style={{ color: "red" }}>*</span>
            </label>
            {data.image !== null ? (
              <img
                className="image-preview img-fluid mb-3 w-25"
                alt=""
                src={data.image}
              />
            ) : (
              <img className="image-preview img-fluid mb-3 w-25" alt="" />
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

          {error === "" ? null : <p className="text-danger">{error}</p>}

          <button
            type="submit"
            className="btn btn-warning mb-5"
            style={{ backgroundColor: "var(--main-color)", color: "white" }}
          >
            {title}
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
