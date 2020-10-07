import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { Button } from "./../../components/Button";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
      confirmPassword: "",
      email: "",
      confirmationCode: "",
      confirmationEmail: "",
      signUpStatus: "",
      signConfirmationStatus: "",
      recaptcha: "",
    };
    this.signUp = this.signUp.bind(this);
    this.confirmSignUp = this.confirmSignUp.bind(this);
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

  confirmSignUp(e) {
    e.preventDefault();
    this.setState({ signUpConfirmationStatus: "loading" });
    const { confirmationEmail, confirmationCode } = this.state;
    Auth.confirmSignUp(confirmationEmail, confirmationCode)
      .then(() => {
        this.setState({ signUpConfirmationStatus: "success" });
      })
      .catch((err) => {
        this.setState({ signUpConfirmationStatus: err.message.toString() });
      });
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
  onConfirmationCodeChange(event) {
    this.setState({ confirmationCode: event.target.value });
  }
  onConfirmationEmailChange(event) {
    this.setState({ confirmationEmail: event.target.value });
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

    let signUpConfirmationText;
    if (this.state.signUpConfirmationStatus === "") {
      signUpConfirmationText = <p></p>;
    } else if (this.state.signUpConfirmationStatus === "loading") {
      signUpConfirmationText = <p style={{ color: "#009432" }}>Verifying...</p>;
    } else if (this.state.signUpConfirmationStatus === "success") {
      signUpConfirmationText = (
        <p style={{ color: "#009432" }}>Email verified!</p>
      );
    } else {
      signUpConfirmationText = (
        <p style={{ color: "#ED4C67" }}>
          {this.state.signUpConfirmationStatus}
        </p>
      );
    }

    return (
      <div className="contact-form-container">
        <div className="form-center">
          <h1>Already have an account?</h1>
          <Link to="/sign-in" className="btn-link">
            <Button buttonColor="blue" type="submit" buttonSize="btn--wide">
              Sign In!
            </Button>
          </Link>
        </div>
        <form onSubmit={this.signUp}>
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
          <h3 className="form-text">Create a new password</h3>
          <input
            className="contact-email-input"
            id="password"
            type="password"
            minLength="8"
            required
            onChange={this.onPasswordChange.bind(this)}
          />
          <p>minimun length of 8 characters</p>
          <h3 className="form-text">Re-type new password</h3>
          <input
            className="contact-email-input"
            id="confirmpassword"
            type="password"
            minLength="8"
            required
            onChange={this.onConfirmPasswordChange.bind(this)}
          />
          <ReCAPTCHA
            sitekey="6Ldgw9QZAAAAAALNtFYTojLR-najbhARAlK3SbP9"
            onChange={this.onRecaptchaChange.bind(this)}
          />

          <div className="form-center">
            {signUpText}
            <Button buttonColor="blue" type="submit" buttonSize="btn--wide">
              Sign up!
            </Button>
          </div>
        </form>
        <h1>Confirm code here</h1>
        <form onSubmit={this.confirmSignUp}>
          <h3 className="form-text">Email</h3>
          <input
            className="contact-email-input"
            id="confirm-email"
            type="email"
            required
            onChange={this.onConfirmationEmailChange.bind(this)}
          />
          <h3 className="form-text">Confirmation Code</h3>
          <input
            className="contact-email-input"
            id="confirmationCode"
            type="text"
            required
            onChange={this.onConfirmationCodeChange.bind(this)}
          />
          <div className="form-center">
            {signUpConfirmationText}
            <Button buttonColor="blue" type="submit" buttonSize="btn--wide">
              Verify email!
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
