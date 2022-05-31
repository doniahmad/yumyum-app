import React, { useEffect } from "react";
import { PlusLg } from "react-bootstrap-icons";
import AdminData from "../../../components/AdminData/AdminData";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { SkeletonAdmin } from "../../../components/SkeletonLoading/SkeletonLoading";

function Admin() {
  const [admin, setAdmin] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const getAdmin = async () => {
      await axios
        .get("/admin")
        .then((res) => {
          setAdmin(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      setLoading(false);
    };
    getAdmin();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Admin</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <Link to={"/dashboard/add/admin"}>
              <button type="button" className="btn btn-sm btn-success">
                <PlusLg />
                Tambah
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>

          {loading ? (
            <SkeletonAdmin />
          ) : (
            <tbody>
              {admin.map((admin, index) => (
                <AdminData
                  admin={admin}
                  key={admin.id}
                  pattern=".{8,}"
                  required
                  title="8 characters minimum"
                />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default Admin;
