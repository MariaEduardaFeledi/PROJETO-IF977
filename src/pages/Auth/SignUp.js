import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Button } from "./../../components/Button";
import { Link } from "react-router-dom";
import "./AuthStyle.css";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [signUpStatus, setSignUpStatus] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    setSignUpStatus("status");

    if (password !== confirmPassword) {
      setSignUpStatus("password");
    } else {
      Auth.signUp({
        username: email,
        password: password,
        attributes: {
          name: name,
        },
      })
        .then(() => {
          setSignUpStatus("success");
        })
        .catch((err) => {
          setSignUpStatus(err.message.toString());
        });
    }
  };

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  let signUpText;
  if (signUpStatus === "") {
    signUpText = <p></p>;
  } else if (signUpStatus === "loading") {
    signUpText = <p style={{ color: "#009432" }}>Cadastrando...</p>;
  } else if (signUpStatus === "success") {
    signUpText = (
      <p style={{ color: "#009432" }}>
        Cadastro realizado com sucesso! Verifique seu e-mail.
      </p>
    );
  } else if (signUpStatus === "password") {
    signUpText = <p style={{ color: "#ED4C67" }}>As senhas não coincidem!</p>;
  } else {
    signUpText = <p style={{ color: "#ED4C67" }}>{signUpStatus}</p>;
  }

  return (
    <div className="auth-form-container">
      <form onSubmit={signUp}>
        <h3 className="form-label">Cadastro</h3>
        <h3 className="form-text">Nome</h3>
        <input
          className="contact-email-input"
          id="username"
          type="text"
          required
          onChange={(e) => onNameChange(e)}
        />
        <h3 className="form-text">E-mail</h3>
        <input
          className="contact-email-input"
          id="email"
          type="email"
          required
          onChange={(e) => onEmailChange(e)}
        />
        <h3 className="form-text">
          Crie uma senha
          <span className="form-span">mínimo de 8 caracteres</span>
        </h3>
        <input
          className="contact-email-input"
          id="password"
          type="password"
          minLength="8"
          required
          onChange={(e) => onPasswordChange(e)}
        />
        <h3 className="form-text">Reescreva a senha</h3>
        <input
          className="contact-email-input"
          id="confirmpassword"
          type="password"
          minLength="8"
          required
          onChange={(e) => onConfirmPasswordChange(e)}
        />
        <div className="form-bottom-content">
          <Button
            Color="#f1f3f6"
            type="submit"
            buttonSize="btn--form"
            className="test"
          >
            Cadastre-se!
          </Button>
          {signUpText}
        </div>
        <div className="form-bottom-content inset">
          <p>
            Já possui conta?
            <Link to="/sign-in" className="form-link-small">
              Entre aqui
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
