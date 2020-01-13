import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';
import Config from '../../config';
import { Link } from 'react-router-dom';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = { email: ""};
    }
    onSubmit = (event) => {
        event.preventDefault();
        axios.defaults.baseURL = Config.BACKEND_API_URL;
        axios({
            method: 'post',
            url: '/auth/forgot-pwd',
            data: {
            email: this.state.email
            },
            headers: {
            'content-type': 'application/json'
            }
        })
        .then((res) => {
            console.log(res.data);
            if (res.data.message == "success") {
              alert("Message sent success");
            }
            if (res.data.message == "no user") {
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
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={this.onSubmit}>
                    <h1>Forgot Password</h1>
                    
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="email" placeholder="Email" autoComplete="email" required  onChange= {(e) => this.setState({email: e.target.value})}/>
                    </InputGroup>
                    
                    <Button color="success" block>Submit</Button>
                    <Link to="/login">
                        <Button color="link text-center" className="px-0">Log in?</Button>
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

export default ForgotPassword;
