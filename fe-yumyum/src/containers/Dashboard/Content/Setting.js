import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { formatNumber } from "../../../util/NumberFormat";

function Setting() {
  const config = JSON.parse(localStorage.getItem("setting"));
  const [data, setData] = useState(config);
  const [coordinate, setCoordinate] = useState(
    JSON.parse(config.coordinate_location)
  );

  function handleOnKeyUp(e) {
    const price = formatNumber(e.target.value);
    e.target.value = price;
    const newData = { ...data };
    newData[e.target.name] = parseInt(e.target.value.replace(/\./g, ""));
    setData(newData);
  }

  function previewImage(e) {
    const image = document.querySelector("#logo");
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

  function handleOnChange(e) {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;

    setData(newData);
  }

  function handleCoordinate(e) {
    const newData = { ...data };
    const newCoordinate = { ...coordinate };

    newCoordinate[e.target.name] = e.target.value;
    setCoordinate(newCoordinate);
    newData.coordinate_location = JSON.stringify(newCoordinate);
    setData(newData);
  }

  function handleOnSubmit(e) {
    e.preventDefault();

    const setting = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const formData = new FormData();

    const dataKeys = Object.keys(config);
    for (let index = 0; index < dataKeys.length; index++) {
      if (config[dataKeys[index]] !== data[dataKeys[index]]) {
        formData.append(dataKeys[index], data[dataKeys[index]]);
      }
    }

    // formData.append("email", data.email);
    // formData.append("phone", data.phone);
    // formData.append("address", data.address);
    // formData.append("name", data.name);
    // formData.append("price_per_km", data.price_per_km);
    // formData.append("area_radius", data.area_radius);
    // formData.append("coordinate_location", data.coordinate_location);
    // formData.append("facebook_url", data.facebook_url);
    // formData.append("instagram_url", data.instagram_url);
    // formData.append("twitter_url", data.twitter_url);

    // formData.append("logo", data.logo);

    formData.append("_method", "PUT");
    Swal.fire({
      title: "Simpan Perubahan?",
      text: "Yakin ingin menyimpan perubahan ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes",
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: "Perubahan Berhasil Disimpan",
          icon: "success",
          confirmButtonColor: "#3085d6",
        }).then(() => {
          axios.post(`/setting`, formData, setting);
          window.reload(true);
        });
      }
    });
  }

  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Setting</h1>
      </div>
      <div className="form-setting">
        <form onSubmit={handleOnSubmit} encType="multipart/form-data">
          <div className="mb-3">
            <label htmlFor="price_per_km" className="form-label">
              Ongkos Pengiriman Perkilometer
            </label>
            <div
              className="d-flex"
              style={{
                backgroundColor: "#e9ecef",
                borderRadius: "0.25rem",
                border: "1px solid #ced4da",
              }}
            >
              <span style={{ padding: "0.3rem 0.8rem" }}>Rp</span>
              <input
                type="text"
                required
                className="form-control"
                id="price_per_km"
                name="price_per_km"
                defaultValue={formatNumber(data.price_per_km)}
                onKeyUp={handleOnKeyUp}
                style={{
                  border: "none",
                  borderLeft: "1px solid #ced4da",
                  borderRadius: "0 0.25rem 0.25rem 0",
                }}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="area_radius" className="form-label">
              Jangkauan Wilayah Pengiriman
            </label>
            <div
              className="d-flex"
              style={{
                backgroundColor: "#e9ecef",
                borderRadius: "0.25rem",
                border: "1px solid #ced4da",
              }}
            >
              <input
                type="text"
                required
                className="form-control"
                id="area_radius"
                name="area_radius"
                defaultValue={formatNumber(data.area_radius)}
                onKeyUp={handleOnKeyUp}
                style={{
                  border: "none",
                  borderRight: "1px solid #ced4da",
                  borderRadius: " 0.25rem 0 0 0.25rem",
                }}
              />
              <span style={{ padding: "0.3rem 0.8rem" }}>Km</span>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nama Restaurant
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
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Alamat Restaurant
            </label>
            <input
              type="text"
              required
              className="form-control"
              id="address"
              name="address"
              defaultValue={data.address}
              onChange={handleOnChange}
            />
            <div
              id="validationServerNameFeedback"
              className="invalid-feedback"
            ></div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Restaurant
            </label>
            <input
              type="text"
              required
              className="form-control"
              id="email"
              name="email"
              defaultValue={data.email}
              onChange={handleOnChange}
            />
            <div
              id="validationServerNameFeedback"
              className="invalid-feedback"
            ></div>
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              No. Telepon Restaurant
            </label>
            <input
              type="text"
              required
              className="form-control"
              id="phone"
              name="phone"
              defaultValue={data.phone}
              onChange={handleOnChange}
            />
            <div
              id="validationServerNameFeedback"
              className="invalid-feedback"
            ></div>
          </div>

          <div className="mb-3">
            <label htmlFor="logo" className="form-label">
              Logo Restaurant
            </label>
            <img
              className="image-preview img-fluid mb-3 d-block w-25"
              alt=""
              src={data.logo}
            />
            <input
              type="file"
              className="form-control"
              id="logo"
              name="logo"
              onChange={previewImage}
            />
            <div
              id="validationServerNameFeedback"
              className="invalid-feedback"
            ></div>
          </div>

          <div className="mb-3">
            <label htmlFor="coordinate_location" className="form-label">
              Coordinate Restaurant
            </label>
            <div className="coordinate_location d-flex">
              <label htmlFor="lat" className="form-label">
                Latitude&nbsp;:
              </label>
              <input
                type="text"
                required
                defaultValue={coordinate.lat}
                onChange={handleCoordinate}
                name="lat"
                className="form-control"
              />

              <label htmlFor="lat" className="form-label">
                Longtitude&nbsp;:
              </label>
              <input
                type="text"
                required
                name="long"
                onChange={handleCoordinate}
                defaultValue={coordinate.long}
                className="form-control"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="facebook_url" className="form-label">
              Facebook Restaurant
            </label>
            <input
              type="text"
              required
              className="form-control"
              id="facebook_url"
              name="facebook_url"
              defaultValue={data.facebook_url}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="instagram_url" className="form-label">
              Instagram Restaurant
            </label>
            <input
              type="text"
              required
              className="form-control"
              id="instagram_url"
              name="instagram_url"
              defaultValue={data.instagram_url}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="twitter_url" className="form-label">
              Twitter Restaurant
            </label>
            <input
              type="text"
              required
              className="form-control"
              id="twitter_url"
              name="twitter_url"
              defaultValue={data.twitter_url}
              onChange={handleOnChange}
            />
          </div>
          <button
            type="submit"
            className="btn-warning btn mb-4"
            style={{ width: "120px" }}
          >
            Simpan
          </button>
        </form>
        {/* )} */}
      </div>
    </div>
  );
}

export default Setting;
