import React from "react";
import { Card, Button } from "react-bootstrap";
import "./ProductDetailsPage.scss";

export default class ProductDetailsPage extends React.Component {
  componentDetails = () => {
    return (
      <Card>
        <Card.Body>
          <div className="row">
            <div className="col-md-1">
              <div className="expansion__pic">
                <img
                  alt=""
                  className="expansion__img"
                  src="https://ae01.alicdn.com/kf/H8cb212f003164fb5b9137e0d7efc0a38Q/2019-Winter-Shoes-Men-Warm-Boots-Men-Fur-High-Quality-Split-Leather-Wterproof-Ankle-Snow-Boots.jpg_640x640.jpg"
                />
              </div>
              <div className="expansion__pic">
                <img
                  alt=""
                  className="expansion__img"
                  src="https://ae01.alicdn.com/kf/H8cb212f003164fb5b9137e0d7efc0a38Q/2019-Winter-Shoes-Men-Warm-Boots-Men-Fur-High-Quality-Split-Leather-Wterproof-Ankle-Snow-Boots.jpg_640x640.jpg"
                />
              </div>
              <div className="expansion__pic">
                <img
                  alt=""
                  className="expansion__img"
                  src="https://ae01.alicdn.com/kf/H8cb212f003164fb5b9137e0d7efc0a38Q/2019-Winter-Shoes-Men-Warm-Boots-Men-Fur-High-Quality-Split-Leather-Wterproof-Ankle-Snow-Boots.jpg_640x640.jpg"
                />
              </div>
            </div>
            <div className="col-md-5">
              <div className="">
                <img
                  alt=""
                  className="expansion__img"
                  src="https://ae01.alicdn.com/kf/H8cb212f003164fb5b9137e0d7efc0a38Q/2019-Winter-Shoes-Men-Warm-Boots-Men-Fur-High-Quality-Split-Leather-Wterproof-Ankle-Snow-Boots.jpg_640x640.jpg"
                />
              </div>
            </div>
            <div className="col-md-6">
              <p className="product-title">
                New Style LED Amplifier Makeup Mirror 5X10X Gooseneck Sucker
                Bathroom Mirror MY Flexible Mirror
              </p>
              <div className="d-flex">
                <p>132 in stock</p>
                <a className="text-link ml-auto">View product on AliExpress</a>
              </div>
              <Button variant="success" className="btn-import">
                + Add to Import List
              </Button>
              <hr></hr>
              <div className="row ct-list">
                <div className="col-md-3">Price</div>
                <div className="col-md-9">
                  <span className="badge-price">US $12.77 - $14.3</span>
                  <span className="badge-discount">40% off</span>
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
              <div className="row ct-list">
                <div className="col-md-3">Shipping</div>
                <div className="col-md-9">
                  <p className="text-delivery">
                    Estimated delivery time 39 days
                  </p>
                </div>
              </div>

              <div className="row ct-list">
                <div className="col-md-3">Supplier</div>
                <div className="col-md-9">
                  <label className="badge-color">
                    96.40% positive feedback
                  </label>
                  <label className="badge-color">
                    Open for less than a year
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  };
  componentStatistics = () => {
    return (
      <Card className="ct-statistics">
        <Card.Header>Product Statistics</Card.Header>
        <Card.Body>
          <div className="row">
            <div className="col-md-2 ">
              <div className="product-card__reviews">
                <div>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <label class="product-card__reviews-count">(2)</label>
              </div>
              <p className="product-statistics__icon">
                2 reviews on Aliexpress
              </p>
              <a className="text-link">Read Reviews</a>
            </div>

            <div className="col-md-2">
              <p className="product-statistics__title">Imports</p>
              <div className="d-flex product-statistics__icon">
                <i className="flaticon2-plus" />
                <p>2240</p>
              </div>
              <p className="product-statistics__desc">
                This product has been added to 2240 Oberlo stores
              </p>
            </div>

            <div className="col-md-2">
              <p className="product-statistics__title">Pageviews</p>
              <div className="d-flex product-statistics__icon">
                <i className="flaticon-eye" />
                <p>0</p>
              </div>
              <p className="product-statistics__desc">
                This product was viewed 0 times across all Shopify stores
              </p>
            </div>

            <div className="col-md-3">
              <p className="product-statistics__title">Orders (30 days)</p>
              <div className="d-flex product-statistics__icon">
                <i className="flaticon2-delivery-truck" />
                <p>4</p>
              </div>
              <p className="product-statistics__desc">
                This product has been ordered through Oberlo and/or AliExpress 4
                times in the past 30 days.
              </p>
            </div>

            <div className="col-md-3">
              <p className="product-statistics__title">Orders (6 months)</p>
              <div className="d-flex product-statistics__icon">
                <i className="flaticon2-delivery-truck" />
                <p>17</p>
              </div>
              <p className="product-statistics__desc">
                his product has been ordered through Oberlo and/or AliExpress 17
                times in the past 6 months.
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  };
  render() {
    return (
      <div className="kproduct-container container-details">
        <h3 className="page-title">Product Details</h3>
        {this.componentDetails()}
        {this.componentStatistics()}
      </div>
    );
  }
}
