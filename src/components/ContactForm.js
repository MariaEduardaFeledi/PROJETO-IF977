import React from "react";
import { Button } from "./Button";
import "./ContactForm.css";
import NetlifyForm from "react-netlify-form";

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
        <NetlifyForm name="Contact Form">
          {({ loading, error, success }) => (
            <div>
              {loading && <div>Loading...</div>}
              {error && (
                <div>
                  Your information was not sent. Please try again later.
                </div>
              )}
              {success && <div>Thank you for contacting us!</div>}
              {!loading && !success && (
                <div>
                  <input type="text" name="Name" required />
                  <textarea name="Message" required />
                  <button>Submit</button>
                </div>
              )}
            </div>
          )}
        </NetlifyForm>
      </div>
    );
  }
}

export default ContactForm;
//Message sent! Thanks for getting in contact
