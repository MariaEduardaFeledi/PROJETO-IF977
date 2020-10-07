import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { Button } from "./../../components/Button";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import "./AuthStyle.css";

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
      confirmPassword: "",
      email: "",
      signUpStatus: "",
      signConfirmationStatus: "",
      recaptcha: "",
    };
    this.signUp = this.signUp.bind(this);
  }

  signUp(e) {
    e.preventDefault();
    this.setState({ signUpStatus: "loading" });
    const { name, password, confirmPassword, email, recaptcha } = this.state;

    if (password !== confirmPassword) {
      this.setState({ signUpStatus: "password" });
    } else if (recaptcha === "") {
      this.setState({ signUpStatus: "captcha" });
    } else {
      Auth.signUp({
        username: email,
        password: password,
        attributes: {
          name: name,
        },
        validationData: [
          {
            Name: "recaptchaToken",
            Value: recaptcha,
          },
        ],
      })
        .then(() => {
          this.setState({ signUpStatus: "success" });
        })
        .catch((err) => {
          this.setState({ signUpStatus: err.message.toString() });
        });
    }
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }
  onConfirmPasswordChange(event) {
    this.setState({ confirmPassword: event.target.value });
  }

  onRecaptchaChange(value) {
    this.setState({ recaptcha: value });
    console.log(value);
  }

  render() {
    let signUpText;
    if (this.state.signUpStatus === "") {
      signUpText = <p></p>;
    } else if (this.state.signUpStatus === "loading") {
      signUpText = <p style={{ color: "#009432" }}>Signing up...</p>;
    } else if (this.state.signUpStatus === "success") {
      signUpText = (
        <p style={{ color: "#009432" }}>
          Signed up! please just verify the email
        </p>
      );
    } else if (this.state.signUpStatus === "password") {
      signUpText = <p style={{ color: "#ED4C67" }}>Passwords do not match!</p>;
    } else if (this.state.signUpStatus === "captcha") {
      signUpText = (
        <p style={{ color: "#ED4C67" }}>
          Please enter the recaptcha before proceeding
        </p>
      );
    } else if (
      this.state.signUpStatus ===
      "PreSignUp failed with error Recaptcha verification failed."
    ) {
      signUpText = (
        <p style={{ color: "#ED4C67" }}>
          Dont be trying to act suss, do the recaptcha if you can.
        </p>
      );
    } else {
      signUpText = (
        <p style={{ color: "#ED4C67" }}>{this.state.signUpStatus}</p>
      );
    }

    return (
      <div className="auth-form-container">
        <form onSubmit={this.signUp}>
          <h3 class="form-label">Sign up</h3>
          <h3 className="form-text">Name</h3>
          <input
            className="contact-email-input"
            id="username"
            type="text"
            required
            onChange={this.onNameChange.bind(this)}
          />
          <h3 className="form-text">Email</h3>
          <input
            className="contact-email-input"
            id="email"
            type="email"
            required
            onChange={this.onEmailChange.bind(this)}
          />
          <h3 className="form-text">
            Create password
            <span className="form-span">minimun length of 8 characters</span>
          </h3>
          <input
            className="contact-email-input"
            id="password"
            type="password"
            minLength="8"
            required
            onChange={this.onPasswordChange.bind(this)}
          />
          <h3 className="form-text">Re-type password</h3>
          <input
            className="contact-email-input"
            id="confirmpassword"
            type="password"
            minLength="8"
            required
            onChange={this.onConfirmPasswordChange.bind(this)}
          />
          <div className="form-bottom-content">
            <ReCAPTCHA
              sitekey="6Ldgw9QZAAAAAALNtFYTojLR-najbhARAlK3SbP9"
              onChange={this.onRecaptchaChange.bind(this)}
            />

            <Button
              buttonColor="blue"
              type="submit"
              buttonSize="btn--form"
              className="test"
            >
              Sign up!
            </Button>
          </div>
          <div className="form-bottom-content inset">
            <p>
              Already have an account?
              <Link to="/sign-in" className="form-link-small">
                Sign in!
              </Link>
            </p>
            {signUpText}
          </div>
        </form>
      </div>
    );
  }
}
