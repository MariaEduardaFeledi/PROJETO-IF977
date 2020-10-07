import React, { Component } from "react";
import HeroSection from "../../components/HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";
import Pricing from "../../components/Pricing";
import { Auth } from "aws-amplify";

class Home extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    Auth.currentAuthenticatedUser().then((val) => console.log(val));
  }

  render() {
    return (
      <>
        <HeroSection {...homeObjOne} />
        <HeroSection {...homeObjTwo} />
        <HeroSection {...homeObjThree} />
        <Pricing />
      </>
    );
  }
}

export default Home;
