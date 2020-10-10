import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./../../components/ScrollToTop";
import AdminHome from "./AdminHome";

class AdminRoute extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/admin" component={AdminHome} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default AdminRoute;
