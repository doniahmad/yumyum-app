import React, { useEffect, useState } from "react";
import DashboardData from "../../../components/DashboardData/DashboardData";
import { Search } from "react-bootstrap-icons";
import { SkeletonOrderDashboard } from "../../../components/SkeletonLoading/SkeletonLoading";
import ListOrder from "../../../components/OrdersComp/ListOrders/ListOrders";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders as dataOrders } from "../../../redux/actions/orderActions";

function DashboardComp({ admin }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const getOrders = useSelector((state) => state.getOrders);
  const { loading, order } = getOrders;

  useEffect(() => {
    dispatch(dataOrders());
    // const getOrder = async () => {
    //   await axios.get("/order").then((res) => {
    //     setOrder(res.data);
    //     setLoading(false);
    //   });
    //   setTimer(setTimeout(getOrder, 400));
    // };

    // if (!mounted) {
    //   getOrder();
    //   setMounted(true);
    // }

    // return () => clearTimeout(timer);
  }, [dispatch]);

  const OrderValues = Object.values(order);

  const orderData = OrderValues.filter((item) => {
    const searchCondition =
      item.user.name.toLowerCase().includes(search.toLowerCase()) ||
      item.order_code.toLowerCase().includes(search.toLowerCase()) ||
      item.created_at.toLowerCase().includes(search.toLowerCase());

    if (search === "" && filter === "") {
      return item;
    } else if (search !== "" && filter === "") {
      return searchCondition;
    } else if (search === "" && filter !== "") {
      return item.status === filter;
    } else {
      return searchCondition && item.status === filter;
    }
  });

  const onFilterChange = (e) => {
    setFilter(e.target.id === "default" ? "" : e.target.id);
  };
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
      </div>
      <div>
        <DashboardData />
      </div>
      <div className="orders mt-3">
        <div className="d-flex order-header">
          <div className="order-title d-flex">
            <h4>Order</h4>
            <p className="order-length">{order.length}</p>
          </div>
          <div className="rigth-header ms-auto d-flex">
            <div
              className="select"
              tabIndex="1"
              onChange={(e) => onFilterChange(e)}
            >
              <input
                className="selectopt"
                name="test"
                type="radio"
                id="default"
                defaultChecked="checked"
              />
              <label htmlFor="default" className="option">
                Semua Pesanan
              </label>
              <input
                className="selectopt"
                name="test"
                type="radio"
                id="menunggu"
              />
              <label htmlFor="menunggu" className="option">
                Menunggu Konfirmasi
              </label>
              <input
                className="selectopt"
                name="test"
                type="radio"
                id="diproses"
              />
              <label htmlFor="diproses" className="option">
                Sedang Diproses
              </label>
              <input
                className="selectopt"
                name="test"
                type="radio"
                id="dikirim"
              />
              <label htmlFor="dikirim" className="option">
                Sedang Dikirim
              </label>
              <input
                className="selectopt"
                name="test"
                type="radio"
                id="terkirim"
              />
              <label htmlFor="terkirim" className="option">
                Sudah Terkirim
              </label>
              <input
                className="selectopt"
                name="test"
                type="radio"
                id="dibatalkan"
              />
              <label htmlFor="dibatalkan" className="option">
                Sudah Dibatalkan
              </label>
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
                  onChange={(e) => setSearch(e.target.value)}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-sm text-center">
            <thead>
              <tr>
                <th className="date">Tanggal</th>
                <th className="order-code">Kode Pemesanan</th>
                <th className="name">Nama</th>
                <th className="total">Total</th>
                <th className="status">Status</th>
                <th className="action">Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <SkeletonOrderDashboard />
              ) : order.length === 0 ? (
                <tr
                  style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-25%)",
                    padding: "3rem 0px",
                  }}
                  className="img-no-data"
                >
                  <td>
                    <img
                      src="/assets/no-data.svg"
                      alt=""
                      className="img-fluid"
                      width={400}
                    />
                  </td>
                </tr>
              ) : (
                orderData.map((item, index) => (
                  <ListOrder item={item} key={index} />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardComp;
