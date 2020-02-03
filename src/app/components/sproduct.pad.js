import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import "./sproduct.pad.scss";

function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

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
    return (
      <div>
        <div class="kt-portlet kt-portlet--height-fluid kt-widget19">
          <div class="kt-portlet__body kt-portlet__body--fit kt-portlet__body--unfill">
            <Link to="/app/details">
              <div
                class="kt-widget19__pic kt-portlet-fit--top kt-portlet-fit--sides"
                style={{
                  minHeight: "300px",
                  backgroundImage: "url(/media/products/product11.jpg)"
                }}
              >
                <div class="discount-notice">
                  <span class="old-price">US $21.28</span>
                  <span class="badge badge-discount">44% off</span>
                </div>
              </div>
            </Link>
          </div>
          <div class="kt-portlet__body">
            <div>
              <div class="product-card-meta">
                <div class="product-card-title">
                  <a>
                    ADBOOV High Top Sneakers Women Knit Upper Breathable Sock
                    Shoes Woman Thick Sole 5 CM Fashion sapato feminino Black /
                    White
                  </a>
                </div>
              </div>
              <div class="product-price-wrapper">
                <h4>
                  <span class="product-card-price">US $29.99</span>
                </h4>
              </div>
              <div>
                <div class="product-card__reviews">
                  <div>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <label class="product-card__reviews-count">(2)</label>
                </div>
                <div class="product-card__stat">
                  <div class="product-card__stat-name">
                    <i className="flaticon2-plus" />
                    Imports
                  </div>
                  <div class="product-card__stat-value">9016</div>
                </div>
                <div class="product-card__stat">
                  <div class="product-card__stat-name">
                    <i className="flaticon-eye" />
                    Pageviews
                  </div>
                  <div class="product-card__stat-value">3834</div>
                </div>
                <div class="product-card__stat">
                  <div class="product-card__stat-name">
                    <i className="flaticon2-delivery-truck" />
                    Orders
                  </div>
                  <div class="product-card__stat-value">1</div>
                </div>
              </div>
              <button
                type="button"
                class="btn btn-label-success btn-upper btn-product-import"
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
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
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
