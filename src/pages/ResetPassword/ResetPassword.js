import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';
import Config from '../../config';
import { Link } from 'react-router-dom';

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = { email: ""};
    }
    onSubmit = (event) => {
        event.preventDefault();
        axios.defaults.baseURL = Config.BACKEND_API_URL;
        const token = this.props.match.params.token;
        console.log(token);
        axios({
        method: 'post',
        url: '/auth/reset-pwd',
        data: {
            password:  this.state.password,
            token
        },
        headers: {
            'content-type': 'application/json'
        }
        })
        .then((res) => {
            console.log(res.data);
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
                      <Input type="password" placeholder="New Password" autoComplete="password" required  onChange= {(e) => this.setState({password: e.target.value})}/>
                      <Input type="password" placeholder="Confirm Password" autoComplete="password" required  onChange= {(e) => this.setState({cpassword: e.target.value})}/>
                    </InputGroup>
                    
                    <Button color="success" block>Submit</Button>
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

export default ResetPassword;
