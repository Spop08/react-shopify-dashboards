import React, { Component } from "react";
import axios from 'axios';
import Config from '../config';

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    
    this.state = { email: "", password: "", errors: []};
    this.onLogin = this.onLogin.bind(this);
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
  onLogin() {
    axios.defaults.baseURL = Config.BACKEND_API_URL;
    if(!this.handleValidation()){
      alert("Form has errors.")
      return;
    }
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
      if (res.data.status == "success") {
        alert("Login success");
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
    console.log(this.state);
    return (
      <div>
        <h3>Forgot Password</h3>

        <div className="form-group">
          <label>Email address</label>
          <input type="email" onChange= {(e) => this.setState({email: e.target.value})} className="form-control" placeholder="Enter email" />
        </div>

        <button className="btn btn-primary btn-block" onClick={this.onLogin}>Submit</button>
        <p className="forgot-password text-right">
          <a href="/sign-in">Log In?</a>
        </p>
      </div>
    );
  }
}
