


import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
//import "./FormPassswordReset.css";

export default class FormPassswordReset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      new_password: "",
      confirm_Password: ""

    };
  }

  validateForm() {
    return this.state.new_password.length > 0 && this.state.confirm_Password.length > 0 &&
    this.state.new_password === this.state.confirm_Password  ;
  }

 handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
  event.preventDefault();
   alert(this.state.new_password);
   alert(this.state.confirm_Password)

  };


  render() {
    return (
      <div className="FormPasswordReset">
      <h3>new_password reset</h3>
       <form onSubmit={this.handleSubmit}>

       <input onChange={this.handleChange} type="new_password" name="new_password" placeholder="new_password" />
       <input onChange={this.handleChange} type="confirm_Password" name="confirm_Password" placeholder="confirm_Password" />

       <input type="submit" value="submit" />
       </form>
      </div>
    );
  }
}
