import React, { Component } from "react";
import { connect } from "react-redux";
import * as auth from "../store/ducks/auth.duck";
const queryString = require("query-string");

//Auth CallBack for connecting Shopify store
class ShopifyAuthCallBack extends Component {
  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);
    const { shop } = parsed;

    this.props.connectStore(shop);
    window.location = "/app/dashboard";
  }
  render() {
    return <div></div>;
  }
}

export default connect(null, auth.actions)(ShopifyAuthCallBack);
