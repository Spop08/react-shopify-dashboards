import React, { Component } from "react";
import IProductPad from "../../components/iproduct.pad";

export default class ImportListPage extends Component {
  render() {
    return (
      <div>
        <h3 className="page-title">Import List</h3>
        <div className="kproduct-container">
          <IProductPad />
        </div>
      </div>
    );
  }
}
