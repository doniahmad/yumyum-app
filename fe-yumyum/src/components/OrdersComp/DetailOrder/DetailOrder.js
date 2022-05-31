import React, { useState } from "react";
import { formatCurrency } from "../../../util/NumberFormat";
import { Styles } from "./Styles";
import { ArrowLeft, X } from "react-bootstrap-icons";
import { Stack } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";

function DetailOrder(props) {
  const titikDua = <td className="titik-dua px-4">:</td>;
  const config = JSON.parse(localStorage.getItem("setting"));
  const restaurantLocation = JSON.parse(config.coordinate_location);
  const item = props.location.state.detail;
  const [bigImage, setBigImage] = useState(false);
  const history = useHistory();

  const location = item.customer_location;

  const onPrintClick = () => {
    localStorage.setItem("print_data", JSON.stringify(item));
  };

  const toggleSideTable = () => {
    const sidetable = document.querySelector(".sidetable").style;
    if (
      sidetable.transform === "translateY(-100%)" ||
      sidetable.transform === ""
    ) {
      sidetable.transform = "translateY(0%)";
    } else {
      sidetable.transform = "translateY(-100%)";
    }
  };

  return (
    <Styles>
      <div className="detail-order">
        <div className="detail-container">
          <Stack direction="horizontal" className="title">
            <ArrowLeft size={25} onClick={() => history.goBack()} />
            <h2>Detail Pesanan</h2>
            <div className="more-detail" onClick={toggleSideTable}>
              More Detail
              <img src="/assets/arrow-down.png" alt="" />
            </div>
          </Stack>
          <hr />
          <table className="d-flex table-order ">
            <tbody>
              <tr>
                <td>Pesanan</td>
                {titikDua}
                <td className="pesanan">
                  {item.order_items.map((item, index) => (
                    <div key={index} className="d-flex item-pesanan">
                      <p className="item-name">
                        {index + 1}. {item.name}
                      </p>
                      <p className="ms-auto">
                        {formatCurrency(item.price)} x {item.quantity}
                      </p>
                    </div>
                  ))}

                  <div className="d-flex item-pesanan mt-3">
                    <p className="item-name">Ongkir</p>
                    <p className="ms-auto">{formatCurrency(item.ongkir)}</p>
                  </div>
                  <div className="d-flex item-pesanan">
                    <p className="item-name">Diskon</p>
                    <p className="ms-auto">- {formatCurrency(item.discount)}</p>
                  </div>
                  <hr />
                  <div className="d-flex item-pesanan">
                    <p>Total</p>
                    <p className="ms-auto">
                      {formatCurrency(item.total_price)}
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>

            <tbody className="sidetable">
              <>
                <tr>
                  <td>
                    <X
                      size={40}
                      className="close-sidetable"
                      onClick={toggleSideTable}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Nama Pemesan</td>
                  {titikDua}
                  <td>{item.user.name}</td>
                </tr>
                <tr>
                  <td>Kode Pesanan</td>
                  {titikDua}
                  <td>{item.order_code}</td>
                </tr>
                <tr>
                  <td>Tanggal Pemesanan</td>
                  {titikDua}
                  <td>{item.created_at}</td>
                </tr>
                <tr>
                  <td>Alamat Pemesan</td>
                  {titikDua}
                  <td>{item.user.address}</td>
                </tr>
                <tr>
                  <td>No. Telp</td>
                  {titikDua}
                  <td>{item.user.contact}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  {titikDua}
                  <td>{item.user.email}</td>
                </tr>
                <tr>
                  <td>Bukti Pembayaran</td>
                  {titikDua}
                  <td>
                    <img
                      src={item.image_proof_url}
                      alt=""
                      className="img-proof"
                      onClick={() => setBigImage(true)}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <div className="btn-container d-flex">
                      <button className="btn-location">
                        <a
                          href={`https://www.google.com/maps/dir/'${restaurantLocation.lat},${restaurantLocation.long}'/'${location[0]},${location[1]}'`}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Lokasi Pengiriman
                        </a>
                      </button>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={"/nota/" + item.order_code}
                        target="_blank"
                      >
                        <button className="btn-print" onClick={onPrintClick}>
                          Print Nota
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              </>
            </tbody>
          </table>
          <hr />
        </div>
        {bigImage && (
          <div className="big-img">
            <a
              href={item.image_proof_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={item.image_proof_url} alt="" />
            </a>
            <X size={40} onClick={() => setBigImage(false)} />
          </div>
        )}
      </div>
    </Styles>
  );
}

export default DetailOrder;
