import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import "./variants.table.scss";

function priceFormatter(cell) {
  return (
    <div className="d-flex">
      <img alt="" className="variants-img" src={cell} />
    </div>
  );
}
function disableEditFormatter(cell) {
  return false;
}

const CustomColumnTable = ({ data }) => {
  const columns = [
    {
      dataField: "img",
      text: "Image",
      formatter: priceFormatter,
      editable: disableEditFormatter,
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
      dataField: "size",
      text: "Size",
      style: { whiteSpace: "nowrap" }
    },
    {
      dataField: "cost",
      text: "Cost",
      editable: disableEditFormatter,
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
      dataField: "inventory",
      text: "Inventory",
      editable: disableEditFormatter,
      style: { whiteSpace: "nowrap" }
    }
  ];
  const [variants, setVariants] = useState([]);
  useEffect(() => {
    var _variants = [];
    data.variants.forEach((item, index) => {
      const variant = {
        img: item.imageSrc,
        sku: item.sku ? item.sku : index,
        color: item.options[0],
        size: item.options[1],
        cost: item.price,
        price: item.price * 2,
        profit: item.price,
        inventory: item.inventory ? item.inventory : 1000
      };
      _variants.push(variant);
    });
    setVariants(_variants);
  }, [data.variants]);
  console.log(data);

  return (
    <BootstrapTable
      keyField="sku"
      data={variants}
      columns={columns}
      // selectRow={{ mode: "checkbox" }}
      cellEdit={cellEditFactory({
        mode: "click",
        blurToSave: true,
        afterSaveCell: (oldValue, newValue, row, column) => {}
      })}
    />
  );
};
export default CustomColumnTable;
