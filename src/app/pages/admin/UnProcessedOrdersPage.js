import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";

import { fetchAdminUnProcessedOrders } from "../../crud/order.crud";

import OrderToolbarSelect from "../../components/ordertoolbar";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9)
  }
}));
//UnProcessedOrder Page of store owners
const UnProcessedOrdersPage = props => {
  const classes = useStyles();
  //Define columns of table
  const columns = [
    {
      name: "id",
      label: "ID",
      options: {
        filter: false,
        sort: true
      }
    },
    {
      name: "variant.image",
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
        }
      }
    },
    {
      name: "variant.title",
      label: "Product Name",
      options: {
        filter: true,
        sort: true
      }
    },

    {
      name: "client.email",
      label: "Seller Email",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: "client.storeName",
      label: "Seller Shop",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: "price",
      label: "Price",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: "quantity",
      label: "Quantity",
      options: {
        filter: true,
        sort: true,
        customBodyRender: value => (value === -1 ? "" : value)
      }
    },
    {
      name: "quantity",
      label: "Is Parent",
      options: {
        filter: true,
        sort: true,
        customBodyRender: value => (value === -1 ? "True" : "False")
      }
    }
  ];

  const options = {
    filterType: "checkbox",
    customToolbarSelect: selectedRows => (
      <OrderToolbarSelect selectedRows={selectedRows} />
    )
  };

  const [orders, setOrders] = useState([]);
  const token = useSelector(state => state.auth.authToken);
  //fetch all unprocessed orders
  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetchAdminUnProcessedOrders(token);
      setOrders(response);
    };
    fetchOrders();
  }, [token]);
  console.log(orders);

  return (
    <>
      <MUIDataTable
        title={"Orders List"}
        data={orders}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default UnProcessedOrdersPage;
