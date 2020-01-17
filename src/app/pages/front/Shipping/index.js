import React, { Component } from "react";
import Container from "@material-ui/core/Container";

import MainNav from "../MainNav";

import "../styles.css";

class Shipping extends Component {
  render() {
    return (
      <div style={{ background: "white" }}>
        <MainNav currentItem="shipping" />

        <div className="mw-100 p-0 d-flex flex-column justify-content-center align-items-center home-back">
          <Container
            style={{ height: "500px" }}
            className="text-white d-flex flex-column justify-content-center align-items-center"
          >
            <p>
              <br />
            </p>
            <h2 className="text-large">Shipping</h2>
            <p className="text-medium-p py-4">
              We solve dropshipper's pain point by providing Free Shipping
              worldwide.
            </p>
          </Container>
        </div>

        <Container style={{ textAlign: "center", marginTop: "100px" }}>
          <h2 className="text-large-1">UDS US Express</h2>
          <div className="mt-5">
            <img src="http://www.eprolo.com/img/us-express.png" alt="" />
          </div>
        </Container>

        <Container style={{ textAlign: "center", marginTop: "100px" }}>
          <h2 className="text-large-1">
            What are the advantages of UDS Express Shipping?
          </h2>
          <h4 style={{ color: "#394F3C" }} className="mt-5">
            1.Shorten delivery time, therefore, upgraded customer shopping
            experience.
          </h4>
          <h4 style={{ color: "#394F3C" }}>
            2.Stable delivery time even during busy periods like Christmas and
            Black Friday.
          </h4>
          <h4 style={{ color: "#394F3C" }}>
            3.Your customer will see the package is shipped from the US
            according to the tracking information.
          </h4>
        </Container>
      </div>
    );
  }
}

export default Shipping;
