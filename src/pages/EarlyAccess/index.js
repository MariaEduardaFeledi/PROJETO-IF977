import React from "react";
import HeroSection from "../../components/HeroSection";
import { homeObjOne } from "./data";
import SignIn from "pages/Auth/SignIn";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function EarlyAccess() {
  return (
    <Router>
      <Switch>
        <Route exact path='Auth/SignIn' component={SignIn} />
      </Switch>
    </Router>
  );
}

export default EarlyAccess;

