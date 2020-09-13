import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import InfiniteCarousel from 'react-leaf-carousel';

function Pricing() {
  const settings = {
    accessibility: false,
    arrows: false,
    arrowsBlock: false,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    duration: 400,
    shift: 80,
    slidesToShow: 5,
    wheel: true
  };
  return (
    <div className='pricing__section'>
      <div className='pricing__wrapper'>
        <h1 className='pricing__heading'>Pricing</h1>
        <div className='pricing__container'>
          <InfiniteCarousel
            breakpoints={[
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                },
              },
            ]}
            dots={true}
            showSides={true}
            sidesOpacity={0.5}
            sideSize={10}
            slidesToScroll={2}
            slidesToShow={2}
            scrollOnDevice={true}
          >
            <img src='https://d30s7yzk2az89n.cloudfront.net/images/brands/b341225-300w-326ppi.png'
              alt="Logo"
              className='card' />

            <img src='https://d30s7yzk2az89n.cloudfront.net/images/brands/b916708-300w-326ppi.png'
              alt="Logo"
              className='card' />
          </InfiniteCarousel>




        </div>
      </div>
    </div>
  );
}
export default Pricing;