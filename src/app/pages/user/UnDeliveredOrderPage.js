import React from "react";
import OrderPad from "../../components/order.pad";

export default class UnDeliveredOrderPage extends React.Component {
  render() {
    return (
      <div className="order-container">
        <h3 className="page-title">UnDelivered Order</h3>
        <div className="kproduct-container">
          <OrderPad type="undelivered" />
        </div>
      </div>
    );
  }
}
