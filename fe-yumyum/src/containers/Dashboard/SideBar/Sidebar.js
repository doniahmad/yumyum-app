import React from "react";
import {
  BoxArrowLeft,
  CardList,
  GearFill,
  Globe,
  HouseFill,
  PersonLinesFill,
} from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function Sidebar() {
  const openSite = () => {
    window.open("https://yumyumresto.herokuapp.com/");
  };
  const setting = localStorage.getItem("setting");

  const logOut = () => {
    Swal.fire({
      title: "Yakin ingin logout ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      reverseButtons: true,
      confirmButtonText: "Yes",
      iconColor: "#d33",
      focusConfirm: false,
    }).then((result) => {
      if (result.value) {
        axios.post("/logout").then((res) => {
          localStorage.clear();
          localStorage.setItem("setting", setting);
          window.location.reload();
        });
      } else {
      }
    });
  };

  return (
    <div>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                aria-current="page"
                to="/dashboard"
                exact
              >
                <HouseFill />
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                aria-current="page"
                to="/dashboard/product"
                exact
              >
                <CardList />
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active "
                to="/dashboard/admin"
              >
                <PersonLinesFill />
                Admin
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active "
                to="/dashboard/setting"
              >
                <GearFill />
                Setting
              </NavLink>
            </li>
            <hr />
            <li className="nav-item">
              <div className="nav-link" onClick={openSite}>
                <Globe />
                View Site
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={logOut}>
                <BoxArrowLeft />
                Logout
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
