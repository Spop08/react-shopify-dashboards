import React, { useState, useEffect } from "react";
import OrderPad from "../../components/order.pad";
import { useSelector } from "react-redux";
import { fetchOrdersbyUser } from "../../crud/order.crud";

const UnDeliveredOrderPage = () => {
  const token = useSelector(state => state.auth.authToken);
  const [orders, loadOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await fetchOrdersbyUser(token);
      loadOrders(orders);
    };
    fetchOrders();
  }, [token]);
  console.log(orders);
  const componentOrders = orders.map((item, index) => {
    if (item.isShipped) {
      console.log(item);
      return <OrderPad type="undelivered" data={item} key={index} />;
    }
    return null;
  });

  return (
    <div className="order-container">
      <h3 className="page-title">UnDelivered Order</h3>
      <div className="kproduct-container">{componentOrders}</div>
    </div>
  );
};

export default UnDeliveredOrderPage;
