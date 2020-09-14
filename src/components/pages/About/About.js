import React from 'react';
import HeroSection from '../../HeroSection';
import Cards from '../../Cards';
import { homeObjOne, homeObjTwo} from './Data';


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
