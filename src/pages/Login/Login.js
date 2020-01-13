import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import Config from '../../config';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", errors: []};
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
    axios.defaults.baseURL = Config.BACKEND_API_URL;
    if(!this.handleValidation()){
      alert("Form has errors.")
      return;
    }
    axios({
      method: 'post',
      url: '/auth/login',
      data: {
        email: this.state.email,
        password:  this.state.password
      },
      headers: {
        'content-type': 'application/json'
      }
    })
    .then((res) => {
      if (res.data.status == "success") {
        console.log(res.data);
        if(res.data.isAdmin)
          this.props.history.push()
          this.props.history.push('/dashboard');
      }
      if (res.data.status == "no user") {
        alert("Wrong credential");
      }
    })
    .catch((err) => {
      alert("Something went wrong");
    })
  }
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit = {this.onSubmit}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Email" required autoComplete="email" onChange= {(e) => this.setState({email: e.target.value})} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" required autoComplete="current-password" onChange= {(e) => this.setState({password : e.target.value})} />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                      <Link to="/forgot">
                          <Button color="link" className="px-0">Forgot password?</Button>
                      </Link>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
