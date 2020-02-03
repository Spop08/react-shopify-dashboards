import React, { Component } from "react";
import SProductPad from "../../components/sproduct.pad";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";
import { search_icon } from "../../icons/icons";
import "./SearchProductPage.scss";
import { clothing } from "../../icons/icons";
import { Link } from "@material-ui/core";

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
  componentCategories = () => {
    return (
      <div className="d-flex ct-categories">
        <div className="col-md-3">
          <Button variant="secondary btn-block d-flex">
            {clothing()}
            <span>Men's Clothing & Accessories</span>
          </Button>
        </div>
        <div className="col-md-3">
          <Button variant="secondary btn-block d-flex">
            {clothing()}
            <span>Women's Clothing & Accessories</span>
          </Button>
        </div>
        <div className="col-md-3">
          <Button variant="secondary btn-block d-flex">
            {clothing()}
            <span>Toys & Hobbies</span>
          </Button>
        </div>
        <div className="col-md-3">
          <Button variant="secondary btn-block d-flex">
            {clothing()}
            <span>Beauty & Health</span>
          </Button>
        </div>
        <div className="col-md-3">
          <Button variant="secondary btn-block d-flex">
            {clothing()}
            <span>Watches</span>
          </Button>
        </div>
        <div className="col-md-3">
          <Button variant="secondary btn-block d-flex">
            {clothing()}
            <span>Jewelry & Accessories</span>
          </Button>
        </div>
        <div className="col-md-3">
          <Link to="/app/category">
            <Button variant="secondary btn-block d-flex">
              {clothing()}
              <span>Home & Garden</span>
            </Button>
          </Link>
        </div>
        <div className="col-md-3">
          <Button variant="secondary btn-block d-flex">
            {clothing()}
            <span>Mother & Kids</span>
          </Button>
        </div>
      </div>
    );
  };
  render() {
    const { open } = this.state;
    const componentCategories = this.componentCategories;

    return (
      <div>
        <h3 className="page-title">Search Products</h3>
        <div className="kproduct-container">
          <div className="kt-searchbar">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  {search_icon()}
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
            <button
              type="button"
              className="btn btn-secondary btn-wide btn-import"
              onClick={this.handleClickOpen}
            >
              Import product by URL or ID
            </button>
          </div>
          {componentCategories()}
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
