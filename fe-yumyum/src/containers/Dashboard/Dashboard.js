import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AddAdmin, AddBestOffer, AddItem } from "./Add/Add";
import Admin from "./Content/Admin";
import DashboardComp from "./Content/Dashboard";
import Setting from "./Content/Setting";
import { Styles } from "./DashboardStyles";
import Header from "./Header/Header";
import Sidebar from "./SideBar/Sidebar";
import { EditAdmin, EditItem } from "./Edit/Edit";
import Login from "./Login/Login";
import axios from "axios";
import DetailOrder from "../../components/OrdersComp/DetailOrder/DetailOrder";
import LayoutProduct from "./Content/LayoutProduct";

function Dashboard() {
  document.title = "Dashboard | YumYum";
  const admin = JSON.parse(localStorage.getItem("admin"));
  const [setting, setSetting] = useState({});

  const Product = () => {
    return (
      <LayoutProduct url={"makanan-minuman"} title={"Makanan Dan Minuman"} />
    );
  };

  const Paket = () => {
    return <LayoutProduct url={"pakets"} title={"Paket"} />;
  };

  useEffect(() => {
    axios.get("/setting").then((res) => {
      setSetting(res.data);
    });
  }, []);

  if (admin === null) {
    return (
      <>
        <Route path="/dashboard/login" exact>
          <Login />
        </Route>
        <Redirect to={"/dashboard/login"} />
      </>
    );
  }

  return (
    <Styles>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-5">
            <Switch>
              <Route path="/dashboard" exact>
                <DashboardComp />
              </Route>
              <Route path="/dashboard/admin" exact>
                <Admin />
              </Route>
              <Route path="/dashboard/product" exact>
                <Product />
              </Route>
              <Route path="/dashboard/paket" exact>
                <Paket />
              </Route>
              <Route path="/dashboard/setting" exact>
                <Setting />
              </Route>
              <Route
                path="/dashboard/edit/admin/:id"
                component={EditAdmin}
                exact
              />
              <Route
                path="/dashboard/edit/:category/:slug"
                component={EditItem}
                exact
              />
              <Route path="/dashboard/add/admin" component={AddAdmin} exact />
              <Route
                path="/dashboard/add/best-offer"
                component={AddBestOffer}
                exact
              />
              <Route path="/dashboard/add" component={AddItem} exact />
              <Route
                path="/dashboard/detail/:code"
                component={DetailOrder}
                exact
              />
            </Switch>
          </main>
        </div>
      </div>
      <Header config={setting} />
    </Styles>
  );
}

export default Dashboard;
