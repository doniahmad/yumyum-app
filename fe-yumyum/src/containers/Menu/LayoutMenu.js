import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Search } from "react-bootstrap-icons";
import CardComp from "../../components/MenuCard/Card";
import { Pagination } from "react-laravel-paginex";
import axios from "axios";
import { SkeletonCardMenu } from "../../components/SkeletonLoading/SkeletonLoading";
import $ from "jquery";

function LayoutMenu(props) {
  const category = props.category;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("terpopuler");
  let url = `/product?category=${category}&sort=${filter}&search=${query}`;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      await axios.get(url).then((res) => {
        setProducts(res.data);
      });
      setLoading(false);
    };

    $(".dropdown-el").click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(this).toggleClass("expanded");
      $("#" + $(e.target).attr("for")).prop("checked", true);
    });
    $(document).click(function () {
      $(".dropdown-el").removeClass("expanded");
    });

    getProducts();
    return () => {
      setProducts([]);
    };
  }, [url]);

  const option = {
    buttonIcons: true,
    prevButtonIcon: "bi bi-arrow-left",
    nextButtonIcon: "bi bi-arrow-right",
  };

  const getData = async (data) => {
    setLoading(true);

    await axios.get(url + "&page=" + data.page).then((response) => {
      setProducts(response.data);
    });

    setLoading(false);
  };

  const toTitle = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  const onFilterChange = (e) => {
    setFilter(e.target.id);
  };

  return (
    <div>
      <Container>
        <div className="nav-btn">
          <NavLink activeClassName="active" to="makanan" exact>
            <Button variant="outline-warning">Makanan</Button>
          </NavLink>
          <NavLink activeClassName="active" to="minuman" exact>
            <Button variant="outline-warning">Minuman</Button>
          </NavLink>
          <NavLink activeClassName="active" to="paket" exact>
            <Button variant="outline-warning">Paket</Button>
          </NavLink>
        </div>
        <div className="header">
          <h1 className="title">Makanan {toTitle(filter)}</h1>
          <div className="select" tabIndex="1" onChange={onFilterChange}>
            <input
              className="selectopt"
              name="test"
              type="radio"
              id="terpopuler"
              defaultChecked="checked"
            />
            <label htmlFor="terpopuler" className="option">
              Paling Populer
            </label>
            <input
              className="selectopt"
              name="test"
              type="radio"
              id="termurah"
            />
            <label htmlFor="termurah" className="option">
              Paling Murah
            </label>
            <input
              className="selectopt"
              name="test"
              type="radio"
              id="termahal"
            />
            <label htmlFor="termahal" className="option">
              Paling Mahal
            </label>
            <input
              className="selectopt"
              name="test"
              type="radio"
              id="terbaru"
            />
            <label htmlFor="terbaru" className="option">
              Paling Baru
            </label>
            <input
              className="selectopt"
              name="test"
              type="radio"
              id="terlama"
            />
            <label htmlFor="terlama" className="option">
              Paling Lama
            </label>
          </div>
        </div>
        <div className="search-bar d-flex">
          <div className="search-icon">
            <Search size={19} className="search-i" />
          </div>
          <div className="search-input">
            <input
              type="text"
              placeholder="Search"
              name="search"
              className="search"
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <hr />

        {loading ? (
          <SkeletonCardMenu />
        ) : products.total === 0 ? (
          <div className="text-center my-5">
            <img
              src="/assets/no-data.svg"
              alt=""
              className="img-fluid"
              width={480}
            />
          </div>
        ) : (
          <div className="card">
            <Row>
              {products.data.map((item, index) => (
                <Col md={3} xs={6} sm={6} key={index}>
                  <CardComp product={item} category={category} />
                </Col>
              ))}
            </Row>
          </div>
        )}
        {loading ? (
          ""
        ) : products.total === 0 || products.last_page < 2 ? (
          ""
        ) : (
          <div className="pagination-nav d-flex">
            {products.current_page === 1 && (
              <i
                className="bi bi-arrow-left mx-2"
                style={{ color: "#a8a8a8" }}
              ></i>
            )}
            <Pagination changePage={getData} data={products} options={option} />
            {products.current_page === products.last_page && (
              <i
                className="bi bi-arrow-right mx-2"
                style={{ color: "#a8a8a8" }}
              ></i>
            )}
          </div>
        )}
      </Container>
    </div>
  );
}

export default LayoutMenu;
