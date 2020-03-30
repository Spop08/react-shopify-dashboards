import React, { useState, useEffect } from "react";
import IProductPad from "../../components/iproduct.pad";
import { useSelector } from "react-redux";
import { fetchImportProducts } from "../../crud/product.crud";

const ImportListPage = () => {
  // const import_products = useSelector(state => state.user.import_products);
  const token = useSelector(state => state.auth.authToken);
  const [products, loadProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await fetchImportProducts(token);
      loadProducts(products);
    };
    fetchProducts();
  }, [token]);

  const componentProducts = products.map((item, index) => (
    <IProductPad data={item} index={index + 1} key={index} />
  ));
  console.log(products);
  return (
    <div>
      <h3 className="page-title">Import List</h3>
      <div className="kproduct-container">{componentProducts}</div>
    </div>
  );
};

export default ImportListPage;
