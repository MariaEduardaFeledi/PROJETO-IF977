import React from "react";
import { Button } from "./Button";
import "./ContactForm.css";

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
    fetch(
      "https://1b2u76kybi.execute-api.eu-west-2.amazonaws.com/production/email/send",
      {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.status);
        console.log(response.statusCode);
        console.log(response);
        if (response.status === "success") {
          this.setState({ status: "success" });
          this.resetForm();
        } else if (response.status === "fail") {
          this.setState({ status: "fail" });
        }
      });
  }

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
          onSubmit={this.submitEmail.bind(this)}
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
