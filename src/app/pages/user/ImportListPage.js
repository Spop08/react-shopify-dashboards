import React, { useState, useEffect } from "react";
import IProductPad from "../../components/iproduct.pad";
import { useSelector } from "react-redux";
import { fetchImportProducts } from "../../crud/product.crud";

//Import List Page
const ImportListPage = () => {
  const token = useSelector((state) => state.auth.authToken);
  const [products, loadProducts] = useState([]);
  //Fetch Initial Products
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
