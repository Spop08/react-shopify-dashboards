import React from "react";
import OrderPad from "../../components/order.pad";

export default class InProcessingOrderPage extends React.Component {
  render() {
    return (
      <div className="order-container">
        <h3 className="page-title">InProcessing Order</h3>
        <div className="kproduct-container">
          <OrderPad type="inprocessing" />
        </div>
      </div>
    );
  }
}
