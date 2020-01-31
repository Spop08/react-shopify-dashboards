import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import { toAbsoluteUrl } from "../../_metronic/utils/utils";
import "./variants.table.scss";

function priceFormatter(cell, row) {
  return (
    <img
      alt=""
      className="variants-img"
      src={toAbsoluteUrl("/media/products/product6.jpg")}
    />
  );
}

const columns = [
  {
    dataField: "img",
    text: "Image",
    formatter: priceFormatter,
    style: { whiteSpace: "nowrap" }
  },
  {
    dataField: "sku",
    text: "SKU",
    style: { whiteSpace: "nowrap" }
  },
  {
    dataField: "color",
    text: "Color",
    style: { whiteSpace: "nowrap" }
  },
  {
    dataField: "shipfrom",
    text: "Ships from",
    style: { whiteSpace: "nowrap" }
  },
  {
    dataField: "cost",
    text: "Cost",
    style: { whiteSpace: "nowrap" }
  },
  {
    dataField: "shipping",
    text: "Shipping",
    style: { whiteSpace: "nowrap" }
  },
  {
    dataField: "price",
    text: "Price",
    style: { whiteSpace: "nowrap" }
  },
  {
    dataField: "profit",
    text: "Profit",
    style: { whiteSpace: "nowrap" }
  },
  {
    dataField: "cprice",
    text: "Compared At Price",
    style: { whiteSpace: "nowrap" }
  },

  {
    dataField: "inventory",
    text: "Inventory",
    type: "number",
    style: { whiteSpace: "nowrap" }
  }
];

function afterSaveCell(oldValue, newValue) {
  console.log("--after save cell--");
  console.log("New Value was apply as");
  console.log(newValue);
  console.log(`and the type is ${typeof newValue}`);
}

export default class CustomColumnTable extends React.Component {
  state = {
    variants: [
      {
        img: "",
        sku: "28974885-2689-2-united-states",
        color: "2689-2",
        shipfrom: "United States",
        cost: "US$18.99",
        shipping: "US$0.00",
        price: "US$36.18",
        profit: "US$17.19",
        cprice: "US$34.18",
        inventory: 1000
      },
      {
        img: "",
        sku: "28974885-2689-2-united-states",
        color: "2689-2",
        shipfrom: "United States",
        cost: "US$18.99",
        shipping: "US$0.00",
        price: "US$36.18",
        profit: "US$17.19",
        cprice: "US$34.18",
        inventory: 1000
      },
      {
        img: "",
        sku: "28974885-2689-2-united-states",
        color: "2689-2",
        shipfrom: "United States",
        cost: "US$18.99",
        shipping: "US$0.00",
        price: "US$36.18",
        profit: "US$17.19",
        cprice: "US$34.18",
        inventory: 1000
      }
    ]
  };
  render() {
    const { variants } = this.state;
    return (
      <BootstrapTable
        keyField="id"
        data={variants}
        columns={columns}
        selectRow={{ mode: "checkbox" }}
        // cellEdit={cellEditFactory({
        //   mode: "click",
        //   blurToSave: true,
        //   afterSaveCell
        // })}
      />
    );
  }
}
