import React, { useEffect } from "react";
import { Carousel, Image } from "react-bootstrap";
import Styles from "./BestOfferStyles";
import { getBestOffers as listProducts } from "../../redux/actions/bestOfferAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Item from "./Item/Index";
import { SkeletonBestOffer } from "../SkeletonLoading/SkeletonLoading";

function BestOffer(props) {
  const dispatch = useDispatch();
  const getBestOffers = useSelector((state) => state.getBestOffers);
  const getUser = useSelector((state) => state.getUsers);
  const { bestOffer, loading, error } = getBestOffers;
  const { user } = getUser;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Styles>
      {loading ? (
        <SkeletonBestOffer />
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className="best-offers">
          <h1 className="title-offers">Penawaran Terbaik</h1>
          <Carousel>
            {bestOffer.map((item) => (
              <Carousel.Item key={item.id}>
                <Link
                  to={`/item/${item.product.category.category}/${item.product.slug}`}
                  style={{
                    cursor: "auto",
                  }}
                >
                  <Image className="d-block bg-item" src={item.product.image} />
                  <Carousel.Caption>
                    <Item product={item.product} user={user} />
                  </Carousel.Caption>
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      )}
    </Styles>
  );
}

export default React.memo(BestOffer);
