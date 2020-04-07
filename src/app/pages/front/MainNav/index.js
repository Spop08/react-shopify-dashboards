import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

//Nav for Home Pages
class MainNav extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        fixed="top"
        className="p-3"
        style={{ backgroundColor: "#1b1b28" }}
      >
        <Navbar.Brand href="/main/home">UDS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              href="/main/features"
              active={this.props.currentItem === "features" ? true : false}
            >
              Features
            </Nav.Link>
            <Nav.Link
              href="/main/branding"
              active={this.props.currentItem === "branding" ? true : false}
            >
              Branding
            </Nav.Link>
            <Nav.Link
              href="/main/shipping"
              active={this.props.currentItem === "shipping" ? true : false}
            >
              Shipping
            </Nav.Link>
            <Nav.Link
              href="/main/pricing"
              active={this.props.currentItem === "pricing" ? true : false}
            >
              Pricing
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/auth/login">Login</Nav.Link>
            <Nav.Link href="/auth/registration">Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MainNav;
