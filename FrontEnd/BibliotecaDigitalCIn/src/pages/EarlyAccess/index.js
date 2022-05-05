import React from "react";
import HeroSection from "../../components/HeroSection";
import { homeObjOne } from "./data";
//import Pricing from "../../components/Pricing";

function EarlyAccess() {
  return (
    <>
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default EarlyAccess;
//<Pricing />
