import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { Button } from "./../../components/Button";
import { Link } from "react-router-dom";

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      email: "",
      signInStatus: "",
    };
    this.signIn = this.signIn.bind(this);
  }

  signIn(e) {
    e.preventDefault();
    this.setState({ signInStatus: "loading" });
    const { password, email } = this.state;
    Auth.signIn({
      username: email,
      password: password,
    })
      .then(() => {
        this.setState({ signInStatus: "success" });
      })
      .catch((err) => {
        this.setState({ signInStatus: err.message.toString() });
      });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    let signUpText;
    if (this.state.signInStatus === "") {
      signUpText = <p></p>;
    } else if (this.state.signInStatus === "loading") {
      signUpText = <p style={{ color: "#009432" }}>Signing in...</p>;
    } else if (this.state.signInStatus === "success") {
      signUpText = <p style={{ color: "#009432" }}>Signed in!</p>;
    } else {
      signUpText = (
        <p style={{ color: "#ED4C67" }}>{this.state.signInStatus}</p>
      );
    }

    return (
      <div className="contact-form-container">
        <div className="form-center">
          <h1>Dont yet have an account?</h1>
          <Link to="/sign-up" className="btn-link">
            <Button buttonColor="blue" type="submit" buttonSize="btn--wide">
              Sign up!
            </Button>
          </Link>
        </div>
        <form onSubmit={this.signIn}>
          <h3 className="form-text">Email</h3>
          <input
            className="contact-email-input"
            id="email"
            type="email"
            required
            onChange={this.onEmailChange.bind(this)}
          />
          <h3 className="form-text">password</h3>
          <input
            className="contact-email-input"
            id="password"
            type="password"
            minLength="8"
            required
            onChange={this.onPasswordChange.bind(this)}
          />

          <div className="form-center">
            {signUpText}
            <Button buttonColor="blue" type="submit" buttonSize="btn--wide">
              Sign up!
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
