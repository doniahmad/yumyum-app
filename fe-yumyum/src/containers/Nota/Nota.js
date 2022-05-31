import React, { useEffect } from "react";
import { formatCurrency } from "../../util/NumberFormat";
import { Styles } from "./NotaStyle";

const Nota = () => {
  const detail = JSON.parse(localStorage.getItem("print_data"));
  const config = JSON.parse(localStorage.getItem("setting"));

  useEffect(() => {
    window.print();
  }, []);
  return (
    <Styles className="container">
      <div className="d-block text-center">
        <h1>Yum Yum Resto</h1>
        <div>
          Jl. Kyai Telingsing No.3, Purwosari, Janggalan, Kec. Kota Kudus,
          Kabupaten Kudus, Jawa Tengah 59316
        </div>
        <div className="d-flex justify-content-center">
          <div>{config.phone}</div>&nbsp;-&nbsp;
          <div> {config.email}</div>&nbsp;-&nbsp;
          <div>{process.env.PUBLIC_URL}</div>
        </div>
      </div>
      <hr />
      <div>Nama Pemesan : {detail.user.name} </div>
      <div>Kode Pesanan : {detail.order_code}</div>
      <div>Tanggal : {detail.created_at}</div>
      <table className="table list-item mt-3">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Menu</th>
            <th>Jumlah</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          {detail.order_items.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{formatCurrency(item.price)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3">Ongkir</td>
            <td>{formatCurrency(detail.ongkir)}</td>
          </tr>
          {detail.discount && (
            <tr>
              <td colSpan="3">Diskon</td>
              <td>{formatCurrency(detail.discount)}</td>
            </tr>
          )}
          <tr>
            <td colSpan="3">Total</td>
            <td>{formatCurrency(detail.total_price)}</td>
          </tr>
        </tbody>
      </table>
      <hr />
    </Styles>
  );
};

export default Nota;
