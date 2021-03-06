import React, { useState, useEffect } from "react";
import OrderPad from "../../components/uorder.pad";
import { useSelector } from "react-redux";
import { fetchUnProcessedOrders } from "../../crud/order.crud";

//UnProcessed Order Page
const UnProcessedOrderPage = () => {
  const token = useSelector(state => state.auth.authToken);
  const [orders, loadOrders] = useState([]);
  console.log(orders);
  //Fetch UnProcessed Orders from backend
  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await fetchUnProcessedOrders(token);
      console.log(orders);
      loadOrders(orders);
    };
    fetchOrders();
  }, [token]);
  const componentOrders = orders.map((item, index) => (
    <OrderPad type="undelivered" data={item} key={index} />
  ));
  return (
    <div className="order-container">
      <h3 className="page-title">UnDelivered Order</h3>
      <div className="kproduct-container">{componentOrders}</div>
    </div>
  );
};

export default UnProcessedOrderPage;
