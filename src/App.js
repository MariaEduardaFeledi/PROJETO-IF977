import React, { Component } from "react";
import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/HomePage/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./pages/Footer/Footer";
import Navbar from "./pages/NavBar/Navbar";

import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";

import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/how-it-works" component={HowItWorks} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
