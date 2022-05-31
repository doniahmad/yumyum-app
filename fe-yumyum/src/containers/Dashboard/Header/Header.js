import React from "react";
import { Image } from "react-bootstrap";
import { Styles } from "./HeaderStyles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function Header(props) {
  const users = useSelector((state) => state.getUsers);
  const { user } = users;
  return (
    <Styles>
      <div className="navbar navbar-dark sticky-top bg-dark p-0 shadow">
        <div className="navbar-brand col-md-3 col-lg-2 me-0 px-3">
          {props.config.name}
        </div>
        <button
          className="navbar-toggler position-absolute collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-nav text-white ms-auto">
          <Link to={`/dashboard/edit/admin/${user.id}`}>
            <div className="nav-item d-flex profile">
              <p>{user.name}</p>
              <Image src={user.image} />
            </div>
          </Link>
        </div>
      </div>
    </Styles>
  );
}

export default Header;
