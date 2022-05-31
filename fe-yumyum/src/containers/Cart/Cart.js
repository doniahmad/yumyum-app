import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Container, Image, Spinner } from "react-bootstrap";
import CartCard from "../../components/CartComp/CartCard/CartCard";
import { formatCurrency } from "../../util/NumberFormat";
import Styles from "./CartStyles";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { adjustQty, removeFromCart } from "../../redux/actions/cartActions";
import { ArrowLeft, X } from "react-bootstrap-icons";
import { db, storage } from "../../util/firebase";
import { set, ref } from "firebase/database";
import { UserLocation } from "../../components/Maps/Maps";
import {
  ref as sRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Cart(props) {
  document.title = "Cart | YumYum ";
  const config = props.config;
  const [totalPrice, setTotalPrice] = useState(0);
  const [proofImage, setProofImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector((state) => state.cart || []);
  const getUsers = useSelector((state) => state.getUsers);
  const isMobile = window.innerWidth < 576;
  const { cartItems } = cart;
  const { user } = getUsers;
  const d = new Date();
  let day = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear().toString().substr(2);
  if (month <= 9) month = "0" + month;
  if (day <= 9) day = "0" + day;
  let uniqueId = Math.floor(Math.random() * 1000);
  if (uniqueId <= 9) uniqueId = "00" + uniqueId;
  else if (uniqueId <= 99) uniqueId = "0" + uniqueId;
  const totalDistance = Math.floor(location.distance) * config.price_per_km;
  const totalAll = totalDistance + totalPrice;
  const orderCode = "KDS" + day + month + year + uniqueId;
  let totalDiscount = 0;

  cartItems?.forEach((item) => {
    return (totalDiscount +=
      (item.product.price_after_discount
        ? item.product.price - item.product.price_after_discount
        : 0) * item.qty);
  });

  const customer_location = [location.lat, location.lng];

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join("/");
  }

  const date = formatDate(d);

  const qtyChangeHandler = (id, qty) => {
    dispatch(adjustQty(id, qty));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleLocation = (location) => {
    setLocation(location);
  };

  const showDeliveryLocation = () => {
    if (totalPrice === 0) {
      Swal.fire({
        title: "Oops!",
        text: "Your cart is empty!",
        icon: "info",
        confirmButtonColor: "#3085d6",
      });
    } else {
      document.querySelector(".delivery-location").style.display = "block";
    }
  };

  const payHandler = () => {
    if (location.distance > config.area_radius) {
      Swal.fire({
        title: "Oops!",
        text: "Lokasi anda diluar jangkauan kami!",
        icon: "info",
        confirmButtonColor: "#3085d6",
      });
    } else if (location.distance === 0) {
      Swal.fire({
        title: "Oops!",
        text: "Lokasi anda tidak ditemukan!",
        icon: "info",
        confirmButtonColor: "#3085d6",
      });
    } else {
      document.querySelector(".pembayaran").style.display = "block";
      document.querySelector(".delivery-location").style.display = "none";
    }
  };

  const sendProof = (e) => {
    e.preventDefault();
    setLoading(true);

    // const data = new FormData();
    // data.append("image_proof", proofImage);
    // data.append("order_code", orderCode);
    // data.append("total_price", totalAll);
    // data.append("user_id", user.id);
    // data.append(
    //   "customer_location",
    //   JSON.stringify([location.lat, location.lng])
    // );
    // data.append("shipping_cost", totalDistance);
    // data.append(
    //   "order_items",
    //   JSON.stringify(
    //     cartItems.map((item) => {
    //       return {
    //         item_id: item.product.id,
    //         quantity: item.qty,
    //         price: item.product.price,
    //         name: item.product.name,
    //         order_code: orderCode,
    //       };
    //     })
    //   )
    // );

    // axios
    //   .post("/order", data, setting)
    //   .then((res) => {
    //     setLoading(false);
    //     swal({
    //       title: "Bukti Terkirim",
    //       text: "Mohon tunggu konfirmasi dari admin",
    //       icon: "success",
    //       buttons: "Ya",
    //     }).then(() => {
    //       localStorage.setItem("cart", []);
    //       window.location.href = "/pesanan/menunggu";
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setError(Object.values(err.response.data.errors)[0][0]);
    //     setLoading(false);
    //   });

    const uploadTask = uploadBytesResumable(
      sRef(storage, `orderProof/${orderCode}`),
      proofImage
    );

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          const data = {
            status: "menunggu",
            total_price: totalAll,
            user_id: user.id,
            order_code: orderCode,
            created_at: date,
            order_items: cartItems.map((item) => {
              return {
                order_code: orderCode,
                name: item.product.name,
                item_id: item.product.id,
                quantity: item.qty,
                price: item.product.price,
              };
            }),
            customer_location: customer_location,
            image_proof_url: url,
            ongkir: totalDistance,
            user: user,
            discount: totalDiscount,
          };
          setLoading(false);

          Swal.fire({
            title: "Bukti Terkirim",
            text: "Mohon tunggu konfirmasi dari admin",
            icon: "success",
            confirmButtonColor: "#3085d6",
          }).then(() => {
            set(ref(db, `orders/${orderCode}`), data).then(() => {
              localStorage.setItem("cart", []);
              window.location.href = "/pesanan/menunggu";
            });
          });
        });
      }
    );
  };

  const previewImage = (val) => {
    const image = document.querySelector("#image_proof_url");
    const imgPreview = document.querySelector(".input-image");

    const oFReader = new FileReader();
    oFReader.readAsDataURL(image.files[0]);

    oFReader.onload = function (oFREvent) {
      imgPreview.src = oFREvent.target.result;
    };

    setProofImage(val.target.files[0]);
  };

  const showPayment = () => {
    const show = document.querySelector(".cara-pembayaran").style;
    const baseContainer = document.querySelector(".container-pembayaran").style;
    if (show.visibility === "hidden" || show.visibility === "") {
      if (isMobile) {
        show.visibility = "visible";
        show.display = "block";
        baseContainer.display = "none";
        baseContainer.visibility = "hidden";
      } else {
        show.visibility = "visible";
        show.transform = "translateX(50%)";
        show.opacity = 1;
        show.display = "block";
        baseContainer.transform = "translateX(-50%)";
      }
    } else {
      if (isMobile) {
        show.display = "none";
        show.visibility = "hidden";
        baseContainer.display = "block";
        baseContainer.visibility = "visible";
      } else {
        show.visibility = "hidden";
        show.opacity = 0;
        show.transform = "translateX(0%)";
        baseContainer.transform = "translateX(0%)";
      }
    }
  };

  useEffect(() => {
    let price = 0;

    cartItems.forEach((item) => {
      price +=
        (item.product.price_after_discount
          ? item.product.price_after_discount
          : item.product.price) * item.qty;
    });

    setTotalPrice(price);
  }, [cartItems]);

  return (
    <Styles>
      <Container>
        <div className="d-flex">
          <ArrowLeft
            className="img-fluid arrow-back"
            onClick={() => history.goBack()}
          />
          <h2>Keranjang Pesanan</h2>
        </div>
        <hr />

        {cartItems.length === 0 ? (
          <div className="text-center my-5">
            <img src="/assets/no-data.svg" alt="" width={400} />
          </div>
        ) : (
          cartItems.map((item) => (
            <CartCard
              key={item.product.id}
              product={item.product}
              qty={item.qty}
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeHandler}
            />
          ))
        )}
        <hr />
        <div className="bottom d-flex">
          <div className="total">
            <p>Total Pesanan : {formatCurrency(totalPrice)}</p>
          </div>
          <Button variant="warning" onClick={showDeliveryLocation}>
            Checkout
          </Button>
        </div>
      </Container>

      <div className="delivery-location">
        <div className="container-location">
          <X
            className="float-end"
            size={35}
            onClick={() => {
              document.querySelector(".delivery-location").style.display =
                "none";
            }}
            style={{ cursor: "pointer" }}
          />
          <h3>Pilih Lokasi Pengiriman</h3>
          <UserLocation
            setLocation={handleLocation}
            location={props.config.coordinate_location}
          />
          <Button
            variant="warning"
            className="btn-location ms-auto d-block"
            onClick={payHandler}
          >
            Kirim
          </Button>
        </div>
      </div>

      <div className="pembayaran">
        <div className="pembayaran-center d-flex">
          <div className="container-pembayaran">
            <X
              className="float-end"
              size={35}
              onClick={() => {
                document.querySelector(".pembayaran").style.display = "none";
              }}
              style={{ cursor: "pointer" }}
            />
            <h2>Pembayaran</h2>
            <hr />
            <div className="info">
              <div className="d-flex">
                <p>Ongkos Kirim :</p>
                <p className="mx-2">{formatCurrency(totalDistance)}</p>
              </div>
              <div className="d-flex">
                <p>Total :</p>
                <p className="mx-2">{formatCurrency(totalAll)}</p>
              </div>
              <p className="cara-pembayaran-txt">
                Kirim pembayaran ke &nbsp;
                <span onClick={showPayment}>lihat disini!</span>
              </p>
              <p>Mohon kirim bukti pembayaran dibawah sini!</p>
            </div>
            <form onSubmit={sendProof}>
              <label htmlFor="image_proof_url">
                <Image
                  src={"/assets/plus-dotted.svg"}
                  className="input-image"
                />
              </label>
              <input
                type="file"
                className="form-control"
                id="image_proof_url"
                name="image_proof_url"
                onChange={(val) => previewImage(val)}
                accept="image/png, image/jpeg, image/jpg"
                required
                onInvalid={(e) =>
                  e.target.setCustomValidity("Mohon upload bukti pembayaran")
                }
                onInput={(e) => e.target.setCustomValidity("")}
              />
              <hr />
              <Button
                variant="warning"
                className="btn-payment ms-auto d-block"
                type="submit"
              >
                Kirim
              </Button>
            </form>
          </div>
          <div className="cara-pembayaran">
            <div className="card-contain">
              <h3>
                <span>
                  {isMobile && (
                    <ArrowLeft onClick={showPayment} className="img-fluid" />
                  )}
                </span>
                Metode Pembayaran
              </h3>
              <hr />
              <p style={{ marginBottom: "10px" }}>
                Transfer ke salah satu rekening dibawah ini :
              </p>
              <div className="list">
                <div className="data-list">
                  <div className="img-logo">
                    <img src="/assets/pembayaran/bca.png" alt="" />
                  </div>
                  <p>8735089875</p>
                </div>
                <div className="data-list">
                  <div className="img-logo">
                    <img src="/assets/pembayaran/bni.png" alt="" />
                  </div>
                  <p>02234566574</p>
                </div>
                <div className="data-list">
                  <div className="img-logo">
                    <img src="/assets/pembayaran/bri.png" alt="" />
                  </div>
                  <p>051601044996509</p>
                </div>
                <div className="data-list">
                  <div className="img-logo">
                    <img src="/assets/pembayaran/mandiri.png" alt="" />
                  </div>
                  <p>9000877724254</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {loading === true && (
        <div className="loading">
          <Spinner animation="border" variant="warning" />
        </div>
      )}
    </Styles>
  );
}

export default Cart;
