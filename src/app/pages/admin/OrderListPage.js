import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";

import { fetchAdminAllOrders } from "../../crud/order.crud";

import OrderToolbarSelect from "../../components/ordertoolbar";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));
//Order List Page for each store owners
const OrderList = (props) => {
  const classes = useStyles();
  //columns of table
  const columns = [
    {
      name: "no",
      label: "No",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "image",
      label: "Image",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Avatar
              alt="product img"
              variant="rounded"
              src={value}
              className={classes.large}
            />
          );
        },
      },
    },
    {
      name: "product_name",
      label: "Product Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "email",
      label: "Seller Email",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "store",
      label: "Seller Shop",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "isShipped",
      label: "Shipping",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  const options = {
    filterType: "checkbox",
    customToolbarSelect: (selectedRows) => (
      <OrderToolbarSelect selectedRows={selectedRows} />
    ),
  };

  const [orders, setOrders] = useState([]);
  const token = useSelector((state) => state.auth.authToken);
  //Fetch all orders from db
  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetchAdminAllOrders(token);
      setOrders(response);
    };
    fetchOrders();
  }, [token]);

  return (
    <MUIDataTable
      title={"Orders List"}
      data={orders}
      columns={columns}
      options={options}
    />
  );
};

export default OrderList;
