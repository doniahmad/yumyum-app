import React, { useEffect } from "react";
import { CardList } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import { Styles } from "./Styles";

function DropdownSidebar() {
  function item() {
    document.getElementById("product").classList.toggle("show");
  }
  useEffect(() => {
    document.getElementById("product").addEventListener("click", function (e) {
      e.stopPropagation();
    });
    window.onclick = function (event) {
      if (!event.target.matches(".btn")) {
        const dropdowns = document.getElementsByClassName("product");
        for (let i = 0; i < dropdowns.length; i++) {
          const openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }
        }
      }
    };
  });

  return (
    <Styles>
      <li className="nav-btn">
        <div className="dropdown">
          <button className="btn dropdown-toggle" type="button" onClick={item}>
            <CardList />
            Product
          </button>
        </div>
      </li>
      <div id="product" className="product">
        <li className="nav-item-product ">
          <NavLink
            className="nav-link"
            activeClassName="active"
            to="/dashboard/product"
          >
            Makanan & Minuman
          </NavLink>
        </li>
        <li className="nav-item-product">
          <NavLink
            className="nav-link"
            activeClassName="active"
            to="/dashboard/paket"
          >
            Paket
          </NavLink>
        </li>
      </div>
    </Styles>
  );
}

export default DropdownSidebar;
