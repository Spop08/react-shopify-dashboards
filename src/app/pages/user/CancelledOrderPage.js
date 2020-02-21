import React, { useEffect, useState } from "react";
import OrderPad from "../../components/order.pad";
import { fetchOrdersbyUser } from "../../crud/order.crud";
import { useSelector } from "react-redux";

const CancelledOrderPage = () => {
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
      return <OrderPad type="cancelled" data={item} key={index} />;
    }
    return null;
  });

  return (
    <div className="order-container">
      <h3 className="page-title">Cancelled Order</h3>
      <div className="kproduct-container">{componentOrders}</div>
    </div>
  );
};

export default CancelledOrderPage;
