import React, { useEffect } from "react";
import { PlusLg, Search, StarFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import DataProduct from "../../../components/DataProduct/DataProduct";
import { useState } from "react";
import axios from "axios";
import { SkeletonProducts } from "../../../components/SkeletonLoading/SkeletonLoading";

function LayoutProduct(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  // const url = `/${props.url}?search=` + search;
  const url = `/products?search=` + search;
  useEffect(() => {
    const getData = async () => {
      await axios.get(url).then((res) => {
        setData(res.data);
      });
      setLoading(false);
    };
    getData();
    return () => {
      setData([]);
    };
  }, [url]);

  return (
    <div>
      <h1 className="h2 mt-4">{props.title}</h1>
      <div className="d-flex pt-1 pb-2 mb-3 border-bottom nav-product">
        <div className="btn-group me-2">
          <div className="btn-group me-2">
            <Link to={`/dashboard/add/best-offer`}>
              <button
                type="button"
                className="btn btn-sm btn-warning text-white"
              >
                <StarFill />
                Penawaran Terbaik
              </button>
            </Link>
          </div>
          <Link to={`/dashboard/add/`}>
            <button type="button" className="btn btn-sm btn-success">
              <PlusLg />
              Tambah
            </button>
          </Link>
        </div>
        <div className="search-bar d-flex ms-auto">
          <div className="search-icon">
            <Search size={19} className="search-i mb-1" />
          </div>
          <div className="search-input">
            <input
              type="text"
              placeholder="Search"
              name="search"
              className="search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Action</th>
            </tr>
          </thead>

          {loading ? (
            <SkeletonProducts />
          ) : (
            <tbody>
              {data.map((item, index) => (
                <DataProduct
                  number={index + 1}
                  id={item.id}
                  slug={item.slug}
                  category={item.category.category}
                  nama={item.name}
                  harga={item.price}
                  key={item.id}
                />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default LayoutProduct;
