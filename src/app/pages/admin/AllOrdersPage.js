import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";
import { fetchAdminAllOrders } from "../../crud/order.crud";
import OrderToolbarSelect from "../../components/ordertoolbar";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
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

const AllOrdersPage = props => {
  const classes = useStyles();
  const options = {
    filterType: "checkbox",
    customToolbarSelect: selectedRows => (
      <OrderToolbarSelect selectedRows={selectedRows} />
    )
  };

  const [orders, setOrders] = useState([]);
  const token = useSelector(state => state.auth.authToken);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetchAdminAllOrders(token);
      setOrders(response);
    };
    fetchOrders();
  }, [token]);
  console.log(orders);
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
      name: "isShipped",
      label: "Shipping",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) =>
          value ? "Shipped" : "Not Shipped"
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
        sort: true
      }
    },
    {
      name: "actions",
      label: "Shipping",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Tooltip title={"Shipping Detail"}>
              <IconButton onClick={() => handleOpenDialog(tableMeta.rowIndex)}>
                <LocalShippingIcon />
              </IconButton>
            </Tooltip>
          );
        }
      }
    }
  ];

  const handleOpenDialog = index => {
    setOpen(true);
    setShipping(orders[index].shippingAddress);
  };
  const [open, setOpen] = useState(false);
  const [shipping, setShipping] = useState({});
  return (
    <>
      <MUIDataTable
        title={"Orders List"}
        data={orders}
        columns={columns}
        options={options}
      />
      <Dialog
        open={open}
        keepMounted
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="draggable-dialog-title">Shipping Details</DialogTitle>
        <DialogContent>
          <div className="shipping-container">
            <div className="row">
              <p className="col-md-4">First Name:</p>
              <span classes="col-md-8">{shipping.first_name}</span>
            </div>
            <div className="row">
              <p className="col-md-4">Last Name:</p>
              <span classes="col-md-8">{shipping.last_name}</span>
            </div>
            <div className="row">
              <p className="col-md-4">Country:</p>
              <span classes="col-md-8">{shipping.country}</span>
            </div>
            <div className="row">
              <p className="col-md-4">Province:</p>
              <span classes="col-md-8">{shipping.province}</span>
            </div>
            <div className="row">
              <p className="col-md-4">City:</p>
              <span classes="col-md-8">{shipping.city}</span>
            </div>
            <div className="row">
              <p className="col-md-4">Address 1:</p>
              <span classes="col-md-8">{shipping.address1}</span>
            </div>
            <div className="row">
              <p className="col-md-4">Address 2:</p>
              <span classes="col-md-8">{shipping.address2}</span>
            </div>
            <div className="row">
              <p className="col-md-4">Zip Code:</p>
              <span classes="col-md-8">{shipping.zip}</span>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AllOrdersPage;
