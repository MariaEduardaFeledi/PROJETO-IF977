import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjOne } from "./Data";
import Pricing from "../../Pricing";

export default function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
    </>
  );
}
