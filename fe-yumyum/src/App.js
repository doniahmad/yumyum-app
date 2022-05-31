import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "animate.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Lokasi from "./containers/Lokasi/Lokasi";
import Item from "./containers/Item/Item";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import Cart from "./containers/Cart/Cart";
import Dashboard from "./containers/Dashboard/Dashboard";
import Menu from "./containers/Menu/Menu";
import Profile from "./containers/Profile/Profile";
import Order from "./containers/Order/Order";
import axios from "axios";
import { useEffect } from "react";
import { getUsers as dataUser } from "./redux/actions/userAction";
import { useDispatch } from "react-redux";
import Nota from "./containers/Nota/Nota";
import NotFound from "./containers/NotFound/NotFound";
import SendEmail from "./containers/PasswordReset/SendEmail";
import ChangePassword from "./containers/PasswordReset/ChangePassword";
import TokenSent from "./containers/PasswordReset/TokenSent";

function App() {
  const NavbarWithRouter = withRouter(Navbar);
  const dispatch = useDispatch();
  const [setting, setSetting] = useState({});
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  try {
    // Select the <head> tag under <body>
    const headTag = document.querySelector("head");
    // Create the <link/> tag.
    const icon = document.createElement("link");
    // Create the rel="" attribute
    const attributeRel = document.createAttribute("rel");
    // Assign the value "icon" to the rel attribute so that attributeRel becomes rel="icon"
    attributeRel.value = "icon";
    // Create the href="" attribute
    const attributeHref = document.createAttribute("href");
    // Assign your application icon path to the href attribute so that attributeHref becomes href="path/to/my/icon"
    attributeHref.value = setting.logo;
    // Set the rel attibute to <link> so that the icon JS object becomes <link rel="icon"/>
    icon.setAttributeNode(attributeRel);
    // Set the href attibute to <link> so that the icon JS object becomes <link rel="icon" href="path/to/my/icon"/>
    icon.setAttributeNode(attributeHref);
    // Insert the <link [...] /> tag into the <head>
    headTag.appendChild(icon);
  } catch (e) {
    //Browser tabs do not exist on android and iOS, so let's just do nothing here.
  }

  const getUser = (user) => {
    setUser(user);
  };

  useEffect(() => {
    const getUser = () => {
      axios
        .get("/user")
        .then((res) => {
          dispatch(dataUser(res.data));
          setUser(res.data);
          localStorage.setItem("role", res.data.role);
          localStorage.setItem("id", res.data.id);
        })
        .catch((err) => {});
    };

    // const RouteWithNavbar = ({
    //   exact,
    //   path,
    //   component: Component,
    //   ...rest
    // }) => {
    //   return (
    //     <Route
    //       exact={exact}
    //       path={path}
    //       {...rest}
    //       render={(routeProps) => {
    //         return (
    //           <>
    //             <NavbarWithRouter {...routeProps} />
    //             <Component {...routeProps} />
    //           </>
    //         );
    //       }}
    //     />
    //   );
    // };

    const getSetting = async () => {
      await axios
        .get("/setting")
        .then((res) => {
          setSetting(res.data);
          localStorage.setItem("setting", JSON.stringify(res.data));
        })
        .then(() => {
          setLoading(false);
        });
    };
    getSetting();
    getUser();

    return () => {
      setLoading(true);
      setSetting({});
      setUser({});
    };
  }, [dispatch]);

  return (
    <div className="App">
      {loading ? (
        <div className="loading">
          <div className="lds-ellipsis"></div>
        </div>
      ) : (
        <Router>
          <Switch>
            <Route
              path="/login"
              component={() => <Login setUser={getUser} />}
              exact
            />
            <Route
              path="/register"
              component={() => <Register setUser={getUser} />}
              exact
            />
            <Route path="/nota/:code" component={Nota} exact />
            <Route
              path="/password/reset/:token"
              component={ChangePassword}
              exact
            />
            <Route path="/password/token_sent" component={TokenSent} exact />
            <Route path="/password" component={SendEmail} exact />
            <Route path="/dashboard*" component={Dashboard} exact />
            <Route path="/*" exact>
              <NavbarWithRouter config={setting} user={user} />
              <Switch>
                <Route
                  exact
                  path="/profile"
                  component={() => <Profile user={user} />}
                />
                <Route
                  path="/lokasi"
                  component={() => <Lokasi config={setting} />}
                  exact
                />
                <Route
                  exact
                  path="/cart"
                  component={() => <Cart config={setting} />}
                />
                <Route exact path="/item/:category/:slug" component={Item} />
                <Route
                  exact
                  path="/menu*"
                  component={() => <Menu user={user} />}
                />
                <Route exact path="/pesanan*" component={Order} />
                <Route exact path="/" component={() => <Home user={user} />} />
                <Route component={NotFound} />
              </Switch>
              <Footer config={setting} />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
