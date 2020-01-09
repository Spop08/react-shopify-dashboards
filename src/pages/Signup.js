import React, { Component } from "react";
import axios from 'axios';
import Config from '../config';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    
    this.state = { email: "", password: "" };
    this.onSignup = this.onSignup.bind(this);
  }
  onSignup() {
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
    console.log(this.state);
    return (
      <div>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>Email address</label>
          <input type="email" name="email" onChange= {(e) => this.setState({'email': e.target.value})} className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" onChange= {(e) => this.setState({'password': e.target.value})} className="form-control" placeholder="Enter password" />
        </div>

        <button type="submit" className="btn btn-primary btn-block" onClick={this.onSignup}>Sign Up</button>
        <p className="forgot-password text-right">
          Already registered <a href="#">sign in?</a>
        </p>
      </div>
    );
  }
}