import React from "react";
import HeroSection from "../../components/HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";
//import Pricing from "../../components/Pricing";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Home;
//<Pricing />
