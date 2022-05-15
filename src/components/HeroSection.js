import React from "react";
import "./HeroSection.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import Mailchimp from "./MailChimpForm";

const url ="";

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
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className={lightText ? "top-line" : "top-line darkblue"}>
                  {topLine}
                </div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
                {form ? (
                  <Mailchimp
                    action={url}
                    fields={[
                      {
                        name: "PESQUISA",
                        placeholder: "Digite...",
                        type: "text",
                        required: true,
                      },
                    ]}
                  />
                ) : (
                  <Link to={buttonLocation}>
                    {lightTextDesc ? (
                      <Button
                        buttonSize="btn--mobile"
                        Color="#2d3436"
                        Font="white"
                      >
                        {buttonLabel}
                      </Button>
                    ) : (
                      <Button
                        buttonSize="btn--wide"
                        Color="#f1f3f6"
                        Font="#252e48"
                      >
                        {buttonLabel}
                      </Button>
                    )}
                  </Link>
                )}
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
