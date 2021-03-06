import "./MailChimpForm.css";
import { Button } from "./Button";
import React, { Component } from "react";
import jsonp from "jsonp";
import PropTypes from "prop-types";

class Mailchimp extends Component {
  state = {};

  handleSubmit(evt) {
    evt.preventDefault();
    const { fields, action } = this.props;
    const values = fields
      .map((field) => {
        return `${field.name}=${encodeURIComponent(this.state[field.name])}`;
      })
      .join("&");
    const path = `${action}&${values}`;
    const url = path.replace("/post?", "/post-json?");
    /* eslint-disable-next-line */
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const email = this.state["EMAIL"];
    !regex.test(email)
      ? this.setState({ status: "empty" })
      : this.sendData(url);
  }

  sendData(url) {
    this.setState({ status: "sending" });
    jsonp(url, { param: "c" }, (err, data) => {
      if (data.msg.includes("already subscribed")) {
        this.setState({ status: "duplicate" });
      } else if (err) {
        this.setState({ status: "error" });
      } else if (data.result !== "success") {
        this.setState({ status: "error" });
      } else {
        this.setState({ status: "success" });
      }
    });
  }

  render() {
    const { fields, styles, className } = this.props;
    const messages = {
      ...Mailchimp.defaultProps.messages,
      ...this.props.messages,
    };
    const { status } = this.state;
    return (
      <section className="footer-subscription">
        <p className="footer-subscription-heading dark">
          Pesquisar
        </p>
        <p className="footer-subscription-text dark">
          Procure pelos assuntos necessários.
        </p>
        <div className="input-areas">
          <form onSubmit={this.handleSubmit.bind(this)} className={className}>
            {fields.map((input) => (
              <input
                className="email-input"
                {...input}
                key={input.name}
                onChange={({ target }) =>
                  this.setState({ [input.name]: target.value })
                }
                defaultValue={this.state[input.name]}
              />
            ))}
            <Button
              className="submit-button"
              Color="#1c1c1c"
              Font="white"
              disabled={status === "sending" || status === "success"}
              type="submit"
            >
              {messages.button}
            </Button>

            <div className="msg-alert">
              {status === "sending" && (
                <p style={styles.sendingMsg}>{messages.sending}</p>
              )}
              {status === "success" && (
                <p style={styles.successMsg}>{messages.success}</p>
              )}
              {status === "duplicate" && (
                <p style={styles.duplicateMsg}>{messages.duplicate}</p>
              )}
              {status === "empty" && (
                <p style={styles.errorMsg}>{messages.empty}</p>
              )}
              {status === "error" && (
                <p style={styles.errorMsg}>{messages.error}</p>
              )}
            </div>
          </form>
        </div>
      </section>
    );
  }
}

Mailchimp.defaultProps = {
  messages: {
    sending: "Enviando...",
    success: "Thank you for subscribing!",
    error: "An unexpected internal error has occurred.",
    empty: "",
    duplicate: "Too many subscribe attempts for this email address",
    button: "Pesquisar",
  },
  buttonClassName: "",
  styles: {
    sendingMsg: {
      color: "#0652DD",
    },
    successMsg: {
      color: "#009432",
    },
    duplicateMsg: {
      color: "#EE5A24",
    },
    errorMsg: {
      color: "#ED4C67",
    },
  },
};

Mailchimp.propTypes = {
  action: PropTypes.string,
  messages: PropTypes.object,
  fields: PropTypes.array,
};

export default Mailchimp;
