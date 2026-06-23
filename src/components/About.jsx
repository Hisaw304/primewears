import React from "react";
import { Link } from "react-router-dom";

/* IMAGE */
import aboutImage from "../assets/about.jpg";

const About = () => {
  return (
    <section className="pw-about">
      {/* LEFT */}
      <div className="pw-about-left">
        <span className="pw-about-subtitle">About PrimeWears</span>

        <h1 className="pw-about-heading">
          Premium Activewear Designed For Performance & Lifestyle
        </h1>

        <div className="pw-about-line"></div>

        <p className="pw-about-text">
          PrimeWears creates modern gym wears that combine comfort, confidence
          and everyday performance. Our collections are designed for athletes,
          fitness enthusiasts and individuals who want to look sharp both inside
          and outside the gym.
        </p>

        <p className="pw-about-text">
          We believe activewear should feel premium, move effortlessly and
          elevate your style without compromising functionality.
        </p>

        <Link to="/shop" className="pw-about-btn">
          Explore Collections
        </Link>
      </div>

      {/* RIGHT */}
      <div className="pw-about-right">
        <img src={aboutImage} alt="About PrimeWears" />
      </div>
    </section>
  );
};

export default About;
