import React from "react";
import { Link } from "react-router-dom";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import FAQs from "../components/FAQs";
import HeroImage from "../assets/about-hero.jpg";
import FooterCta from "../components/FooterCta";

const AboutPage = () => {
  return (
    <div>
      <section
        className="pw-about-hero"
        style={{
          backgroundImage: `url(${HeroImage})`,
        }}
      >
        <div className="pw-about-hero-overlay"></div>

        <div className="pw-about-hero-content">
          <p className="pw-about-breadcrumb">
            <Link to="/">Home</Link> / About
          </p>
          <h1>Our Story</h1>
        </div>
      </section>
      <About />
      <WhyChooseUs />
      <FAQs />
      <FooterCta />
    </div>
  );
};

export default AboutPage;
