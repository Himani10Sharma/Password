import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";

import {
  HelpBlock,
  FormGroup,
  Glyphicon,
  FormControl,
  ControlLabel
}

from "react-bootstrap";

import LoaderButton from "../components/LoaderButton";
import "./ResetPassword.css";
export default class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {

      email: "",

    };


  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
     alert("mail has been sent ")

    fetch('http://127.0.0.1:8080/api/password_reset/', {
      method: 'POST',
      body: data,

    });
  }


  render() {
    return (
      <div className="ResetPassword">
      <h3>password reset</h3>
       <form onSubmit={this.handleSubmit}>

       <input onChange={this.handleChange} type="email" name="email" placeholder="email" />
       <input type="submit" value="submit" />
       </form>
      </div>
    );
  }
}

