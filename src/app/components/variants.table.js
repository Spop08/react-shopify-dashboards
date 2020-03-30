import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import { editImportedProduct } from "../crud/product.crud";
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
  const token = useSelector(state => state.auth.authToken);
  const [columns, setColumns] = useState([
    {
      dataField: "imageSrc",
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
      dataField: "inventory",
      text: "Inventory",
      style: { whiteSpace: "nowrap" }
    }
  ]);
  const [variants, setVariants] = useState([]);
  const [fields, setFields] = useState([]);
  useEffect(() => {
    var _variants = [];
    var cnt = 2;
    const ar_col = [...columns];
    const _fields = [];
    data.options.forEach(item => {
      const field = item.split(" ")[0];
      const column = {
        dataField: field,
        text: item,
        style: { whiteSpace: "nowrap" }
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
        cost: item.originalPrice ? item.originalPrice : item.price,
        price: item.price,
        inventory:
          item.inventoryQuantity === undefined ? 0 : item.inventoryQuantity
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

  const handleSubmit = async () => {
    var newData = data;
    console.log("VARIANTS ", variants);
    console.log("FIELDS ", fields);
    data.variants.forEach((item, index) => {
      // newData.variants[index] = item;
      newData.variants[index].imageSrc = variants[index].imageSrc;
      newData.variants[index].inventoryQuantity = variants[index].inventory;

      newData.variants[index].price = variants[index].price;
      newData.variants[index].originalPrice = variants[index].originalPrice;
      fields.forEach((field, ind) => {
        newData.variants[index]["options"][ind] = variants[index][field];
      });
    });
    console.log("NEWDATA ", newData);
    const response = await editImportedProduct(token, newData);
    if (response.data.status === "success") alert("Save Changed...");
  };
  return (
    <>
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
      <div style={{ float: "right" }} onClick={handleSubmit}>
        <Button color="secondary" variant="outlined">
          Save Changes
        </Button>
      </div>
    </>
  );
};
export default CustomColumnTable;
