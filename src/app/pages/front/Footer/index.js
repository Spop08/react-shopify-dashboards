import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import "./styles.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <div
          className="mw-100 p-0 d-flex flex-column justify-content-center align-items-center"
          style={{ marginTop: "100px" }}
        >
          <h2 className="main-large-1" style={{ color: "#394F3C" }}>
            Grow your dropshipping business today!
          </h2>
          <button className="signup-btn mt-4">
            <a href="/auth/registration">Get Start Now</a>
          </button>
        </div>

        <div style={{ background: "#fafcfa" }} className="p-5 mt-5">
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <img
                  alt="UDS LOGO"
                  src="http://www.eprolo.com/img/logo-green.png"
                />
                <p className="pt-3" style={{ color: "#394F3C" }}>
                  We specialise in DROPSHIPPING and PRODUCT SOURCING. We will
                  take care of all your daily orders and ship them directly to
                  your customers! Start to grow your ecommerce store now with
                  EPROLO!
                </p>
                <span>
                  <a
                    title="www.facebook.com"
                    rel="nofollow"
                    href="https://www.facebook.com/"
                  >
                    <img
                      src="http://www.eprolo.com/img/facebook_t.png"
                      alt="icon"
                    />
                  </a>
                </span>
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a
                    rel="nofollow noopener noreferrer"
                    href="https://twitter.com/"
                    target="_blank"
                  >
                    <img
                      src="http://www.eprolo.com/img/twitter_t.png"
                      alt="icon"
                    />
                  </a>
                </span>
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a
                    rel="nofollow noopener noreferrer"
                    href="https://www.youtube.com/"
                    target="_blank"
                  >
                    <img
                      src="http://www.eprolo.com/img/youtube_t.png"
                      alt="icon"
                    />
                  </a>
                </span>
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a
                    rel="nofollow noopener noreferrer"
                    href="https://www.pinterest.com/"
                    target="_blank"
                  >
                    <img
                      src="http://www.eprolo.com/img/Pinterest_t.png"
                      alt="icon"
                    />
                  </a>
                </span>
              </Grid>
              <Grid item xs={2}>
                <dl>
                  <dt>Commpany</dt>
                  <dd className="mt-2">
                    <a href="feature.html" title="Help Center">
                      Features
                    </a>
                  </dd>
                  <dd>
                    <a href="branding.html" title="Help Center">
                      Branding
                    </a>
                  </dd>
                  <dd>
                    <a href="shipping.html" title="Help Center">
                      Shipping
                    </a>
                  </dd>
                  <dd>
                    <a href="pricing.html" title="Help Center">
                      Pricing
                    </a>
                  </dd>
                  <dd>
                    <a href="blog.html" title="Blog">
                      Blog
                    </a>
                  </dd>
                  <dd>
                    <a href="help_center.html" title="Help Center">
                      Help Center
                    </a>
                  </dd>
                  <dd>
                    <a href="help/Contact-us.html" title="Contact Us">
                      Contact Us
                    </a>
                  </dd>
                  <dd>
                    <a
                      href="help/Terms-and-Condition.html"
                      title="Terms and Condition"
                    >
                      Terms and Condition
                    </a>
                  </dd>
                </dl>
              </Grid>
              <Grid item xs={2}>
                <dl>
                  <dt>Resources</dt>
                  <dd className="mt-2">
                    <a href="help/What-we-do.html" title="What we do?">
                      What we do?
                    </a>
                  </dd>
                  <dd>
                    <a
                      href="help/How-do-I-get-started.html"
                      title="How do I get started?"
                    >
                      How do I get started?
                    </a>
                  </dd>
                  <dd>
                    <a href="help/Shipping.html" title="Shipping">
                      Shipping
                    </a>
                  </dd>
                  <dd>
                    <a href="help/Privacy-Policy.html" title="Privacy Policy">
                      Privacy Policy
                    </a>
                  </dd>
                </dl>
              </Grid>
              <Grid item xs={2}>
                <dl>
                  <dt>Blog Posts</dt>
                  <dd>
                    <a href="blog/Why-us-instead-of-Aliexpress.html">
                      Why us instead of Aliexpress?
                    </a>
                  </dd>
                </dl>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    );
  }
}

export default Footer;
