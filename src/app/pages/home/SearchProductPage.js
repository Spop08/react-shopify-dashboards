import React, { Component } from "react";
import SProductPad from "../../components/sproduct.pad";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";
import "./SearchProductPage.scss";

export default class SearchProductPage extends Component {
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
        <h3 className="page-title">Search Products</h3>
        <div className="kproduct-container">
          <div className="kt-searchbar">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                    class="kt-svg-icon"
                  >
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <rect x="0" y="0" width="24" height="24"></rect>
                      <path
                        d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                        fill="#000000"
                        fillRule="nonzero"
                        opacity="0.3"
                      ></path>
                      <path
                        d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                        fill="#000000"
                        fillRule="nonzero"
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Search"
                aria-describedby="basic-addon1"
              />
              <button type="button" class="btn btn-primary btn-wide">
                Search
              </button>
            </div>
          </div>
          <div className="container-import">
            <a href="/app/category" className="btn-import">
              <button type="button" className="btn btn-secondary btn-wide ">
                Categories
              </button>
            </a>
            <button
              type="button"
              className="btn btn-secondary btn-wide "
              onClick={this.handleClickOpen}
            >
              Import product by URL or ID
            </button>
          </div>
          <h2>Free Shipping From AliExpress Warehouses</h2>
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
          </div>

          <h2>Women Shoes</h2>
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
          </div>
        </div>
        <Modal show={open} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Import product by URL or ID</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label htmlFor="basic-url">Product URL</label>
            <InputGroup className="mb-3">
              <FormControl id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
            <p>Or</p>
            <label htmlFor="basic-url">Product ID</label>
            <InputGroup className="mb-3">
              <FormControl id="basic-id" aria-describedby="basic-addon3" />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={this.handleClose}>
              Import
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
