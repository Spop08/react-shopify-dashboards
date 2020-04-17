import React, { Component } from "react";
import * as auth from "../../store/ducks/auth.duck";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { LayoutSplashScreen } from "../../../_metronic";
//Logout function
class Logout extends Component {
  componentDidMount() {
    console.log("LOGOUT");
    this.props.logout();
  }

  render() {
    const { hasAuthToken } = this.props;
    console.log("MAIN HOME", hasAuthToken);

    return <Redirect to="/main/home" />;
  }
}

export default connect(
  ({ auth }) => ({ hasAuthToken: Boolean(auth.authToken) }),
  auth.actions
)(Logout);
