import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { Button } from "./../../components/Button";
import { DropDown } from "./../../components/DropDown";
import { Link, withRouter } from "react-router-dom";

class CreateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      email: "",
      signInStatus: "",
      fruit: ["apple", "orange", "strawberry", "grape"],
    };
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
      <div className="auth-form-container">
        <form onSubmit={this.signIn}>
          <p style={{ color: "#6c63ff" }}>
            You will have plenty more opportunities to update and edit your pool
            before publishing it to the public. This is just an initial setup,
            all of the values entered here can be changed.
          </p>
          <h3 className="form-label">Create pool</h3>
          <h3 className="form-text">
            Pool name
            <span className="form-span">
              This will appear as the title of the pool
            </span>
          </h3>
          <input
            className="contact-email-input"
            id="email"
            type="email"
            required
            onChange={this.onEmailChange.bind(this)}
          />
          <h3 className="form-text">
            Enter Description
            <span className="form-span">
              users will be able to read the discription
            </span>
          </h3>
          <textarea
            className="contact-email-input tall-input"
            rows="6"
            required
            onChange={this.onEmailChange.bind(this)}
          />
          <h3 className="form-text">
            Enter Terms and conditions
            <span className="form-span">
              Users will be made to accept before contributing to the pool
            </span>
          </h3>
          <textarea
            className="contact-email-input tall-input"
            rows="6"
            required
            onChange={this.onEmailChange.bind(this)}
          />
          <h3 className="form-text">
            Sample format
            <span className="form-span">
              Also note right now not many data formats are supported, if you
              are intrested in one that doesn't exist yet
              <Link to="/contact" target="_blank" className="form-link-small">
                Contact us and we will make it happen.
              </Link>
            </span>
          </h3>
          <DropDown title="Select fruit" list={this.state.fruit} />

          <h3 className="form-text">
            Sample cross-verification level
            <span className="form-span">
              This is a temporary estimation, and will be adjusted when
              gathering begins.
            </span>
          </h3>
          <div className="form-bottom-content">
            <input type="range" />
            <h3 className="form-text">
              Initial estimated cost per sample{" "}
              <span style={{ color: "#6c63ff" }}>£0.0102</span>
            </h3>
          </div>
          <div className="form-bottom-content">
            <Button buttonColor="blue" type="submit" buttonSize="btn--form">
              Save!
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateForm);
