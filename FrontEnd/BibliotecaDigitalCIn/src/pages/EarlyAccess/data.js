import React from "react";
import { Link } from "react-router-dom";

export const homeObjOne = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "",
  headline: "Early access",
  description: (
    <p>
      We are not ready to realease our tools yet, but we are getting closer
      every single day. if you want to get in on the action early get get in{" "}
      <Link to="/contact" className="btn-link">
        contact
      </Link>{" "}
      and we can show you round. Also, if you want create an account, so we are
      ready to get when you want a tour.
    </p>
  ),
  buttonLabel: "Sign up",
  buttonLocation: "sign-up",
  imgStart: "start",
  img: "absurd/03.png",
  alt: "Person with money",
  form: false,
};
