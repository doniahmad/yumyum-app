import { default as CreateEditProduct } from "../../../components/CreateEdit/Product/CreateEdit";
import { default as CreateEditAdmin } from "../../../components/CreateEdit/Admin/CreateEdit";
import { default as CreateEditBestOffer } from "../../../components/CreateEdit/BestOffer/CreateEdit";
import React from "react";

export const AddAdmin = () => {
  return (
    <div>
      <CreateEditAdmin title={"Tambah"} />
    </div>
  );
};

export const AddBestOffer = () => {
  return (
    <div>
      <CreateEditBestOffer />
    </div>
  );
};

export const AddItem = ({ match }) => {
  const url = `${match.params.type}`;
  return (
    <div>
      <CreateEditProduct url={url} />
    </div>
  );
};
