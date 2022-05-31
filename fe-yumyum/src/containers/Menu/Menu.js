import React from "react";
import { Route, Switch } from "react-router-dom";
import Styles from "./MenuStyles";
import { Container } from "react-bootstrap";
import LayoutMenu from "./LayoutMenu";
import NotFound from "../NotFound/NotFound";

function Menu(props) {
  document.title = "Menu | YumYum";
  const Makanan = () => {
    const category = "makanan";
    return <LayoutMenu category={category} />;
  };
  const Minuman = () => {
    const category = "minuman";
    return <LayoutMenu category={category} />;
  };
  const Paket = () => {
    const category = "paket";
    return <LayoutMenu category={category} />;
  };

  return (
    <Styles>
      <Container>
        <Switch>
          <Route path="/menu/makanan" component={Makanan} exact />
          <Route path="/menu/minuman" component={Minuman} exact />
          <Route path="/menu/paket" component={Paket} exact />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Styles>
  );
}

export default Menu;
