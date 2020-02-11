import React, { Component } from "react";
import SProductPad from "../../components/sproduct.pad";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button } from "react-bootstrap";
import ExpansionCategory from "../../components/expansion.category";
import ExpansionPrice from "../../components/expansion.price";
import "./CategoryPage.scss";

export default class CategoryPage extends Component {
  state = {
    open: false
  };
  constructor(props) {
    super(props);
    console.log(props.location.state.type);
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    return (
      <div className="category-page">
        <h3 className="page-title">Search Products</h3>
        <div className="row">
          <div className="col-md-3 container-expansion">
            <ExpansionCategory />
            <ExpansionPrice />
          </div>
          <div className="col-md-9">
            <div className="container-import">
              <button
                type="button"
                className="btn btn-secondary btn-wide btn-import"
                onClick={this.handleClickOpen}
              >
                Import product by URL or ID
              </button>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-6 col-xl-3">
                <SProductPad />
              </div>
              <div className="col-md-12 col-lg-6 col-xl-3">
                <SProductPad />
              </div>
              <div className="col-md-12 col-lg-6 col-xl-3">
                <SProductPad />
              </div>
              <div className="col-md-12 col-lg-6 col-xl-3">
                <SProductPad />
              </div>

              <div className="col-md-12 col-lg-6 col-xl-3">
                <SProductPad />
              </div>
              <div className="col-md-12 col-lg-6 col-xl-3">
                <SProductPad />
              </div>
              <div className="col-md-12 col-lg-6 col-xl-3">
                <SProductPad />
              </div>
              <div className="col-md-12 col-lg-6 col-xl-3">
                <SProductPad />
              </div>
            </div>
          </div>
        </div>

        <Dialog
          open={open}
          onClose={this.handleClose}
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
