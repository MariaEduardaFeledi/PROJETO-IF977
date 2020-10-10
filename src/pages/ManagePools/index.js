import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ManagePools from "./ManagePool.js";
import CreatePool from "./CreatePool.js";
import Pool from "./ModifyPool.js";
import "./ManagePools.css";

class Admin extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/admin" component={ManagePools} />
          <Route path="/admin/create-pool" component={CreatePool} />
          <Route path="/admin/pool/:poolId?" component={Pool} />
        </Switch>
      </Router>
    );
  }
}

export default Admin;
