import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";

import Card from "react-bootstrap/Card";
import "./order.pad.scss";

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

export default function OrderPad(props) {
  const classes = useStyles();
  const { type } = props;
  function handleDelete() {
    alert("You want mark as Shipped?");
  }
  return (
    <Card>
      <Card.Header>
        <i className="flaticon2-contract"></i>
        <p className="order-name">Order </p>
        <p className="order-number"> AE5046</p>
        <p className="order-date">2020/01/28</p>
        <p className="order-customer">Customer: </p>
        <p className="order-customername">Li Wei</p>
        <img src="/media/flags/034-china.svg" alt="Mandarin" />
        {/* <i className="flaticon-email"></i> */}
        <Chip
          icon={<DoneIcon />}
          label="Mark as Shipped"
          clickable
          className={classes.chip}
          color="primary"
          onClick={handleDelete}
          variant="outlined"
        />
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

          <p className="order-customer">Supplier:</p>
          <p className="order-customername">Tang Tang Store</p>
          {type === "undelivered" && (
            <button type="button" class="btn btn-warning btn-wide">
              Order Product
            </button>
          )}
          {type === "inprocessing" && (
            <button type="button" class="btn btn-primary btn-wide">
              Get Tracking Code
            </button>
          )}
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
}
