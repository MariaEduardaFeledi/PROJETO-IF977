import React, { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Auth } from "aws-amplify";

function Navbar(props) {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticated(props.isAuthenticated);
  }, [props.isAuthenticated]);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const signOut = () => {
    Auth.signOut()
      .then(() => props.checkAuth())
      .catch((err) => console.log(err));
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <MdFingerprint className="navbar-icon" />
              Garner
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
              {authenticated ? (
                <>
                  <li className="nav-btn">
                    {button ? (
                      <Link to="/get-started" className="btn-link">
                        <Button buttonStyle="btn--outline">Get Started!</Button>
                      </Link>
                    ) : (
                      <Link to="/get-started" className="btn-link">
                        <Button
                          buttonStyle="btn--outline"
                          buttonSize="btn--mobile"
                          onClick={closeMobileMenu}
                        >
                          Get Started!
                        </Button>
                      </Link>
                    )}
                  </li>
                  <li className="nav-btn">
                    {button ? (
                      <Button buttonStyle="btn--outline" onClick={signOut}>
                        Log out
                      </Button>
                    ) : (
                      <Button
                        buttonStyle="btn--outline"
                        buttonSize="btn--mobile"
                        onClick={signOut}
                      >
                        Log out
                      </Button>
                    )}
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-btn">
                    {button ? (
                      <Link to="/sign-up" className="btn-link">
                        <Button buttonStyle="btn--outline">Sign up</Button>
                      </Link>
                    ) : (
                      <Link to="/sign-up" className="btn-link">
                        <Button
                          buttonStyle="btn--outline"
                          buttonSize="btn--mobile"
                          onClick={closeMobileMenu}
                        >
                          Sign up
                        </Button>
                      </Link>
                    )}
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
