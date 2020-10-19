import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  //FaFacebook,
  //FaInstagram,
  //FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/how-it-works">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/contact">Contact</Link>
            <Link to="/contact">Support</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Illustrations</h2>
            <Link
              to={"//absurd.design/"}
              target="_blank"
              aria-label="Absurd Designs"
              rel="noreferrer"
            >
              Absurd Design
            </Link>
            <Link
              to={"//products.ls.graphics/paaatterns/"}
              target="_blank"
              aria-label="Paaatterns"
              rel="noreferrer"
            >
              Paaatterns
            </Link>
            <Link
              to={"//undraw.co/illustrations"}
              target="_blank"
              aria-label="Undraw"
              rel="noreferrer"
            >
              Undraw
            </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <MdFingerprint className="navbar-icon" />
              Garner
            </Link>
          </div>
          <small className="website-rights">Garner © 2020</small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Twitter"
              rel="noreferrer"
            >
              <FaTwitter />
            </Link>
            <Link
              className="social-icon-link"
              to={"//www.linkedin.com/in/kip-parker-773b00182/"}
              target="_blank"
              aria-label="LinkedIn"
              rel="noreferrer"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
