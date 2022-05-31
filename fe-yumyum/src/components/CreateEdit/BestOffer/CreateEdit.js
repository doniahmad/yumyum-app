import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Spinner, Stack, Table } from "react-bootstrap";
import { ArrowLeft, X, XSquareFill } from "react-bootstrap-icons";
import { Styles } from "./Styles";
import Swal from "sweetalert2";
import { formatCurrency, formatNumber } from "../../../util/NumberFormat";
import { useHistory } from "react-router-dom";

function CreateEdit() {
  const [text, setText] = useState("");
  const [products, setProducts] = useState([]);
  const [suggestion, setSuggestion] = useState([]);
  const [data, setData] = useState([]);
  const [newOffer, setNewOffer] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingUpload, setLoadingUpload] = useState(false);
  const history = useHistory();

  useEffect(() => {
    axios.get("/product").then((res) => {
      setProducts(res.data.data);
    });
    axios.get("/best-offer").then((res) => {
      const newData = [];
      res.data.map((item) => {
        return newData.push(item.product);
      });
      setData(newData);
      setLoading(false);
    });
  }, []);

  const priceAfterDiscountView = (item) => {
    switch (item.discount_type) {
      case "50%":
        return formatCurrency(item.price * 0.5);
      case "70%":
        return formatCurrency(item.price - item.price * 0.7);
      case "80%":
        return formatCurrency(item.price - item.price * 0.8);
      case "90%":
        return formatCurrency(item.price - item.price * 0.9);
      default:
        return (
          <div>
            <label htmlFor="price-after-discount">Set Price :&nbsp;</label>
            <input
              type="text"
              name="price-after-discount"
              onKeyUp={(e) => handleSetPriceAfterDiscount(e, item)}
              defaultValue={formatNumber(item.price_after_discount)}
              max={item.price}
              min={0}
              form="acceptUpdate"
              required
            />
          </div>
        );
    }
  };

  const handleSetPriceAfterDiscount = (e, item) => {
    const price = e.target.value.replace(/\./g, "");

    if (data.includes(item)) {
      const updateOldData = [...data];

      data.map((product, index) => {
        if (product.id === item.id) {
          updateOldData[index].price_after_discount = parseInt(price);
          updateOldData[index].discount_type = "custom";
        }
        setData(updateOldData);
        console.log(data);
        return (e.target.value = formatNumber(e.target.value));
      });
    } else {
      const updateNewData = [...newOffer];
      newOffer.map((product, index) => {
        if (product.id === item.id) {
          updateNewData[index].price_after_discount = parseInt(price);
          updateNewData[index].discount_type = "custom";
        }
        setNewOffer(updateNewData);
        return (e.target.value = formatNumber(e.target.value));
      });
    }
  };

  const PriceAfterDiscount = (e, item) => {
    const discount_type = e.target.value;
    const target = e.currentTarget.parentNode.parentNode.nextSibling;
    const label = document.createElement("label");
    const input = document.createElement("input");
    label.append("Set Price :\u00A0");
    label.setAttribute("for", "price_after_discount");
    input.setAttribute("type", "text");
    input.setAttribute("name", "price_after_discount");
    input.setAttribute("max", item.price);
    input.setAttribute("form", "acceptUpdate");
    input.onkeyup = (e) => handleSetPriceAfterDiscount(e, item);

    const checkData = (discount, price) => {
      target.innerHTML = formatCurrency(price);
      if (data.includes(item)) {
        const updateOldData = [...data];
        data.map((product, index) => {
          if (product.id === item.id) {
            updateOldData[index].discount_type = discount;
            updateOldData[index].price_after_discount = price;
          }
          return setData(updateOldData);
        });
      } else {
        const updateNewData = [...newOffer];
        newOffer.map((product, index) => {
          if (product.id === item.id) {
            updateNewData[index].discount_type = discount;
            updateNewData[index].price_after_discount = price;
          }
          return setNewOffer(updateNewData);
        });
      }
    };

    let price;

    switch (discount_type) {
      case "50%":
        price = item.price * 0.5;

        checkData("50%", price);
        break;
      case "70%":
        price = item.price - item.price * 0.7;
        checkData("70%", price);
        break;
      case "80%":
        price = item.price - item.price * 0.8;
        checkData("80%", price);
        break;
      case "90%":
        price = item.price - item.price * 0.9;
        checkData("90%", price);
        break;
      default:
        target.innerHTML = "";
        target.appendChild(label);
        target.appendChild(input);
        break;
    }
  };

  const handleOnChange = (e) => {
    let matches = [];
    setText(e);
    if (e.length > 0) {
      matches = products.filter((product) => {
        const regex = new RegExp(`${e}`, "gi");
        return (
          !newOffer.some((item) => item.name === product.name) &&
          !data.some((item) => item.name === product.name) &&
          product.name.match(regex)
        );
      });
    }
    setSuggestion(matches);
  };

  const suggestionHandler = (e) => {
    setText(e);
    setSuggestion([]);
  };

  const handleOnAdd = () => {
    let item = products.filter((product) => {
      return product.name === text;
    });
    item = item[0];

    if (item !== undefined) {
      try {
        const newData = [...newOffer];
        newData.push(item);
        setNewOffer(newData);
        setText("");
      } catch (err) {
        setError("Produk tidak ditemukan");
        console.log(err);
      }
    }
  };

  const handleOnDeleteClick = (index) => {
    const copyData = [...data];
    Swal.fire({
      title: "Yakin menghapus data dari daftar ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      iconColor: "#d33",
      reverseButtons: true,
      confirmButtonText: "Yes",
      focusConfirm: false,
    }).then((result) => {
      if (result.value) {
        copyData.splice(index, 1);
        setData(copyData);
      }
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const FormData = newOffer.map((item) => {
      return {
        product_id: item.id,
        price_after_discount: item.price_after_discount,
        discount_type: item.discount_type,
      };
    });

    const OldData = data.map((item) => {
      return {
        product_id: item.id,
        price_after_discount: item.price_after_discount,
        discount_type: item.discount_type,
      };
    });

    Swal.fire({
      title: "Data akan disimpan !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      reverseButtons: true,
      focusConfirm: false,
    }).then((result) => {
      if (result.value) {
        setLoadingUpload(true);
        axios
          .post("/best-offer", [...FormData, ...OldData])
          .then((res) => {
            setLoadingUpload(false);
            history.goBack();
          })
          .catch((err) => {
            setLoadingUpload(false);
            console.log(err);
          });
      }
    });
  };

  return (
    <Styles>
      <Container>
        <form id="addNewData" autoComplete="off"></form>
        <form id="acceptUpdate" onSubmit={handleOnSubmit}></form>
        <div className="d-flex">
          <ArrowLeft className="arrow-back" onClick={() => history.goBack()} />
          <h2>Buat Penawaran Terbaik</h2>
        </div>
        {loading ? (
          <Spinner animation="border" role="status" variant="warning">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <div className="table-responsive table-bordered">
            <Table
              className="table table-striped table-sm text-center"
              striped
              bordered
              hover
            >
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Harga</th>
                  <th>Discount</th>
                  <th>Price After Discount</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{formatCurrency(item.price)}</td>
                    <td>
                      <div>
                        <select
                          name="disc"
                          className="disc-select"
                          defaultValue={item.discount_type}
                          onChange={(e) => PriceAfterDiscount(e, item)}
                        >
                          <option value="custom">Custom</option>
                          <option value="50%">Discount 50%</option>
                          <option value="70%">Discount 70%</option>
                          <option value="80%">Discount 80%</option>
                          <option value="90%">Discount 90%</option>
                        </select>
                      </div>
                    </td>
                    <td>
                      <div>{priceAfterDiscountView(item)}</div>
                    </td>
                    <td>
                      <XSquareFill
                        onClick={() => handleOnDeleteClick(index)}
                        size="30"
                        fill="red"
                      />
                    </td>
                  </tr>
                ))}
                {newOffer.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{formatCurrency(item.price)}</td>
                    <td>
                      <div>
                        <select
                          name="disc"
                          className="disc-select"
                          defaultValue={"custom"}
                          onChange={(e) => PriceAfterDiscount(e, item)}
                        >
                          <option value="custom">Custom</option>
                          <option value="50%">Discount 50%</option>
                          <option value="70%">Discount 70%</option>
                          <option value="80%">Discount 80%</option>
                          <option value="90%">Discount 90%</option>
                        </select>
                      </div>
                    </td>
                    <td>
                      <div>
                        <label htmlFor="price-after-discount">
                          Set Price :&nbsp;
                        </label>
                        <input
                          type="text"
                          name="price-after-discount"
                          onChange={(e) => handleSetPriceAfterDiscount(e, item)}
                          max={item.price}
                          min={0}
                          form="acceptUpdate"
                          required
                        />
                      </div>
                    </td>
                    <td>
                      <XSquareFill
                        onClick={() => {
                          const copyData = [...newOffer];
                          copyData.splice(index, 1);
                          setNewOffer(copyData);
                        }}
                        size="30"
                        fill="red"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
        <div className="input-data">
          <label htmlFor="name" className="form-label" form="addNewData">
            Nama Product
          </label>
          <Stack direction="horizontal">
            <input
              type="text"
              required
              className="form-control"
              id="name"
              name="name"
              autoComplete="off"
              form="addNewData"
              value={text}
              onChange={(e) => handleOnChange(e.target.value)}
            />
            {text && (
              <X
                size={30}
                className="x"
                onClick={() => {
                  setText("");
                  setSuggestion([]);
                }}
              />
            )}
            <button
              type="submit"
              className="btn-plus btn"
              onClick={handleOnAdd}
            >
              <span>+</span>
            </button>
          </Stack>
          <Stack className="suggestion">
            {suggestion &&
              suggestion.map((item, index) => (
                <div
                  className="suggestion"
                  key={item.id}
                  onClick={() => suggestionHandler(item.name)}
                >
                  <span>{item.name}</span>
                </div>
              ))}
          </Stack>
          {error === "" ? null : <p className="text-danger">{error}</p>}
          <button
            type="submit"
            form="acceptUpdate"
            className="btn btn-warning mt-4 simpan-btn"
            style={{ backgroundColor: "var(--main-color)" }}
          >
            Simpan
          </button>
        </div>
      </Container>
      {loadingUpload && (
        <div className="loading">
          <Spinner animation="border" variant="warning" />
        </div>
      )}
    </Styles>
  );
}

export default CreateEdit;
