import React, { Component } from "react";
import {
  Navbar,
  Nav,
} from "react-bootstrap";

class MainNav extends Component {
  render() {
    console.log(this.props);

    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" className="p-3">
      <Navbar.Brand href="#home">UDS</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features" active={this.props.currentItem === "features" ? true : false}>Features</Nav.Link>
            <Nav.Link href="#pricing" active={this.props.currentItem === "branding" ? true : false}>Branding</Nav.Link>
            <Nav.Link href="#pricing" active={this.props.currentItem === "shipping" ? true : false}>Shipping</Nav.Link>
            <Nav.Link href="#pricing" active={this.props.currentItem === "pricing" ? true : false}>Pricing</Nav.Link>          
          </Nav>
          <Nav>
            <Nav.Link href="#pricing">Login</Nav.Link>
            <Nav.Link href="#pricing">Signup</Nav.Link>          
          </Nav>
      </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default MainNav;