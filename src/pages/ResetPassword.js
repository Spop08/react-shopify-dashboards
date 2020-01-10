import React, { Component } from "react";
import axios from 'axios';
import Config from '../config';

export default class ResetPassword extends Component {
  constructor(props) {
    super(props);
    
    this.state = { password: "",cpassword: "", errors: []};
    this.onLogin = this.onLogin.bind(this);

    console.log("PROPS",props.match.params.token);
  }
  handleValidation(){
    return true;
  }
  onLogin() {
    axios.defaults.baseURL = Config.BACKEND_API_URL;
    if(!this.handleValidation()){
      alert("Form has errors.")
      return;
    }
    const token = this.props.match.params.token;
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
    //   if (res.data.status == "success") {
    //     alert("Login success");
    //   }
    //   if (res.data.status == "no user") {
    //     alert("Wrong credential");
    //   }
    })
    .catch((err) => {
      alert("Something went wrong");
    })
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <h3>Reset Password</h3>

        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" onChange= {(e) => this.setState({'password': e.target.value})} className="form-control" placeholder="Enter password" />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" name="cpassword" onChange= {(e) => this.setState({'cpassword': e.target.value})} className="form-control" placeholder="Enter Confirm password" />
        </div>

        <button className="btn btn-primary btn-block" onClick={this.onLogin}>Reset</button>
      </div>
    );
  }
}
