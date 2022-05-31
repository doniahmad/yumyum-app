import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { Styles } from "./OrderStyle";
import { useDispatch, useSelector } from "react-redux";
import { getOrders as listOrders } from "../../redux/actions/orderActions";
import { NavLink, Route, Switch } from "react-router-dom";
import OrderLayout from "./LayoutOrder";

function Pesanan() {
  document.title = "Pesanan | YumYum";
  const dispatch = useDispatch();
  const getOrders = useSelector((state) => state.getOrders);
  const { loading, order } = getOrders;

  useEffect(() => {
    dispatch(listOrders());
  }, [dispatch]);

  const OrderValues = Object.values(order);

  const Menunggu = () => {
    return (
      <OrderLayout
        loading={loading}
        orderData={OrderValues.filter((item) => {
          return item.status === "menunggu";
        })}
      />
    );
  };
  const Diproses = () => {
    return (
      <OrderLayout
        loading={loading}
        orderData={OrderValues.filter((item) => item.status === "diproses")}
      />
    );
  };
  const Dikirim = () => {
    return (
      <OrderLayout
        loading={loading}
        orderData={OrderValues.filter((item) => item.status === "dikirim")}
      />
    );
  };
  const Terkirim = () => {
    return (
      <OrderLayout
        loading={loading}
        orderData={OrderValues.filter((item) => item.status === "terkirim")}
      />
    );
  };
  const Dibatalkan = () => {
    return (
      <OrderLayout
        loading={loading}
        orderData={OrderValues.filter((item) => item.status === "dibatalkan")}
      />
    );
  };
  return (
    <Styles>
      <Container>
        <h2>History Pesanan</h2>
        <div className="nav-btn">
          <table>
            <tbody>
              <tr>
                <td>
                  <NavLink activeClassName="active" to="menunggu">
                    <Button variant="outline-warning">Menunggu</Button>
                  </NavLink>
                </td>
                <td>
                  <NavLink activeClassName="active" to="diproses">
                    <Button variant="outline-warning">Dirposes</Button>
                  </NavLink>
                </td>
                <td>
                  <NavLink activeClassName="active" to="dikirim">
                    <Button variant="outline-warning">Dikirim</Button>
                  </NavLink>
                </td>
                <td>
                  <NavLink activeClassName="active" to="terkirim">
                    <Button variant="outline-warning">Terkirim</Button>
                  </NavLink>
                </td>
                <td>
                  <NavLink activeClassName="active" to="dibatalkan">
                    <Button variant="outline-warning">Dibatalkan</Button>
                  </NavLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <Switch>
          <Route path="/pesanan/menunggu" exact>
            <Menunggu />
          </Route>
          <Route path="/pesanan/diproses" exact>
            <Diproses />
          </Route>
          <Route path="/pesanan/dikirim" exact>
            <Dikirim />
          </Route>
          <Route path="/pesanan/terkirim" exact>
            <Terkirim />
          </Route>
          <Route path="/pesanan/dibatalkan" exact>
            <Dibatalkan />
          </Route>
        </Switch>
        <hr />
      </Container>
    </Styles>
  );
}

export default Pesanan;
