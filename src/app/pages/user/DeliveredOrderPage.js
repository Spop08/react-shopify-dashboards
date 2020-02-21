import React, { useEffect, useState } from "react";
import OrderPad from "../../components/order.pad";
const DeliveredOrderPage = () => {
  const [orders, loadOrders] = useState([]);
  useEffect(() => {}, []);
  return (
    <div className="order-container">
      <h3 className="page-title">Delivered Order</h3>
      <div className="kproduct-container">
        <OrderPad type="delivered" />
      </div>
    </div>
  );
};

export default DeliveredOrderPage;
