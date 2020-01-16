import React, { Component, lazy, Suspense } from "react";
const nonce = require("nonce")();

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storename: ""
    };
  }

  changeStoreName = e => {
    this.setState({ storename: e.target.value });
  };
  connectStore = () => {
    const {
      REACT_APP_SHOPIFY_API_KEY,
      REACT_APP_SHOPIFY_SHOP,
      REACT_APP_DOMAIN,
      REACT_APP_SCOPES
    } = process.env;
    const state = nonce();
    const redirectUri = REACT_APP_DOMAIN + "/shopify/callback";
    const installUrl =
      "https://" +
      REACT_APP_SHOPIFY_SHOP +
      "/admin/oauth/authorize?client_id=" +
      REACT_APP_SHOPIFY_API_KEY +
      "&scope=" +
      REACT_APP_SCOPES +
      "&state=" +
      state +
      "&redirect_uri=" +
      redirectUri;

    window.location = installUrl;
  };
  render() {
    console.log(this.state);
    return (
      <div className="animated fadeIn">
        <input onChange={this.changeStoreName} />
        <button onClick={this.connectStore}>OK</button>
      </div>
    );
  }
}

export default Dashboard;
