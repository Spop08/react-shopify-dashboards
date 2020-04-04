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

const UnProcessedOrdersPage = props => {
  const classes = useStyles();

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
        sort: true
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

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetchAdminUnProcessedOrders(token);
      setOrders(response);
    };
    fetchOrders();
  }, [token]);
  console.log(orders);

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
              <p className="col-md-4">Country:</p>
              <span classes="col-md-8">{shipping.country_code}</span>
            </div>
            <div className="row">
              <p className="col-md-4">State:</p>
              <span classes="col-md-8">{shipping.state}</span>
            </div>
            <div className="row">
              <p className="col-md-4">City:</p>
              <span classes="col-md-8">{shipping.city}</span>
            </div>
            <div className="row">
              <p className="col-md-4">Address 1:</p>
              <span classes="col-md-8">{shipping.line1}</span>
            </div>
            <div className="row">
              <p className="col-md-4">Address 2:</p>
              <span classes="col-md-8">{shipping.line2}</span>
            </div>
            <div className="row">
              <p className="col-md-4">Postal Code:</p>
              <span classes="col-md-8">{shipping.postal_code}</span>
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

export default UnProcessedOrdersPage;
