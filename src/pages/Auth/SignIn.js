import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Button } from "./../../components/Button";
import { Link, withRouter } from "react-router-dom";
import "./AuthStyle.css";

const SignInForm = ({ checkAuth, history }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [signInStatus, setSignInStatus] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    setSignInStatus("loading");
    Auth.signIn({
      username: email,
      password: password,
    })
      .then(() => {
        setSignInStatus("success");
        checkAuth();
        history.push("/get-started");
      })
      .catch((err) => {
        setSignInStatus(err.message.toString());
      });
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  let signUpText;
  if (signInStatus === "") {
    signUpText = <p></p>;
  } else if (signInStatus === "loading") {
    signUpText = <p style={{ color: "#009432" }}>Entrando...</p>;
  } else if (signInStatus === "success") {
    signUpText = <p style={{ color: "#009432" }}>Logado!</p>;
  } else {
    signUpText = <p style={{ color: "#ED4C67" }}>{signInStatus}</p>;
  }

  return (
    <div className="auth-form-container">
      <form onSubmit={signIn}>
        <h3 className="form-label">Entrar</h3>
        <h3 className="form-text">Email</h3>
        <input
          className="contact-email-input"
          id="email"
          type="email"
          required
          onChange={(e) => onEmailChange(e)}
        />
        <h3 className="form-text">
          Senha
          <span className="form-span">tamanho mínimo de 8 caracteres</span>
        </h3>
        <input
          className="contact-email-input"
          id="password"
          type="password"
          minLength="8"
          required
          onChange={(e) => onPasswordChange(e)}
        />
        <p>
          Esqueceu sua senha?
          <Link to="/reset-password" className="form-link-small">
            Redefina-a aqui.
          </Link>
        </p>
        <div className="form-bottom-content">
          <Button Color="#f1f3f6" type="submit" buttonSize="btn--form">
            Entre!
          </Button>
        </div>
        <div className="form-bottom-content inset">
          <p>
            Não possui conta?
            <Link to="/sign-up" className="form-link-small">
              Cadastre-se aqui.
            </Link>
          </p>
          {signUpText}
        </div>
      </form>
    </div>
  );
};

export default withRouter(SignInForm);
