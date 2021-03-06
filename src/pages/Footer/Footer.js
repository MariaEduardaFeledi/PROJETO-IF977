import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  //FaFacebook,
  //FaInstagram,
  //FaYoutube,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <img src="book.svg"/>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
            <img src="logoCIn.svg"/>
            </Link>
          </div>
          <big className="website-rights">BibliotecaDigitalCIn © 2022</big>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to="//github.com/MariaEduardaFeledi/PROJETO-IF977"
              target="_blank"
              aria-label="Twitter"
              rel="noreferrer"
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
