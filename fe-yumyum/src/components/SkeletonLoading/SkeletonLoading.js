import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  SkeletonCardMenuStyle as LoadingCard,
  SkeletonCardMenuPopulerStyle as LoadingCardPopuler,
  SkeletonBestOfferStyle as LoadingBestOffer,
  SkeletonLocationStyle as LoadingLocation,
  SkeletonListStyle as LoadingAdmin,
  SkeletonListStyle as LoadingProducts,
  SkeletonOrderDashboardStyle as LoadingOrderDashboard,
  SkeletonOrderStyle as LoadingOrder,
  SkeletonProductDetailStyle as LoadingProductDetail,
  SkeletonDataDashboardStyle as LoadingDataDashboard,
} from "./SkeletonLoadingStyles";

export const SkeletonCardMenu = () => {
  return (
    <LoadingCard>
      <Row>
        {Array(16)
          .fill()
          .map((item, index) => {
            return (
              <Col key={index}>
                <Card>
                  <Skeleton
                    height={120}
                    width={`100%`}
                    className="skeleton-card-img"
                  />
                  <Card.Body>
                    <Card.Title>
                      <Skeleton width={`80%`} />
                    </Card.Title>
                    <Card.Text>
                      <Skeleton width={`50%`} />
                    </Card.Text>
                    <Skeleton
                      circle={true}
                      width={40}
                      height={40}
                      className={"btn-skeleton"}
                    />
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </LoadingCard>
  );
};

export const SkeletonCardMenuPopuler = () => {
  return (
    <LoadingCardPopuler>
      <Row>
        {Array(6)
          .fill()
          .map((item, index) => {
            return (
              <Col key={index}>
                <Card>
                  <Skeleton
                    height={160}
                    width={`100%`}
                    className="skeleton-card-img"
                  />
                  <Card.Body>
                    <Card.Title>
                      <Skeleton width={`80%`} />
                    </Card.Title>
                    <Card.Text>
                      <Skeleton width={`50%`} />
                    </Card.Text>
                    <Skeleton
                      circle={true}
                      width={50}
                      height={50}
                      className={"btn-skeleton"}
                    />
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </LoadingCardPopuler>
  );
};

export const SkeletonBestOffer = () => {
  return (
    <LoadingBestOffer>
      <div className="bg-skeleton">
        <div className="title">
          <Skeleton width={`25%`} />
        </div>
        <Row>
          <Col sm="12">
            <Skeleton className="img-skeleton" />
          </Col>
          <Col sm="12">
            <div className="skeleton-info">
              <Skeleton width={`60%`} height={30} className={"mb-3"} />
              <Skeleton width={`40%`} height={25} className={"mb-3"} />
              <div className="skeleton-text">
                <Skeleton count={5} />
                <Skeleton count={1} width={`50%`} />
              </div>
              <Skeleton
                width={`50%`}
                height={40}
                className="btn-sekeleton mt-4"
                borderRadius={50}
              />
            </div>
          </Col>
        </Row>
      </div>
    </LoadingBestOffer>
  );
};

export const SkeletonLocation = () => {
  return (
    <LoadingLocation>
      <Container>
        <h1 className="skeleton-title">
          <Skeleton width={`15%`} />
        </h1>
        <Row>
          <Col className="skeleton-col-info" md={6} sm={12}>
            <div className="skeleton-info">
              <h4 className="skeleton-company-name">
                <Skeleton width={`50%`} />
              </h4>
              <p className="skeleton-street-name">
                <Skeleton width={`50%`} />
              </p>
              <p className="skeleton-phone-number">
                <Skeleton width={`50%`} />
              </p>
              <p className="skeleton-email">
                <Skeleton width={`50%`} />
              </p>
              <Skeleton width={`50%`} height={45} className="btn-skeleton" />
            </div>
          </Col>
          <Col className="skeleton-col-map" md={6} sm={12}>
            <div>
              <Skeleton width={`100%`} height={390} />
            </div>
          </Col>
        </Row>
      </Container>
    </LoadingLocation>
  );
};

export const SkeletonSetting = () => {
  return (
    <section>
      <div className="mb-3">
        <Skeleton width={`38%`} />
        <Skeleton width={`100%`} height={`36px`} />
      </div>
      <div className="mb-3">
        <Skeleton width={`38%`} />
        <Skeleton width={`100%`} height={`36px`} />
      </div>
      <div className="mb-3">
        <Skeleton width={`38%`} />
        <Skeleton width={`100%`} height={`36px`} />
      </div>
      <div className="mb-3">
        <Skeleton width={`38%`} />
        <Skeleton width={`100%`} height={`36px`} />
      </div>
      <div className="mb-3">
        <Skeleton width={`38%`} />
        <Skeleton width={`100%`} height={`36px`} />
      </div>
      <div className="mb-3">
        <Skeleton width={`38%`} />
        <Skeleton width={`100%`} height={`36px`} />
      </div>
      <div className="mb-3">
        <Skeleton width={`38%`} />
        <Skeleton width={`100%`} height={`36px`} />
      </div>
      <Skeleton width={`20%`} height={`34px`} className="mb-4" />
    </section>
  );
};

export const SkeletonAdmin = () => {
  return (
    <LoadingAdmin>
      {Array(10)
        .fill()
        .map((_, index) => (
          <tr key={index + 1}>
            <td>
              <Skeleton width={140} height={25} />
            </td>
            <td>
              <Skeleton width={140} height={25} />
            </td>
            <td>
              <Skeleton width={140} height={25} />
            </td>
            <td>
              <Skeleton width={140} height={25} />
            </td>
            <td>
              <div className="d-flex btn-skeleton">
                <Skeleton width={30} height={30} />
                <Skeleton width={30} height={30} />
              </div>
            </td>
          </tr>
        ))}
    </LoadingAdmin>
  );
};

export const SkeletonProducts = () => {
  return (
    <LoadingProducts>
      {Array(10)
        .fill()
        .map((_, index) => (
          <tr key={index}>
            <td>
              <Skeleton width={140} height={25} />
            </td>
            <td>
              <Skeleton width={140} height={25} />
            </td>
            <td>
              <div className="d-flex btn-skeleton">
                <Skeleton width={30} height={30} />
                <Skeleton width={30} height={30} />
              </div>
            </td>
          </tr>
        ))}
    </LoadingProducts>
  );
};

export const SkeletonOrder = () => {
  return (
    <LoadingOrder>
      <Row>
        {Array(12)
          .fill()
          .map((_, index) => (
            <Col md={3} key={index + 1}>
              <Card>
                <Card.Body>
                  <Skeleton width={"90%"} />
                  <Skeleton width={"70%"} />
                  <hr />
                  <p>
                    <Skeleton count={4} />
                    <Skeleton width={`40%`} />
                  </p>
                  <div>
                    <hr />
                    <div className="d-flex">
                      <Skeleton width={120} height={30} />
                      <div className="ms-auto">
                        <Skeleton width={100} height={40} />
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </LoadingOrder>
  );
};

export const SkeletonOrderDashboard = () => {
  return Array(10)
    .fill()
    .map((item, index) => (
      <LoadingOrderDashboard key={index + 1}>
        <td>
          <Skeleton height={"25px"} />
        </td>
        <td>
          <Skeleton height={"25px"} />
        </td>
        <td>
          <Skeleton height={"25px"} />
        </td>
        <td>
          <Skeleton height={"25px"} />
        </td>
        <td>
          <Skeleton height={"25px"} />
        </td>
        <td style={{ width: "20%" }}>
          <Skeleton height={"25px"} />
          <Skeleton height={"25px"} />
        </td>
      </LoadingOrderDashboard>
    ));
};

export const SkeletonProductDetail = () => {
  return (
    <LoadingProductDetail>
      <div className="back-btn">
        <Skeleton width={"5%"} height={"25px"} />
      </div>
      <hr />
      <Row>
        <Col xs={12} md={7}>
          <Skeleton width={"625px"} height={"430px"} className="img-skeleton" />
        </Col>
        <Col xs>
          <div className="ms-4 info-skeleton" style={{ width: "400px" }}>
            <Skeleton
              width={"100%"}
              height={"40px"}
              className="skeleton-title"
            />
            <div className="mt-3 desc-skeleton">
              <Skeleton count={6} />
              <Skeleton width={"50%"} />
            </div>
            <div className="d-flex mt-3">
              <div>
                <Skeleton width={`120px`} height={`40px`} />
              </div>
              <div className="ms-4">
                <Skeleton
                  width={`130px`}
                  height={`40px`}
                  borderRadius={`5px`}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </LoadingProductDetail>
  );
};

export const SkeletonDataDashboard = () => {
  return (
    <LoadingDataDashboard>
      <Row className="data-contain">
        <Col md={3} sm={6} xs={6}>
          <Skeleton width={`100%`} height={`125px`} />
        </Col>
        <Col md={3} sm={6} xs={6}>
          <Skeleton width={`100%`} height={`120px`} />
        </Col>
        <Col md={3} sm={6} xs={6}>
          <Skeleton width={`100%`} height={`120px`} />
        </Col>
        <Col md={3} sm={6} xs={6}>
          <Skeleton width={`100%`} height={`120px`} />
        </Col>
      </Row>
    </LoadingDataDashboard>
  );
};
