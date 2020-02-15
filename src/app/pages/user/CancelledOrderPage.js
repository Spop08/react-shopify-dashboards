import React from "react";
import OrderPad from "../../components/order.pad";

export default class CancelledOrderPage extends React.Component {
  render() {
    return (
      <div className="order-container">
        <h3 className="page-title">Cancelled Order</h3>
        <div className="kproduct-container">
          <OrderPad type="cancelled" />
        </div>
      </div>
    );
  }
}
