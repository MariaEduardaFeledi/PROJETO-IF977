import React, { Component } from "react";
import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/HomePage/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import HowItWorks from "./pages/TextPages/HowItWorks";
import TermsAndConditions from "./pages/TextPages/TermsAndConditions";
import PrivacyPolicy from "./pages/TextPages/PrivacyPolicy";
import CookieConsent from "./pages/TextPages/CookieConsent";
import GettingStarted from "./pages/GettingStarted";
import ManagePoolRoute from "./pages/ManagePools";
import EarlyAccess from "./pages/EarlyAccess";
import AdminRoute from "./pages/Admin";
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
      gatherer: false,
    };
    this.checkAuth = this.checkAuth.bind(this);
  }

  checkAuth() {
    Auth.currentAuthenticatedUser()
      .then((val) => {
        let a = (
          val.signInUserSession.accessToken.payload["cognito:groups"] ?? []
        ).includes("admin");

        let g = (
          val.signInUserSession.accessToken.payload["cognito:groups"] ?? []
        ).includes("gatherer");

        this.setState({
          authenticated: true,
          data: val,
          admin: a,
          gatherer: g,
        });
      })
      .catch((err) => {
        console.log(err);
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
            gatherer={this.state.gatherer}
            admin={this.state.admin}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/how-it-works" component={HowItWorks} />
            <Route path="/early-access" component={EarlyAccess} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route
              path="/terms-and-conditions"
              component={TermsAndConditions}
            />
            <Route path="/cookie-consent" component={CookieConsent} />
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
                component={() => (
                  <GettingStarted gatherer={this.state.gatherer} />
                )}
              />
            )}
            {this.state.gatherer && (
              <Route path="/Manage-pools" component={ManagePoolRoute} />
            )}
            {this.state.admin && <Route path="/admin" component={AdminRoute} />}
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
