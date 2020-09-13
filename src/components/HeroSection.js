import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import Mailchimp from "./MailChimpForm"

const url = "https://app.us2.list-manage.com/subscribe/post?u=3506547c6e30cd64bcab8beaf&id=d46611af2d";

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  buttonLocation,
  img,
  alt,
  imgStart,
  form,
}) {
  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className={lightText ? 'top-line' : 'top-line darkblue'}>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                {
                  form
                    ? <section className='footer-subscription'>
                      <p className='footer-subscription-heading dark'>
                        Join our mailing list to receive new and updates about Garner
                  </p>
                      <p className='footer-subscription-text dark'>
                        You can unsubscribe at any time.
                  </p>
                      <Mailchimp
                        action={url}
                        fields={[
                          {
                            name: 'EMAIL',
                            placeholder: 'Your Email',
                            type: 'email',
                            required: true
                          }
                        ]}
                      />
                    </section>

                    : <Link to={buttonLocation}>
                      {lightTextDesc
                        ? <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                          {buttonLabel}
                        </Button>
                        : <Button buttonSize='btn--wide' buttonColor='blue'>
                          {buttonLabel}
                        </Button>}
                    </Link>


                }

              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
