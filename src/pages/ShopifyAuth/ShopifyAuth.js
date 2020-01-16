import React from "react";
import axios from "axios";
const qs = require("query-string");

export default class ShopifyAuth extends React.Component {
  componentDidMount() {
    const parsed = qs.parse(this.props.location.search);
    const { shop, hmac, code, state } = parsed;

    axios.defaults.baseURL = process.env.REACT_APP_BACKEND_ENDPOINT;

    console.log("DETAILS", parsed);
    axios
      .get("/shopify/callback", {
        params: {
          shop,
          hmac,
          code,
          state
        }
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return <div></div>;
  }
}
