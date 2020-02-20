import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./sproduct.pad.scss";
import { addToImport } from "../crud/product.crud";
import { connect } from "react-redux";

class SProductPad extends Component {
  state = {
    open: false
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleSubmit = async () => {
    const { data, token } = this.props;
    const res = await addToImport(token, data._id);
    console.log("Add to Import", res.status);
    this.handleClose();
  };
  render() {
    const { open } = this.state;
    const { data } = this.props;
    const sale_price = data.variants[0].salePrice;
    const origin_price = data.variants[0].price;
    const price = sale_price ? sale_price : origin_price;
    const off_rate = Math.floor(
      ((parseFloat(origin_price) - parseFloat(sale_price)) /
        parseFloat(origin_price)) *
        100
    );
    return (
      <div>
        <div className="kt-portlet kt-portlet--height-fluid kt-widget19">
          <div className="kt-portlet__body kt-portlet__body--fit kt-portlet__body--unfill">
            <Link to={"/app/details/" + data._id}>
              <div
                className="kt-widget19__pic kt-portlet-fit--top kt-portlet-fit--sides"
                style={{
                  minHeight: "300px",
                  backgroundImage: `url(${data.images[0].src})`
                }}
              >
                {sale_price && (
                  <div className="discount-notice">
                    <span className="old-price">US ${origin_price}</span>
                    <span className="badge badge-discount">
                      {off_rate}% off
                    </span>
                  </div>
                )}
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
                  <span className="product-card-price">US ${price}</span>
                </h4>
              </div>
              <div>
                {/* <div className="product-card__reviews">
                  <div>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <label className="product-card__reviews-count">(2)</label>
                </div> */}
                <div className="product-card__stat">
                  <div className="product-card__stat-name">
                    <i className="flaticon2-plus" />
                    Imports
                  </div>
                  <div className="product-card__stat-value">
                    {data.addedCount}
                  </div>
                </div>
                <div className="product-card__stat">
                  <div className="product-card__stat-name">
                    <i className="flaticon-eye" />
                    Pageviews
                  </div>
                  <div className="product-card__stat-value">
                    {data.importedCount}
                  </div>
                </div>
                <div className="product-card__stat">
                  <div className="product-card__stat-name">
                    <i className="flaticon2-delivery-truck" />
                    Orders
                  </div>
                  <div className="product-card__stat-value">
                    {data.soldCount}
                  </div>
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
            <Button onClick={this.handleSubmit} color="primary">
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { token: state.auth.authToken };
}
export default connect(mapStateToProps)(SProductPad);
