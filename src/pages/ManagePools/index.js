import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ManagePools from "./ManagePool.js";
import CreatePool from "./CreatePool.js";
import Pool from "./ModifyPool.js";
import "./ManagePools.css";
import ScrollToTop from "./../../components/ScrollToTop";
import NotFound from "../NotFound/NotFound";

class ManagePoolRoute extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/manage-pools" component={ManagePools} />
            <Route path="/manage-pools/create-pool" component={CreatePool} />
            <Route path="/manage-pools/pool/:poolId?" component={Pool} />
            <Route path="*" component={NotFound} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default ManagePoolRoute;
