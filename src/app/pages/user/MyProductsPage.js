import React, { useEffect } from "react";
import ExpansionPad from "../../components/expansion.pad";
import { useSelector } from "react-redux";

const MyProductsPage = () => {
  const products = useSelector(state => state.user.import_products);

  return (
    <div>
      <h3 className="page-title">My Products</h3>
      <div className="kproduct-container">
        {products.map(data => (
          <ExpansionPad data={data} />
        ))}
      </div>
    </div>
  );
};

export default MyProductsPage;
