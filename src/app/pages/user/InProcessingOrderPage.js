import React, { useEffect, useState } from "react";
import OrderPad from "../../components/order.pad";
import { fetchProcessedOrders } from "../../crud/order.crud";
import { useSelector } from "react-redux";

const InProcessingOrderPage = () => {
  const token = useSelector(state => state.auth.authToken);
  const [orders, loadOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await fetchProcessedOrders(token);
      loadOrders(orders);
    };
    fetchOrders();
  }, [token]);
  console.log(orders);
  const componentOrders = orders.map((item, index) => (
    <OrderPad type="inprocessing" data={item} key={index} />
  ));
  return (
    <div className="order-container">
      <h3 className="page-title">InProcessing Order</h3>
      <div className="kproduct-container">{componentOrders}</div>
    </div>
  );
};

export default InProcessingOrderPage;
