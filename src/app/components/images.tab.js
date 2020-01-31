import React, { Component } from "react";
import { toAbsoluteUrl } from "../../_metronic/utils/utils";
import "./images.tab.scss";

export default class ImagesTab extends Component {
  render() {
    return (
      <div className="row images-tab">
        <div className="col-md-3">
          <div className="image-container">
            <img alt="" src={toAbsoluteUrl("/media/products/product6.jpg")} />
          </div>
        </div>
        <div className="col-md-3">
          <div className="image-container">
            <img alt="" src={toAbsoluteUrl("/media/products/product6.jpg")} />
          </div>
        </div>
        <div className="col-md-3">
          <div className="image-container">
            <img alt="" src={toAbsoluteUrl("/media/products/product6.jpg")} />
          </div>
        </div>
        <div className="col-md-3">
          <div className="image-container">
            <img alt="" src={toAbsoluteUrl("/media/products/product6.jpg")} />
          </div>
        </div>
        <div className="col-md-3">
          <div className="image-container">
            <img alt="" src={toAbsoluteUrl("/media/products/product6.jpg")} />
          </div>
        </div>
        <div className="col-md-3">
          <div className="image-container">
            <img alt="" src={toAbsoluteUrl("/media/products/product6.jpg")} />
          </div>
        </div>
        <div className="col-md-3">
          <div className="image-container">
            <img alt="" src={toAbsoluteUrl("/media/products/product6.jpg")} />
          </div>
        </div>
      </div>
    );
  }
}
