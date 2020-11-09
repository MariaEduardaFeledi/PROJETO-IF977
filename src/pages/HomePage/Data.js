import React from "react";
import Typer from "../../components/Typer";

export const homeObjOne = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "",
  headline: (
    <Typer
      pretext="We are a realtime data crowdsourcing platform "
      dataText={[
        "labeling data",
        "building bespoke datasets",
        "putting humans in the loop",
        "opening doors to new ideas",
        "enabling exciting Discoveries",
        "tackling biased data",
        "learning constantly",
      ]}
    />
  ),
  description: "",
  buttonLabel: "Introduction",
  buttonLocation: "/about",
  imgStart: "",
  img: "absurd/07.png",
  alt: "Person using phone",
  form: false,
};

export const homeObjTwo = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "",
  headline: "Start earning instantly",
  description:
    "Get set up and ready to go in minutes. All you need to do is download the app and sign up.",
  buttonLabel: "Join us",
  buttonLocation: "",
  imgStart: "start",
  img: "absurd/08.png",
  alt: "Person with money",
  form: true,
};

export const homeObjThree = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "versatile",
  headline: "Make money anywhere anytime",
  description:
    "You can gather no matter where you are located and contribute to data pools you care about, All you need is an internet connection",
  buttonLabel: "Learn More about us",
  buttonLocation: "/about",
  imgStart: "",
  img: "absurd/06.png",
  alt: "Vault",
  form: false,
};
