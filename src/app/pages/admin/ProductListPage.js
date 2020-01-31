import React, { Component } from "react";
import AProductPad from "../../components/aproduct.pad";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";
// import "./SearchProductPage.scss";

export default class ProductListPage extends Component {
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
        <h3 className="page-title">Product List</h3>
        <div className="kproduct-container">
          <div className="container-import">
            <a href="/app/category" className="btn-import">
              <button type="button" className="btn btn-secondary btn-wide ">
                Categories
              </button>
            </a>
          </div>
          <h2>Men Clothes</h2>
          <div className="row">
            <div className="col-md-12 col-lg-6 col-xl-3">
              <AProductPad />
            </div>
            <div className="col-md-12 col-lg-6 col-xl-3">
              <AProductPad />
            </div>
            <div className="col-md-12 col-lg-6 col-xl-3">
              <AProductPad />
            </div>
            <div className="col-md-12 col-lg-6 col-xl-3">
              <AProductPad />
            </div>
          </div>

          <h2>Women Shoes</h2>
          <div className="row">
            <div className="col-md-12 col-lg-6 col-xl-3">
              <AProductPad />
            </div>
            <div className="col-md-12 col-lg-6 col-xl-3">
              <AProductPad />
            </div>
            <div className="col-md-12 col-lg-6 col-xl-3">
              <AProductPad />
            </div>
            <div className="col-md-12 col-lg-6 col-xl-3">
              <AProductPad />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
