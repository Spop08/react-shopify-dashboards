import React, { useState, useEffect } from "react";
import ExpansionPad from "../../components/expansion.pad";
import { useSelector } from "react-redux";
import { fetchStoreProducts } from "../../crud/product.crud";

const MyProductsPage = () => {
  const token = useSelector(state => state.auth.authToken);
  const [products, loadProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await fetchStoreProducts(token);
      loadProducts(products);
    };
    fetchProducts();
  }, [token]);
  console.log(products);
  const componentProducts = products.map((item, index) => (
    <ExpansionPad data={item} key={index} />
  ));
  return (
    <div>
      <h3 className="page-title">My Products</h3>
      <div className="kproduct-container">{componentProducts}</div>
    </div>
  );
};

export default MyProductsPage;
