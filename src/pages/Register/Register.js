import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import Config from '../../config';
import axios from 'axios';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {username: "", email: "", password: "", cpassword: ""};
  }
  handleValidation(){
    let errors = {};
    let formIsValid = true;

    //Email
    if(this.state.email == ""){
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }
    else {
      let lastAtPos = this.state.email.lastIndexOf('@');
      let lastDotPos = this.state.email.lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.email.indexOf('@@') == -1 && lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  onSubmit = (event) => {
    event.preventDefault();
    if(!this.handleValidation()){
      alert("Form has errors.")
      return;
    }
    console.log("signup",Config.BACKEND_API_URL);
    axios.defaults.baseURL = Config.BACKEND_API_URL;

    axios({
      method: 'post',
      url: '/auth/signup',
      data: {
        email: this.state.email,
        password:  this.state.password
      },
      headers: {
        'content-type': 'application/json'
      }
    })
    .then((res) => {
      console.log("RESPONSE RECEIVED: ", res);
      if (res.data.status == "success") {
        alert("Success");
      }
      if (res.data.status == "exist") {
        alert("Already registered");
      }
      if (res.data.status == "error") {
        alert("Something went wrong");
      }
    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    })

  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={this.onSubmit}>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Username" autoComplete="username"  required onChange= {(e) => this.setState({username: e.target.value})}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Email" autoComplete="email"  required onChange= {(e) => this.setState({email: e.target.value})}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" autoComplete="new-password"  required onChange= {(e) => this.setState({password: e.target.value})}/>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Repeat password" autoComplete="new-password" required onChange= {(e) => this.setState({cpassword: e.target.value})}/>
                    </InputGroup>
                    <Button color="success" block >Create Account</Button>
                    
                    <Link to="/login">
                          <Button color="link" className="px-0">Already create an account?</Button>
                      </Link>
                  </Form>
                </CardBody>
                
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
