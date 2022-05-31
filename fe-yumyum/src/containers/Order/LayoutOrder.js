import React from "react";
import { Col, Row } from "react-bootstrap";
import CardOrder from "../../components/OrdersComp/CardOrder/CardOrder";
import { SkeletonOrder } from "../../components/SkeletonLoading/SkeletonLoading";

function LayoutOrder({ loading, error, orderData }) {
  return (
    <div>
      <Row style={{ minHeight: "400px" }} className="container-fluid">
        {loading ? (
          <SkeletonOrder />
        ) : orderData.length === 0 ? (
          <table>
            <tbody>
              <tr
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  padding: "3rem 0px",
                }}
                className="img-no-data"
              >
                <td>
                  <img
                    src="/assets/no-data.svg"
                    alt=""
                    className="img-fluid"
                    width={400}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          orderData.map((item, index) => (
            <Col className="col-pesanan" md={3} xs={6} key={index + 1}>
              <CardOrder item={item} key={index} />
            </Col>
          ))
        )}
      </Row>
    </div>
  );
}

export default LayoutOrder;
