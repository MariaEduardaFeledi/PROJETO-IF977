import React, { Component } from "react";
import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/HomePage/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import GettingStarted from "./pages/GettingStarted";
import CreatePool from "./pages/ManagePools/CreatePool";
import ManagePools from "./pages/ManagePools";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./pages/Footer/Footer";
import Navbar from "./pages/NavBar/Navbar";

import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import ConfirmEmail from "./pages/Auth/ConfirmEmail";
import ResetPassword from "./pages/Auth/ResetPassword";

import ScrollToTop from "./components/ScrollToTop";

import Amplify, { Auth } from "aws-amplify";
import aws_exports from "./aws-exports";
Amplify.configure(aws_exports);

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      authenticated: false,
      admin: false,
    };
    this.checkAuth = this.checkAuth.bind(this);
  }

  checkAuth() {
    Auth.currentAuthenticatedUser()
      .then((val) => {
        let a = (
          val.signInUserSession.accessToken.payload["cognito:groups"] ?? []
        ).includes("admin");

        this.setState({
          authenticated: true,
          data: val,
          admin: a,
        });
      })
      .catch((err) => {
        console.log("print");
        this.setState({ authenticated: false });
      });
  }

  componentDidMount() {
    this.checkAuth();
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
          <Navbar
            isAuthenticated={this.state.authenticated}
            checkAuth={this.checkAuth}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/how-it-works" component={HowItWorks} />
            <Route path="/sign-up" component={SignUp} />
            <Route
              path="/sign-in"
              component={() => <SignIn checkAuth={this.checkAuth} />}
            />
            <Route path="/reset-password" component={ResetPassword} />
            <Route path="/confirm-email/:email?" component={ConfirmEmail} />
            {this.state.authenticated && (
              <Route
                path="/get-started"
                component={() => <GettingStarted admin={this.state.admin} />}
              />
            )}
            {this.state.admin && (
              <Route path="/manage-pools" component={ManagePools} />
            )}
            {this.state.admin && (
              <Route path="/create-pool" component={CreatePool} />
            )}
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
