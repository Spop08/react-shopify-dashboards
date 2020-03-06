import React, { Component } from "react";
import SProductPad from "../../components/sproduct.pad";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";
import { search_icon, clothing } from "../../icons";
import { Link } from "react-router-dom";
import "./SearchProductPage.scss";
import { fetchHotProducts, fetchSaleProducts } from "../../crud/product.crud";
import { connect } from "react-redux";

class SearchProductPage extends Component {
  state = {
    open: false,
    hot_products: [],
    sale_products: []
  };
  async componentDidMount() {
    const { token } = this.props;
    const hot_products = await fetchHotProducts(token, 5);
    const sale_products = await fetchSaleProducts(token);
    console.log(hot_products);
    this.setState({ hot_products, sale_products });
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleSubmit = () => {
    
    this.setState({ open: false });
  };
  componentCategories = () => {
    return (
      <div className="d-flex ct-categories">
        <div className="col-md-3">
          <Link to="/app/category/Clothes">
            <Button variant="secondary btn-block d-flex">
              {clothing()}
              <span>Men's Clothing & Accessories</span>
            </Button>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/app/category/Clothes">
            <Button variant="secondary btn-block d-flex">
              {clothing()}
              <span>Women's Clothing & Accessories</span>
            </Button>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/app/category/Clothes">
            <Button variant="secondary btn-block d-flex">
              {clothing()}
              <span>Toys & Hobbies</span>
            </Button>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/app/category/Clothes">
            <Button variant="secondary btn-block d-flex">
              {clothing()}
              <span>Beauty & Health</span>
            </Button>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/app/category/Clothes">
            <Button variant="secondary btn-block d-flex">
              {clothing()}
              <span>Watches</span>
            </Button>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/app/category/Clothes">
            <Button variant="secondary btn-block d-flex">
              {clothing()}
              <span>Jewelry & Accessories</span>
            </Button>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/app/category/Clothes">
            <Button variant="secondary btn-block d-flex">
              {clothing()}
              <span>Home & Garden</span>
            </Button>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/app/category/Clothes">
            <Button variant="secondary btn-block d-flex">
              {clothing()}
              <span>Mother & Kids</span>
            </Button>
          </Link>
        </div>
      </div>
    );
  };
  render() {
    const { open, hot_products, sale_products } = this.state;
    const componentCategories = this.componentCategories;
    const componentHotProducts = hot_products.map((data, index) => (
      <div className="col-md-12 col-lg-6 col-xl-3" key={index}>
        <SProductPad data={data} />
      </div>
    ));
    const componentSaleProducts = sale_products.map((data, index) => (
      <div className="col-md-12 col-lg-6 col-xl-3" key={index}>
        <SProductPad data={data} />
      </div>
    ));
    return (
      <div>
        <h3 className="page-title">Search Products</h3>
        <div className="kproduct-container">
          <div className="kt-searchbar">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  {search_icon()}
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-describedby="basic-addon1"
              />
              <button type="button" className="btn btn-primary btn-wide">
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

          <h2>HighLighted Products</h2>
          <div className="row">{componentHotProducts}</div>
          <h2>Sale Products</h2>
          <div className="row">{componentSaleProducts}</div>
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
            <Button variant="success" onClick={this.handleSubmit}>
              Import
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { token: state.auth.authToken };
}
export default connect(mapStateToProps)(SearchProductPage);
