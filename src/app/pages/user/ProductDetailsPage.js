import React from "react";
import { Card, Button } from "react-bootstrap";
import "./ProductDetailsPage.scss";

export default class ProductDetailsPage extends React.Component {
  state = {
    selectedImg: 0
  };
  componentDidMount() {
    const param_id = this.props.match.params.id;
    console.log("PARAM", param_id);
  }
  componentDetails = () => {
    const { selectedImg } = this.state;
    console.log(this.props);
    const { data } = this.props.location;
    console.log(data);
    const sale_price = data.variants[0].salePrice;
    const origin_price = data.variants[0].price;
    const price = sale_price ? sale_price : origin_price;
    const off_rate = Math.floor(
      ((parseFloat(origin_price) - parseFloat(sale_price)) /
        parseFloat(origin_price)) *
        100
    );
    const images = data.images.map((item, index) => (
      <div
        className={"expansion__pic" + (index === selectedImg ? " show" : "")}
        key={index}
        onClick={() => this.setState({ selectedImg: index })}
      >
        <img alt="" className="expansion__img" src={item.src} />
      </div>
    ));
    return (
      <Card>
        <Card.Body>
          <div className="row">
            <div className="col-md-1">{images}</div>
            <div className="col-md-5">
              <div className="d-flex">
                <img
                  alt=""
                  className="expansion__feature_img"
                  src={data.images[selectedImg].src}
                />
              </div>
            </div>
            <div className="col-md-6">
              <p className="product-title">{data.title}</p>

              <Button variant="success" className="btn-import">
                + Add to Import List
              </Button>
              <hr></hr>
              <div className="row ct-list">
                <div className="col-md-3">Price</div>
                <div className="col-md-9">
                  <span className="badge-price">US ${price}</span>
                  {sale_price && (
                    <span className="badge-discount">{off_rate}% off</span>
                  )}
                </div>
              </div>
              <div className="row ct-list">
                <div className="col-md-3">Color</div>
                <div className="col-md-9">
                  <label className="badge-color">Sucker</label>
                  <label className="badge-color">
                    Custom Built Contact Customer Service
                  </label>
                  <label className="badge-color">Gooseneck</label>
                  <label className="badge-color">Extendable Desktop</label>
                </div>
              </div>

              <div className="row ct-list">
                <div className="col-md-3">Size</div>
                <div className="col-md-9">
                  <label className="badge-color">onesize 2</label>
                  <label className="badge-color">onesize 3</label>
                  <label className="badge-color">onesize</label>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  };
  componentStatistics = () => {
    const { data } = this.props.location;
    console.log(this.props);
    return (
      <Card className="ct-statistics">
        <Card.Header>Product Statistics</Card.Header>
        <Card.Body>
          <div className="row">
            {/* <div className="col-md-2 ">
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
              <p className="product-statistics__icon">
                2 reviews on Aliexpress
              </p>
              <a className="text-link" href="/">
                Read Reviews
              </a>
            </div> */}

            <div className="col-md-4">
              <p className="product-statistics__title">Imports</p>
              <div className="d-flex product-statistics__icon">
                <i className="flaticon2-plus" />
                <p>{data.addedCount}</p>
              </div>
              <p className="product-statistics__desc">
                This product has been added to {data.addedCount} UDS stores
              </p>
            </div>

            <div className="col-md-4">
              <p className="product-statistics__title">Pageviews</p>
              <div className="d-flex product-statistics__icon">
                <i className="flaticon-eye" />
                <p>{data.importedCount}</p>
              </div>
              <p className="product-statistics__desc">
                This product was viewed {data.importedCount} times across all
                Shopify stores
              </p>
            </div>

            <div className="col-md-4">
              <p className="product-statistics__title">Orders</p>
              <div className="d-flex product-statistics__icon">
                <i className="flaticon2-delivery-truck" />
                <p>{data.soldCount}</p>
              </div>
              <p className="product-statistics__desc">
                This product has been ordered through UDS and/or AliExpress{" "}
                {data.soldCount}
                times.
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  };
  render() {
    const { data } = this.state;
    return (
      <div className="kproduct-container container-details">
        {data && (
          <div>
            <h3 className="page-title">Product Details</h3>
            <this.componentDetails></this.componentDetails>
            <this.componentStatistics></this.componentStatistics>
          </div>
        )}
      </div>
    );
  }
}
