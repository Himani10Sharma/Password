import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Login from "./containers/Login";
import ResetPassword from "./containers/ResetPassword";

import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="containers">
       <nav>
      <Link to="/">Login
      </Link>
      <Link to="/login/reset">ResetPassword
      </Link>

      </nav>
                <Route
                    exact path="/"
                    component={Login}
                    exact/>
                <Route
                    path="/login/reset"
                    component={ResetPassword} />

      <h3> WELCOME</h3>

      </div>
    );
  }
}

export default App;
