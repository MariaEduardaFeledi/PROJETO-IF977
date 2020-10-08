import React from "react";
import "./Pricing.css";

function Pricing() {
  const images = [
    "https://d30s7yzk2az89n.cloudfront.net/images/brands/b644898-1200w-326ppi.png",
    "https://d30s7yzk2az89n.cloudfront.net/images/brands/b801330-1200w-326ppi.png",
    "https://d30s7yzk2az89n.cloudfront.net/images/brands/b665182-1200w-326ppi.png",
    "https://d30s7yzk2az89n.cloudfront.net/images/brands/b090383-1200w-326ppi.png",
    "https://d30s7yzk2az89n.cloudfront.net/images/brands/b825385-1200w-326ppi.png",
    "https://d30s7yzk2az89n.cloudfront.net/images/brands/b461133-1200w-326ppi.png",
    "https://d30s7yzk2az89n.cloudfront.net/images/brands/b078880-1200w-326ppi.png",
    "https://d30s7yzk2az89n.cloudfront.net/images/brands/b974915-1200w-326ppi.png",
    "https://d30s7yzk2az89n.cloudfront.net/images/brands/b211884-1200w-326ppi.png",
    "https://d30s7yzk2az89n.cloudfront.net/images/brands/b719673-1200w-326ppi.png",
    "https://d30s7yzk2az89n.cloudfront.net/images/brands/b672191-1200w-326ppi.png",
    "https://d30s7yzk2az89n.cloudfront.net/images/brands/b892272-1200w-326ppi.png",
    "https://d30s7yzk2az89n.cloudfront.net/images/brands/b082087-1200w-326ppi.png",
    "https://d30s7yzk2az89n.cloudfront.net/images/brands/b889842-1200w-326ppi.png",
    "https://d30s7yzk2az89n.cloudfront.net/images/brands/b607661-1200w-326ppi.png",
  ];

  return (
    <div className="pricing__section">
      <h1 className="pricing__heading">
        We offer redemptions in hundreds of different gift cards
      </h1>
      <div className="slider">
        <div className="slide-track">
          {images.map((image, key) => (
            <div className="slide-container" key={key}>
              <img src={image} alt="" className="slide" />
            </div>
          ))}
          {images.map((image, key) => (
            <div className="slide-container" key={key}>
              <img src={image} alt="" className="slide" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Pricing;
