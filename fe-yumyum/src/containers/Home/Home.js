import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import BestOffer from "../../components/BestOffer/BestOffer";
import BestSeller from "../../components/BestSeller/BestSeller";
import Layanan from "../../components/Layanan/Layanan";
import Styles from "./HomeStyles";
import { getAllPopulerProducts as allPopulerProduct } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { SkeletonCardMenuPopuler } from "../../components/SkeletonLoading/SkeletonLoading";

function Home(props) {
  document.title = "YumYum App";
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { loading, product, error } = getProducts;
  const config = JSON.parse(localStorage.getItem("setting"));
  useEffect(() => {
    dispatch(allPopulerProduct());
  }, [dispatch]);

  const options = {
    threshold: 0.2,
  };

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__fadeInUp");
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);

  const layanan = document.querySelectorAll(".reveal");
  layanan.forEach((item) => {
    observer.observe(item);
  });

  return (
    <Styles>
      <section>
        <div className="jumbotron text-center">
          <div className="jumbotron-dark">
            <div className="jumbotron-container reveal">
              <h1 className="jumbotron-title ">
                Selamat Datang di <span className="name">{config.name}</span>
              </h1>
              <p className="jumbotron-desc ">
                Disini kami menyediakan berbagai macam makanan yang masih segar
                dan pastinya terawat dengan baik. Anda dapat memesan secara
                online berbagai makanan yang tersedia disini atau pun ketempat
                kami.
              </p>

              <Link to={"/menu/makanan"}>
                <Button
                  variant="warning"
                  className="btn-pesan mx-4 btn-jumbotron"
                >
                  Pesan
                </Button>
              </Link>
              <Link to={"/lokasi"}>
                <Button
                  variant="outline-warning"
                  className="btn-lokasi mx-4 btn-jumbotron"
                >
                  Lokasi
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-4 layanan reveal" id="layanan">
          <h1 className="title">Layanan</h1>
          <Layanan />
        </div>
      </section>
      <section>
        <div className="penawaran-terbaik pt-5" id="penawaran-terbaik">
          <BestOffer />
        </div>
      </section>
      <section>
        <div className="penjualan-terbanyak" id="paling-laris">
          <h1 className="title" style={{ marginBottom: "0px" }}>
            Paling Laris
          </h1>
          <Container>
            <div>
              <Row className="justify-content-start">
                {loading ? (
                  <SkeletonCardMenuPopuler />
                ) : error ? (
                  <h2>{error}</h2>
                ) : product.data === undefined ? (
                  <h2>Data Undifined</h2>
                ) : (
                  product.data.slice(0, 6).map((item) => (
                    <Col key={item.id} style={{ marginTop: "2.5rem" }}>
                      <BestSeller product={item} />
                    </Col>
                  ))
                )}
              </Row>
              <Link to={"/menu/makanan"}>
                <Button className="btn-more" variant="warning">
                  Lihat lainnya
                </Button>
              </Link>
            </div>
          </Container>
        </div>
      </section>
    </Styles>
  );
}

export default Home;
