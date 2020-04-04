import React from "react";
import Branding from "./Branding";
import Features from "./Features";
import Home from "./Home";
import Pricing from "./Pricing";
import Shipping from "./Shipping";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Footer from "./Footer";

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/main/home" component={Home} />
          <Route path="/main/branding" component={Branding} />
          <Route path="/main/pricing" component={Pricing} />
          <Route path="/main/shipping" component={Shipping} />
          <Route path="/main/features" component={Features} />
          <Route path="/main/dashboard" component={Dashboard} />
          <Redirect from="/main" to="/main/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
