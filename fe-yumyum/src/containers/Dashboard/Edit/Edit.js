import React, { useEffect, useState } from "react";
import { default as CreateEditProduct } from "../../../components/CreateEdit/Product/CreateEdit";
import { default as CreateEditAdmin } from "../../../components/CreateEdit/Admin/CreateEdit";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../../redux/actions/productActions";
import axios from "axios";
import { Spinner } from "react-bootstrap";

const styleSpinner = {
  position: "fixed",
  margin: "auto",
  top: "0",
  left: "0",
  bottom: "0",
  right: "0",
};

export const EditItem = ({ match }) => {
  const dispatch = useDispatch();
  const slug = match.params.slug;
  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(getProductDetails(slug));
  }, [dispatch, slug]);

  return (
    <div>
      {loading ? (
        <Spinner
          animation="border"
          role="status"
          variant="warning"
          style={styleSpinner}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <CreateEditProduct dataProduct={product} loading={loading} />
      )}
    </div>
  );
};

export const EditAdmin = ({ match }) => {
  const [data, setData] = useState("loading");
  const admin = JSON.parse(localStorage.getItem("admin"));
  const paramsId = parseInt(match.params.id);
  const id = admin.id !== 1 ? admin.id : match.params.id;

  useEffect(() => {
    axios
      .get(`/admin/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  if (admin.id !== paramsId && admin.id !== 1) {
    return (
      <h2
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        Error 404
      </h2>
    );
  } else {
    return (
      <div>
        {data === "loading" ? (
          <Spinner
            animation="border"
            role="status"
            variant="warning"
            style={styleSpinner}
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <CreateEditAdmin dataAdmin={data} />
        )}
      </div>
    );
  }
};
