import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  BagFill,
  Cart4,
  CurrencyDollar,
  PeopleFill,
} from "react-bootstrap-icons";
import { Styles } from "./Style";
import toRupiah from "@develoka/angka-rupiah-js";
import axios from "axios";
import { SkeletonDataDashboard } from "../SkeletonLoading/SkeletonLoading";

function DashboardData() {
  const [data, setData] = useState({});
  // const [timer, setTimer] = useState(null);
  // const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        axios
          .all([
            await axios.get("/data/user"),
            await axios.get("/product"),
            await axios.get("/data/sold-product"),
          ])
          .then(
            await axios.spread((user, product, soldProduct) => {
              setData({
                user: user.data.length,
                product: product.data.total,
                soldProduct: soldProduct.data.sold,
                omset: soldProduct.data.omset,
              });
              setLoading(false);
            })
          );
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <Styles>
      {loading ? (
        <SkeletonDataDashboard />
      ) : (
        <Row className="text-center">
          <Col md={3} sm={6} xs={6}>
            <div className="data-users data">
              <h4 className="title-data">Users</h4>
              <div className="d-flex">
                <PeopleFill
                  color="white"
                  size={50}
                  className="icon-data img-fluid"
                />
                <p>{data.user}</p>
              </div>
            </div>
          </Col>
          <Col md={3} sm={6} xs={6}>
            <div className="data-product data">
              <h4 className="title-data">Menu</h4>
              <div className="d-flex">
                <BagFill
                  color="white"
                  size={45}
                  className="icon-data img-fluid"
                />
                <p>{data.product}</p>
              </div>
            </div>
          </Col>
          <Col md={3} sm={6} xs={6}>
            <div className="data-sold data">
              <h4 className="title-data">Sold</h4>
              <div className="d-flex">
                <Cart4
                  color="white"
                  size={45}
                  className="icon-data img-fluid"
                />
                <p>{data.soldProduct}</p>
              </div>
            </div>
          </Col>
          <Col md={3} sm={6} xs={6}>
            <div className="data-omset data">
              <h4 className="title-data">Omset</h4>
              <div className="d-flex">
                <CurrencyDollar
                  color="white"
                  size={50}
                  className="icon-data img-fluid"
                />
                <p>
                  {toRupiah(data.omset, {
                    useUnit: true,
                    floatingPoint: 0,
                    spaceBeforeUnit: true,
                    formal: false,
                  })}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      )}
    </Styles>
  );
}

export default DashboardData;
