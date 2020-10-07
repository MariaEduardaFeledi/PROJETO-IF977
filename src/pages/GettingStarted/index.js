import React from "react";
import HeroSection from "../../components/HeroSection";
import { homeObjOne, homeObjTwo } from "./Data";

export default function GettingStarted() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </>
  );
}
