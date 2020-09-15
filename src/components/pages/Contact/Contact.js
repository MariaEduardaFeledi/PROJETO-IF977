import React from 'react';
import ContactForm from '../../ContactForm';
import HeroSection from '../../HeroSection';
import { homeObjOne } from './Data';

function Contact() {
  return (
    <>
      <ContactForm/>
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Contact;
