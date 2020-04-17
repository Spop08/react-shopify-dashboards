import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import { editImportedProduct } from "../../../crud/product.crud";
import "./variants.table.scss";

//Variants Table
//Image Formatter for Bootstrap Table2
function imageFormatter(cell) {
  return (
    <div className="d-flex">
      <img alt="" className="variants-img" src={cell} />
    </div>
  );
}
function disableEditFormatter(cell) {
  return false;
}
//Columns of Table
const CustomColumnTable = ({ data, handleVariantsChange }) => {
  const token = useSelector((state) => state.auth.authToken);
  const [columns, setColumns] = useState([
    {
      dataField: "imageSrc",
      text: "Image",
      formatter: imageFormatter,
      editable: disableEditFormatter,
      style: { whiteSpace: "nowrap" },
    },
    {
      dataField: "sku",
      text: "SKU",
      style: { whiteSpace: "nowrap" },
    },
    {
      dataField: "price",
      text: "Price",
      style: { whiteSpace: "nowrap" },
    },
    {
      dataField: "inventory",
      text: "Inventory",
      style: { whiteSpace: "nowrap" },
    },
  ]);
  const [variants, setVariants] = useState([]);
  const [fields, setFields] = useState([]);
  //Configure table with inital variants
  useEffect(() => {
    console.log("I am useEffect");
    var _variants = [];
    var cnt = 2;
    const ar_col = [...columns];
    const _fields = [];
    data.options.forEach((item) => {
      const field = item.split(" ")[0];
      const column = {
        dataField: field,
        text: item,
        style: { whiteSpace: "nowrap" },
      };
      ar_col.splice(cnt, 0, column);
      _fields.push(field);
      cnt++;
    });
    setColumns(ar_col);
    data.variants.forEach((item, index) => {
      const sku1 =
        "-" + (item.options[0] ? item.options[0].replace(/\s+/g, "") : "");
      const sku2 = item.options[1] ? "-" + item.options[1] : "";
      var variant = {
        imageSrc: item.imageSrc,
        sku: data.id + sku1 + sku2,
        price: item.price,
        inventory:
          item.inventoryQuantity === undefined ? 0 : item.inventoryQuantity,
      };
      item.options.forEach((option, ind) => {
        const _option = _fields[ind];
        variant[_option] = option;
      });
      _variants.push(variant);
    });
    setVariants(_variants);
    setFields(_fields);
  }, [data.variants, data.id]);
  useEffect(() => {
    handleVariantsChange(variants, fields);
  }, [variants, fields]);
  return (
    <BootstrapTable
      keyField="sku"
      data={variants}
      columns={columns}
      cellEdit={cellEditFactory({
        mode: "click",
        blurToSave: true,
        afterSaveCell: (oldValue, newValue, row, column) => {
          handleVariantsChange(variants, fields);
        },
      })}
    />
  );
};
export default CustomColumnTable;
