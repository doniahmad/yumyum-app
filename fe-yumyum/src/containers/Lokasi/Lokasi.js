import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { EnvelopeFill, GeoAltFill, TelephoneFill } from "react-bootstrap-icons";
import Swal from "sweetalert2";
import { SkeletonLocation } from "../../components/SkeletonLoading/SkeletonLoading";
import Styles from "./LokasiStyles";

function Lokasi(props) {
  document.title = "Lokasi | YumYum";
  const [loading, setLoading] = useState(true);
  const [loadingSend, setLoadingSend] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const setting = props.config;
  useEffect(() => {
    Object.keys(setting).length === 0 ? setLoading(true) : setLoading(false);
  }, [setting]);
  const submitContact = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      _subject: e.target.subject.value,
    };

    Swal.fire({
      title: "Kirim Pesan ke YumYum",
      body: "Apakah anda yakin ingin mengirim pesan ini?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      reverseButtons: true,
      focusConfirm: false,
    }).then((result) => {
      if (result.value) {
        setLoadingSend(true);
        fetch("https://formsubmit.co/ajax/restorantyumyum@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            setShowContact(false);
            setLoadingSend(false);
            Swal.fire(
              "Pesan Terkirim",
              "Terima kasih telah menghubungi kami",
              "success"
            );
          })
          .catch((error) => console.log(error));
        return false;
      } else {
        setLoadingSend(false);
      }
    });
  };

  return (
    <Styles>
      {loading ? (
        <SkeletonLocation />
      ) : (
        <Container>
          <h1 className="title">Lokasi</h1>
          {showContact ? (
            <div id="contact-form">
              <div className="contact-container">
                <h4 className="text-center mb-3">Kontak</h4>
                <form onSubmit={(e) => submitContact(e)} action="">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      id="text"
                      name="message"
                      rows="3"
                      placeholder="Text"
                      required
                    ></textarea>
                  </div>
                  <div className="btn-form">
                    <Button
                      variant="danger"
                      onClick={() => setShowContact(false)}
                    >
                      Cancel
                    </Button>
                    <Button variant="primary" type="submit">
                      Kirim
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          ) : null}
          <Row>
            <Col className="col-info" md={6} sm={12}>
              <div className="info">
                <div>
                  <GeoAltFill />
                  <p className="street-name">{setting.address}</p>
                </div>
                <div>
                  <TelephoneFill />
                  <p className="phone-number">{setting.phone}</p>
                </div>
                <div>
                  <EnvelopeFill />
                  <p className="email">{setting.email}</p>
                </div>
                <Button
                  variant="warning"
                  className="btn-kontak"
                  onClick={() => setShowContact(true)}
                >
                  KONTAK
                </Button>
              </div>
            </Col>
            <Col className="col-map" md={6} sm={12}>
              <div>
                <iframe
                  id="map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3961.652592271829!2d110.821115!3d-6.812043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x36b5433d91d12725!2sEsoftplay%20Software%20Development!5e0!3m2!1sid!2sid!4v1648443065187!5m2!1sid!2sid"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="map"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      )}
      {loadingSend && (
        <div className="loading">
          <Spinner animation="border" variant="warning" />
        </div>
      )}
    </Styles>
  );
}

export default Lokasi;
