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
import "./order.pad.scss";
import PayPalButton from "./paypal.btn";
import { useSelector } from "react-redux";
// import { toast } from "react-toastify";
import { markAsProcessed, markAsDelivered } from "../crud/order.crud";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  chip: {
    marginLeft: "auto",
  },
}));

const OrderPad = (props) => {
  const classes = useStyles();
  const { type, data } = props;
  const token = useSelector((state) => state.auth.authToken);
  const [open, setOpen] = useState(false);
  const [markStatus, setMarkStatus] = useState(null);

  const onSuccess = (payment) => {
    console.log("Payment", payment);
    if (payment.paid) {
      // const {recipient_name, line1, line2, city, state, postal_code, country_code} = payment.address;
      markAsProcessed(token, { id: data.id, address: payment.address });
      alert("Succesfully Purchased");
      window.location.reload();
    }
  };

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
          {/* <p className="order-date">2020/01/28</p> */}
          {/* <p className="order-customer">Customer: </p> */}
          {/* <p className="order-customername"> */}
          {/* {data.client.first_name} ({data.client.email}) */}
          {/* </p> */}
          {/* <img src="/media/flags/034-china.svg" alt="Mandarin" /> */}
          {/* <i className="flaticon-email"></i> */}

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

            {type === "undelivered" && (
              <div className="d-flex btn-group-order">
                <PayPalButton
                  amount={data.price * data.quantity}
                  onSuccess={onSuccess}
                />
              </div>
            )}
          </div>
          <Card>
            <Card.Body>
              <div className="row">
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
                  <p>
                    {data.quantity} * {data.price} USD
                  </p>
                </div>
              </div>
              {type !== "undelivered" && (
                <div className="shipping-container">
                  <h5>Shipping Address</h5>
                  <div className="shipping-details">
                    <p>Country:</p>
                    <span>{data.shippingAddress.country_code}</span>
                  </div>
                  <div className="shipping-details">
                    <p>State:</p>
                    <span>{data.shippingAddress.state}</span>
                  </div>
                  <div className="shipping-details">
                    <p>City:</p>
                    <span>{data.shippingAddress.city}</span>
                  </div>
                  <div className="shipping-details">
                    <p>Address 1:</p>
                    <span>{data.shippingAddress.line1}</span>
                  </div>
                  <div className="shipping-details">
                    <p>Address 2:</p>
                    <span>{data.shippingAddress.line2}</span>
                  </div>
                  <div className="shipping-details">
                    <p>Postal Code:</p>
                    <span>{data.shippingAddress.postal_code}</span>
                  </div>
                </div>
              )}
            </Card.Body>
          </Card>
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
