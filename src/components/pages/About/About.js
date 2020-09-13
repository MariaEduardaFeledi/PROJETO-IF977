import React from 'react';
import HeroSection from '../../HeroSection';
import Cards from '../../Cards';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';


function About() {
  return (
    <>
      <Cards/>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default About;
