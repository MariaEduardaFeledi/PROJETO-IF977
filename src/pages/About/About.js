import React from "react";
import HeroSection from "../../components/HeroSection";
import Cards from "../../components/Cards";
import { homeObjOne, homeObjTwo } from "./Data";

function About() {
  return (
    <>
      <Cards />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default About;
