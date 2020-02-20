import React, { useEffect } from "react";
import IProductPad from "../../components/iproduct.pad";
import { useSelector } from "react-redux";

const ImportListPage = () => {
  const import_products = useSelector(state => state.user.import_products);

  useEffect(() => {}, []);
  const componentProducts = import_products.map((item, index) => (
    <IProductPad data={item} index={index + 1} key={index} />
  ));
  return (
    <div>
      <h3 className="page-title">Import List</h3>
      <div className="kproduct-container">{componentProducts}</div>
    </div>
  );
};

export default ImportListPage;
