import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./containers/Login";
import ResetPassword from "./containers/ResetPassword";
import FormPasswordReset from "./containers/FormPasswordReset";

  <Switch>
    <AppliedRoute path="/" exact component={Login} props={childProps} />

    <UnauthenticatedRoute
      path="/login"
      exact
      component={Login}
      props={childProps}
    />

    <UnauthenticatedRoute
      path="/login/reset"
//      exact
      component={ResetPassword}
      props={childProps}
    />

      <UnauthenticatedRoute
      path="/login/reset/change"
//      exact
      component={FormPasswordReset}
      props={childProps}
    />



    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);