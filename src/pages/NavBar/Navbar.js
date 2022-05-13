import React, { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Auth } from "aws-amplify";

function Navbar({ checkAuth, admin, authenticated, gatherer }) {
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
      .then(() => checkAuth())
      .catch((err) => console.log(err));
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="logoCIn.svg"/>
              Biblioteca Digital
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Página Inicial
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Sobre
                </Link>
              </li>
              {authenticated ? (
                <>
                  {gatherer && (
                    <li className="nav-btn">
                      {button ? (
                        <Link to="/manage-pools" className="btn-link">
                          <Button
                            buttonStyle="btn--primary"
                            Font="white"
                            Glow="orange"
                          >
                            Manage Pools
                          </Button>
                        </Link>
                      ) : (
                        <Link to="/manage-pools" className="btn-link">
                          <Button
                            Font="white"
                            Glow="orange"
                            buttonSize="btn--mobile"
                            onClick={closeMobileMenu}
                          >
                            Manage Pools
                          </Button>
                        </Link>
                      )}
                    </li>
                  )}
                  {admin && (
                    <li className="nav-btn">
                      {button ? (
                        <Link to="/admin" className="btn-link">
                          <Button
                            buttonStyle="btn--outline"
                            Color="#2d3436"
                            Font="white"
                          >
                            Admin
                          </Button>
                        </Link>
                      ) : (
                        <Link to="/admin" className="btn-link">
                          <Button
                            Color="#2d3436"
                            Font="white"
                            buttonSize="btn--mobile"
                            onClick={closeMobileMenu}
                          >
                            Admin
                          </Button>
                        </Link>
                      )}
                    </li>
                  )}
                  {!admin && !gatherer && (
                    <li className="nav-btn">
                      {button ? (
                        <Link to="/get-started" className="btn-link">
                          <Button buttonStyle="btn--outline">
                            Get Started!
                          </Button>
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
                  )}
                  <li className="nav-btn">
                    {button ? (
                      <Button
                        buttonStyle="btn--primary"
                        Color="#2d3436"
                        Font="white"
                        onClick={signOut}
                      >
                        Log out
                      </Button>
                    ) : (
                      <Button
                        buttonStyle="btn--primary"
                        Color="#2d3436"
                        Font="white"
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
                        <Button
                          buttonStyle="btn--primary"
                          Color="#2d3436"
                          Font="white"
                        >
                          Cadastre-se
                        </Button>
                      </Link>
                    ) : (
                      <Link to="/sign-up" className="btn-link">
                        <Button
                          buttonSize="btn--mobile"
                          Font="white"
                          Color="#2d3436"
                          onClick={closeMobileMenu}
                        >
                          Cadastre-se
                        </Button>
                      </Link>
                    )}
                  </li>
                  <li className="nav-btn">
                    {button ? (
                      <Link to="/sign-in" className="btn-link">
                        <Button buttonStyle="btn--primary" Glow="orange">
                          Entrar
                        </Button>
                      </Link>
                    ) : (
                      <Link to="/sign-in" className="btn-link">
                        <Button
                          buttonSize="btn--mobile"
                          Font="white"
                          Glow="orange"
                          onClick={closeMobileMenu}
                        >
                          Entrar
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
