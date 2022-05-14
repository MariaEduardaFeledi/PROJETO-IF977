import React, { Component } from "react";
import { Button } from "./Button";
import "./ContactForm.css";

class ContactForm extends Component {
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
        if (response.MessageId !== undefined) {
          this.setState({ status: "success" });
          this.resetForm();
        } else {
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
          Mensagem enviada!
        </p>
      );
    } else if (this.state.status === "fail") {
      resultText = <p style={{ color: "#ED4C67" }}>Falha ao enviar mensagem.</p>;
    } else if (this.state.status === "sending") {
      resultText = <p style={{ color: "#009432" }}>Enviando mensagem.</p>;
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
            Caso precise de algum suporte sobre a ferramenta, entre em contato:
          </h1>
          <ul className="form__items">
            <div className="contact-input-item">
              <h3 className="form-text">Nome</h3>
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
              <h3 className="form-text">Assunto</h3>
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
              <h3 className="form-text">Mensagem</h3>
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
            <Button Color="#f1f3f6" type="submit" buttonSize="btn--wide">
              Enviar
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
//Message sent! Thanks for getting in contact
