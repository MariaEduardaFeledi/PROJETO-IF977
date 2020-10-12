import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./../../components/ScrollToTop";
import AdminHome from "./AdminHome";
import NotFound from "../NotFound/NotFound";

class AdminRoute extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/admin" component={AdminHome} />
            <Route path="*" component={NotFound} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default AdminRoute;
