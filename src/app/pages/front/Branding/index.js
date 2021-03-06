import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import MainNav from "../MainNav";

import "../styles.css";

//Branding Home Page
class Branding extends Component {
  render() {
    return (
      <div style={{ background: "white" }}>
        <MainNav currentItem="branding" />

        <div className="mw-100 p-0 d-flex flex-column justify-content-center align-items-center home-back">
          <Container
            style={{ height: "500px" }}
            className="text-white d-flex flex-column justify-content-center align-items-center"
          >
            <p>
              <br />
            </p>
            <h2 className="text-large">Branding</h2>
            <p className="text-medium-p py-4">
              The ultimate dropshipping app for all your dropshipping needs.
            </p>
          </Container>
        </div>

        <Container style={{ marginTop: "100px" }}>
          <Grid container spacing={3}>
            <Grid
              item
              xs={6}
              className="d-flex flex-column justify-content-center"
              style={{ padding: "6%" }}
            >
              <h2 className="text-medium-h">Customized Scotch Tape</h2>
              <p>
                Customized scotch tape with your own logo on it, which makes
                each of you package looks more professional, and your brand more
                trustworthy.
              </p>
            </Grid>
            <Grid item xs={6} style={{ padding: "6%" }}>
              <div>
                <img
                  className="w-100"
                  src="https://shopifyfile.oss-us-west-1.aliyuncs.com/attached/website/custom-2.jpg"
                  alt=""
                />
              </div>
            </Grid>
          </Grid>
        </Container>

        <Container style={{ paddingTop: "60px", paddingBottom: "60px" }}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <div>
                <img
                  className="w-100"
                  src="https://shopifyfile.oss-us-west-1.aliyuncs.com/attached/website/packing-box.jpg"
                  alt=""
                />
              </div>
            </Grid>
            <Grid
              item
              xs={6}
              className="d-flex flex-column justify-content-center"
            >
              <h2 className="text-medium-h">
                Many drop shipping businesses are facing challenges with slow
                delivery time. Eprolo has developed its own Express Shipping
                channel, which can shorten average delivery time to 5-8 days.
              </h2>
            </Grid>
          </Grid>
        </Container>

        <Container className="py-5">
          <Grid container spacing={6}>
            <Grid
              item
              xs={6}
              className="d-flex flex-column justify-content-center"
            >
              <h2 className="text-medium-h">
                When you have an order of multiple items, you can save more
                money with us. We reward our drop shipper with discount for
                orders with multiple items. Only us can do this!
              </h2>
            </Grid>
            <Grid item xs={6}>
              <div>
                <img
                  className="w-100"
                  src="http://www.eprolo.com/img/custom-4.png"
                  alt=""
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Branding;
