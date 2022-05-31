import React, { useCallback, useEffect, useState } from "react";
import {
  Button,
  Container,
  Dropdown,
  Image,
  Nav,
  Navbar as NavbarContainer,
  Spinner,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Styles from "./NavbarStyle";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Navbar(props) {
  const [navbarScroll, setNavbarScroll] = useState(true);
  const [cartActive, setCartActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const users = useSelector((state) => state.getUsers);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const { user } = users;
  const history = useHistory();
  const setting = localStorage.getItem("setting");
  let location = history.location.pathname;
  let header;

  const handleScroll = useCallback(() => {
    if (location === "/") {
      if (window.scrollY > 600) {
        setNavbarScroll(false);
      } else {
        setNavbarScroll(true);
      }
    } else {
      setNavbarScroll(false);
    }
  }, [location]);
  useEffect(() => {
    if (location === "/") {
      window.addEventListener("scroll", handleScroll);
      setNavbarScroll(true);
    } else {
      setNavbarScroll(false);
    }
    return () => {
      setNavbarScroll(false);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location, handleScroll]);

  useEffect(() => {
    cartItems.length > 0 ? setCartActive(true) : setCartActive(false);
  }, [cartItems]);

  const handleNavbarToggler = () => {
    if (user.length !== 0) {
      document.querySelector(".cart").classList.toggle("hide");
      document.querySelector(".dropdown-profile").classList.toggle("hide");
    }
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Yakin ingin logout ?",
      icon: "warning",
      showCancelButton: true,
      iconColor: "#d33",
      reverseButtons: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes",
      focusConfirm: false,
    }).then((result) => {
      if (result.value) {
        setLoading(true);
        axios.post("/logout").then((res) => {
          setLoading(false);
          localStorage.clear();
          localStorage.setItem("setting", setting);
          window.location.href = "/";
        });
      }
    });
  };
  if (localStorage.getItem("token") === null) {
    header = (
      <>
        <Link to="/login">
          <Button variant="warning">Login</Button>
        </Link>
      </>
    );
  } else {
    header = (
      <>
        <div className="cart">
          <Link to="/cart">
            <Image
              src={`/assets/${cartActive ? "cart-active" : "cart"}.svg`}
              className="cart-icon img-fluid"
            />
          </Link>
        </div>

        <Dropdown className="dropdown-profile">
          <Dropdown.Toggle className="dropdown-profile-btn" id="btn-profile">
            <Image src={user.image} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as={Link} to={"/profile"}>
              Profile
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item as={Link} to={"/pesanan/menunggu"}>
              Pesanan
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
    );
  }

  return (
    <Styles>
      <NavbarContainer
        expand="lg"
        variant="dark"
        fixed="top"
        className={navbarScroll ? "navbar-clear" : "navbar-default"}
      >
        <Container>
          <NavbarContainer.Brand as={NavLink} to={"/"}>
            <img
              src={props.config.logo}
              height={40}
              width={40}
              className="d-inline-block align-top img-fluid"
              alt=""
            />
          </NavbarContainer.Brand>

          <NavbarContainer.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleNavbarToggler}
          />
          <NavbarContainer.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto py-2">
              <Nav.Link as={NavLink} to="/" activeClassName="active" exact>
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/menu"
                activeClassName="active"
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/menu/makanan");
                }}
              >
                Menu
              </Nav.Link>
              <Nav.Link as={NavLink} to="/lokasi" activeClassName="active">
                Lokasi
              </Nav.Link>
            </Nav>
          </NavbarContainer.Collapse>
          {header}
        </Container>
      </NavbarContainer>
      {loading === true && (
        <div className="loading">
          <Spinner animation="border" variant="warning" />
        </div>
      )}
    </Styles>
  );
}

export default Navbar;
