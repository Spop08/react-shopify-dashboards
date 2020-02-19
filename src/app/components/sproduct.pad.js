import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./sproduct.pad.scss";

export default class SProductPad extends Component {
  state = {
    open: false
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    const { data } = this.props;
    return (
      <div>
        <div className="kt-portlet kt-portlet--height-fluid kt-widget19">
          <div className="kt-portlet__body kt-portlet__body--fit kt-portlet__body--unfill">
            <Link to="/app/details">
              <div
                className="kt-widget19__pic kt-portlet-fit--top kt-portlet-fit--sides"
                style={{
                  minHeight: "300px",
                  backgroundImage: `url(${data.images[0].src})`
                }}
              >
                <div className="discount-notice">
                  <span className="old-price">US $29.99</span>
                  <span className="badge badge-discount">44% off</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="kt-portlet__body">
            <div>
              <div className="product-card-meta">
                <div className="product-card-title">
                  <p>{data.title}</p>
                </div>
              </div>
              <div className="product-price-wrapper">
                <h4>
                  <span className="product-card-price">
                    US ${data.variants[0].price}
                  </span>
                </h4>
              </div>
              <div>
                <div className="product-card__reviews">
                  <div>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <label className="product-card__reviews-count">(2)</label>
                </div>
                <div className="product-card__stat">
                  <div className="product-card__stat-name">
                    <i className="flaticon2-plus" />
                    Imports
                  </div>
                  <div className="product-card__stat-value">9016</div>
                </div>
                <div className="product-card__stat">
                  <div className="product-card__stat-name">
                    <i className="flaticon-eye" />
                    Pageviews
                  </div>
                  <div className="product-card__stat-value">3834</div>
                </div>
                <div className="product-card__stat">
                  <div className="product-card__stat-name">
                    <i className="flaticon2-delivery-truck" />
                    Orders
                  </div>
                  <div className="product-card__stat-value">1</div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-label-success btn-upper btn-product-import"
                onClick={this.handleClickOpen}
              >
                Add to Import List
              </button>
            </div>
          </div>
        </div>

        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle id="draggable-dialog-title">
            Add to Import List
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you want to add this product to your import list?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              No
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
