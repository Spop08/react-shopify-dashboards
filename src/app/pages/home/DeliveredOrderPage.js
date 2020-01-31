import React from "react";
import OrderPad from "../../components/order.pad";

export default class DeliveredOrderPage extends React.Component {
  render() {
    return (
      <div className="order-container">
        <h3 className="page-title">Delivered Order</h3>
        <div className="kproduct-container">
          <OrderPad type="delivered" />
        </div>
      </div>
    );
  }
}
