import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import Card from "react-bootstrap/Card";
import "./order.pad.scss";
import PayPalButton from "./paypal.btn";

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

const OrderPad = props => {
  const classes = useStyles();
  const { type, data } = props;
  function handleDelete() {
    alert("You want mark as Shipped?");
  }
  const submitOrder = () => {
    console.log("submitOrder");
  };
  console.log(data);
  return (
    <Card className="kt-order-card">
      <Card.Header>
        <i className="flaticon2-contract"></i>
        <p className="order-name">Order </p>
        <p className="order-number"> {data._id}</p>
        <p className="order-date">2020/01/28</p>
        <p className="order-customer">Customer: </p>
        <p className="order-customername">Li Wei (China)</p>
        {/* <img src="/media/flags/034-china.svg" alt="Mandarin" /> */}
        {/* <i className="flaticon-email"></i> */}
        {type === "undelivered" && (
          <Chip
            icon={<DoneIcon />}
            label="Mark as Processed"
            clickable
            className={classes.chip}
            color="primary"
            onClick={handleDelete}
            variant="outlined"
          />
        )}
        {type === "inprocessing" && (
          <Chip
            icon={<DoneIcon />}
            label="Mark as Delivered"
            clickable
            className={classes.chip}
            color="primary"
            onClick={handleDelete}
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
              <PayPalButton amount={0.99} />
              <button
                type="button"
                className="btn btn-info btn-wide"
                onClick={submitOrder}
              >
                Order Product
              </button>
            </div>
          )}
          {/* {type === "inprocessing" && (
            <button type="button" className="btn btn-primary btn-wide">
              Get Tracking Code
            </button>
          )} */}
          {/* {type === "delivered" && (
            <Chip
              label="Delivered"
              className={classes.chip}
              color="secondary"
            />
          )}
          {type === "cancelled" && (
            <Chip label="Cancelled" className={classes.chip} />
          )} */}
        </div>
        <Card>
          <Card.Body>
            <div className="row">
              <div className="col-md-4">
                <img
                  alt=""
                  className="order-product__img"
                  src="https://ae01.alicdn.com/kf/H170b706c280948f18fad2a4a8dd6cfc3P/2019-Winter-Shoes-Men-Warm-Boots-Men-Fur-High-Quality-Split-Leather-Wterproof-Ankle-Snow-Boots.jpg"
                />
                <div className="order-product_details">
                  <p className="order-product__name">T-Rex Skeleton Necklace</p>
                  <p>145974-antique-silver</p>
                </div>
              </div>
              <div className="col-md-3">
                <p>Antique Silver</p>
              </div>
              <div className="col-md-3">
                <p>No Tracking Number</p>
              </div>
              <div className="col-md-2">
                <p>1 * 26.99 USD</p>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <div className="row">
              <div className="col-md-4">
                <img
                  alt=""
                  className="order-product__img"
                  src="https://ae01.alicdn.com/kf/H170b706c280948f18fad2a4a8dd6cfc3P/2019-Winter-Shoes-Men-Warm-Boots-Men-Fur-High-Quality-Split-Leather-Wterproof-Ankle-Snow-Boots.jpg"
                />
                <div className="order-product_details">
                  <p className="order-product__name">T-Rex Skeleton Necklace</p>
                  <p>145974-antique-silver</p>
                </div>
              </div>
              <div className="col-md-3">
                <p>Antique Silver</p>
              </div>
              <div className="col-md-3">
                <p>No Tracking Number</p>
              </div>
              <div className="col-md-2">
                <p>1 * 26.99 USD</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
};

export default OrderPad;
