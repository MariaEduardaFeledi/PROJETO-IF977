import React from "react";
import HeroSection from "../../components/HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";
import { withRouter } from "react-router-dom";

function GettingStarted(props) {
  return (
    <>
      {props.gatherer ? (
        <>
          <HeroSection {...homeObjThree} />
        </>
      ) : (
        <>
          <HeroSection {...homeObjOne} />
          <HeroSection {...homeObjTwo} />
        </>
      )}
    </>
  );
}

export default withRouter(GettingStarted);
