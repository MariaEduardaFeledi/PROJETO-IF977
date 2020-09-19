import React from "react";
import { Button } from "./Button";
import "./ContactForm.css";
//import axios from "axios";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  onSubjectChange(event) {
    this.setState({ subject: event.target.value });
  }
  onMsgChange(event) {
    this.setState({ message: event.target.value });
  }

  submitEmail(e) {
    e.preventDefault();
    this.setState({ status: "sending" });
    fetch("http://localhost:3002/send", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          this.setState({ status: "success" });
          this.resetForm();
        } else if (response.status === "fail") {
          this.setState({ status: "fail" });
        }
      });
  }

  handleSubmit = (e) => {
    this.setState({ status: "sending" });
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "contact-form": "contact", ...this.state }),
    })
      .then(() => {
        this.setState({ status: "success" });
        this.resetForm();
      })
      .catch((error) => this.setState({ status: "fail" }));

    e.preventDefault();
  };

  resetForm() {
    this.setState({ name: "", email: "", subject: "", message: "" });
  }

  render() {
    let resultText;
    if (this.state.status === "success") {
      resultText = (
        <p style={{ color: "#009432" }}>
          Message sent! Thanks for getting in contact
        </p>
      );
    } else if (this.state.status === "fail") {
      resultText = <p style={{ color: "#ED4C67" }}>Message failed to send.</p>;
    } else if (this.state.status === "sending") {
      resultText = <p style={{ color: "#009432" }}>Message sending.</p>;
    } else {
      resultText = <p></p>;
    }

    return (
      <div className="contact-form-container ">
        <form
          className="contact-form"
          onSubmit={this.handleSubmit}
          method="POST"
        >
          <h1 className="contact-form-title">
            If you think we can help you the data you need for your next
            project, don't hesitate to get in touch.
          </h1>
          <ul className="form__items">
            <div className="contact-input-item">
              <h3 className="form-text">Name</h3>
              <input
                className="contact-email-input"
                type="text"
                required
                value={this.state.name}
                onChange={this.onNameChange.bind(this)}
              />
            </div>
            <div className="contact-input-item">
              <h3 className="form-text">Email</h3>
              <input
                className="contact-email-input"
                type="email"
                required
                value={this.state.email}
                onChange={this.onEmailChange.bind(this)}
              />
            </div>
          </ul>
          <ul className="form__items">
            <div className="contact-input-item">
              <h3 className="form-text">Subject</h3>
              <input
                className="contact-email-input"
                type="text"
                required
                value={this.state.subject}
                onChange={this.onSubjectChange.bind(this)}
              />
            </div>
          </ul>
          <ul className="form__items">
            <div className="contact-input-item">
              <h3 className="form-text">Message</h3>
              <textarea
                className="contact-email-input tall-input"
                rows="6"
                required
                value={this.state.message}
                onChange={this.onMsgChange.bind(this)}
              />
            </div>
          </ul>

          <div className="form-center">
            {resultText}
            <Button buttonColor="blue" type="submit" buttonSize="btn--wide">
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
//Message sent! Thanks for getting in contact
