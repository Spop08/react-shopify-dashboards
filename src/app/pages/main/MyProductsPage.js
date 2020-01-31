import React from "react";
import ControlledExpansionPanels from "../../components/expansion.pad";

export default class MyProductsPage extends React.Component {
  render() {
    return (
      <div>
        <h3 className="page-title">My Products</h3>
        <div className="kproduct-container">
          <ControlledExpansionPanels />
          <ControlledExpansionPanels />
          <ControlledExpansionPanels />
          <ControlledExpansionPanels />
        </div>
      </div>
    );
  }
}
