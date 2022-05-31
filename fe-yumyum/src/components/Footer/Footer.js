import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Styles from "./FooterStyles";
import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";

function Footer(props) {
  return (
    <Styles>
      <div className="footer">
        <Container>
          <Row>
            <Col md="3" sm="14">
              <div className="logo">
                <img src={props.config.logo} width={140} alt="" />
              </div>
            </Col>
            <Col xs md="3" className="navigation-list">
              <div className="footer-list">
                <ul>
                  <li className="title">Navigation</li>
                  <a href="#layanan">
                    <li>Layanan</li>
                  </a>
                  <a href="#penawaran-terbaik">
                    <li>Penawaran Terbaik</li>
                  </a>
                  <a href="#paling-laris">
                    <li>Paling laris</li>
                  </a>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="footer-list">
                <ul>
                  <li className="title">Contact Us</li>
                  <li>{props.config.email}</li>
                  <li>{props.config.phone}</li>
                  <li>{props.config.address}</li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="footer-list social-media">
                <ul>
                  <li className="title">Our Social Media</li>
                  <div className="d-flex">
                    <a
                      href={props.config.facebook_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="icon icon-facebook">
                        <Facebook size={41} className="facebook" />
                      </div>
                    </a>
                    <a
                      href={props.config.instagram_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="icon icon-instagram">
                        <Instagram size={22} className="instagram i" />
                      </div>
                    </a>
                    <a
                      href={props.config.twitter_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="icon icon-twitter">
                        <Twitter size={22} className="twitter i" />
                      </div>
                    </a>
                  </div>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Styles>
  );
}

export default Footer;
