import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import Card from "react-bootstrap/Card";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import "./uorder.pad.scss";
import PayPalButton from "./paypal.btn";
import { useSelector } from "react-redux";
import { markAsProcessed, markAsDelivered } from "../crud/order.crud";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  chip: {
    marginLeft: "auto"
  }
}));
// Order Pad in all Orders Page
const OrderPad = props => {
  const classes = useStyles();
  const { type, data } = props;
  const token = useSelector(state => state.auth.authToken);
  const [open, setOpen] = useState(false);
  const [markStatus, setMarkStatus] = useState(null);
  //When store owner purchase via Paypal, it will be marked as Processed via calling the backend API
  const onSuccess = (payment, id) => {
    console.log("Payment", payment, payment.paid, id);
    if (payment.paid) {
      console.log("Successfully", id);
      markAsProcessed(token, { id });
      alert("Succesfully Purchased");
      window.location.reload();
    }
  };
  //When store owner mark as 'Delivered', it will call the backend API and will be marked as 'Delivered'
  async function handleSubmit() {
    setOpen(false);
    if (markStatus === "Delivered") {
      await markAsDelivered(token, { id: data.id });
    }
    if (markStatus === "Processed") {
      await markAsProcessed(token, { id: data.id });
    }
    alert(`Successfully Marked as ${markStatus}`);
    window.location.reload();
  }
  console.log("Data", data);
  return (
    <>
      <Card className="kt-order-card">
        <Card.Header>
          <i className="flaticon2-contract"></i>
          <p className="order-name">Order </p>
          <p className="order-number"> {data.id}</p>
          {type === "inprocessing" && (
            <Chip
              icon={<DoneIcon />}
              label="Mark as Delivered"
              clickable
              className={classes.chip}
              color="primary"
              onClick={() => {
                setOpen(true);
                setMarkStatus("Delivered");
              }}
              variant="outlined"
            />
          )}
        </Card.Header>
        <Card.Body className="order-products">
          <div className="order-products__supplier">
            {type === "undelivered" && (
              <Chip label="UnDelivered" className={classes.chip} />
            )}
            {type === "inprocessing" && (
              <Chip
                label="In Processing"
                className={classes.chip}
                color="primary"
              />
            )}
            {type === "delivered" && (
              <Chip
                label="Delivered"
                className={classes.chip}
                color="secondary"
              />
            )}
            {type === "cancelled" && (
              <Chip label="Cancelled" className={classes.chip} />
            )}
          </div>

          <div className="row parent-order">
            <div className="col-md-2">
              <img
                alt=""
                className="order-product__img"
                src={data.variant.image}
              />
              <div className="order-product_details ">
                <p className="order-product__name">{data.variant.title}</p>
              </div>
            </div>
            <div className="col-md-8 flexbox">
              <p>{data.sku}</p>
            </div>
            <div className="col-md-2 flexbox">
              <p className="order-price">
                {Number.parseFloat(data.price).toFixed(2)} USD
              </p>
            </div>
          </div>
          {data.childOrders.map(order => (
            <Card key={order.id}>
              <Card.Body>
                <div className="row">
                  <div className="col-md-3">
                    <div className="order-product_details ">
                      <p className="">Customer: {order.client.name}</p>
                    </div>
                  </div>
                  <div className="col-md-5 flexbox">
                    <p>Order: {order.id}</p>
                  </div>
                  <div className="col-md-2 flexbox">
                    <p>Quantity: {order.quantity}</p>
                  </div>
                  <div className="col-md-2 flexbox">
                    {type === "undelivered" && (
                      <div className="d-flex btn-group-order">
                        <PayPalButton
                          amount={order.price * order.quantity}
                          onSuccess={payment => onSuccess(payment, order.id)}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="shipping-container">
                  <h5>Shipping Address</h5>
                  <div className="row">
                    <div className="shipping-details col-md-4">
                      <p>Country:</p>
                      <span>{order.shippingAddress.country_code}</span>
                    </div>
                    <div className="shipping-details col-md-4">
                      <p>State:</p>
                      <span>{order.shippingAddress.province}</span>
                    </div>
                    <div className="shipping-details col-md-4">
                      <p>City:</p>
                      <span>{order.shippingAddress.city}</span>
                    </div>
                    <div className="shipping-details col-md-4">
                      <p>Address 1:</p>
                      <span>{order.shippingAddress.address1}</span>
                    </div>
                    <div className="shipping-details col-md-4">
                      <p>Address 2:</p>
                      <span>{order.shippingAddress.address2}</span>
                    </div>
                    <div className="shipping-details col-md-4">
                      <p>Postal Code:</p>
                      <span>{order.shippingAddress.zip}</span>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Card.Body>
      </Card>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle id="draggable-dialog-title">
          Mark As {markStatus}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you want to mark this order as {markStatus}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary">
            Yes
          </Button>
          <Button onClick={() => setOpen(false)} color="primary">
            No
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default OrderPad;
