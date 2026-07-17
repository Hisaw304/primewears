import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* ASSETS */
import heroVideo from "../assets/d545cc7006fc4341915a06642a9618d8.mp4";

import hero1 from "../assets/primehero.png";
import hero2 from "../assets/primehero2.png";
import hero3 from "../assets/primehero3.png";

const Hero = () => {
  /* FIRST ITEM IS VIDEO */
  const slides = [
    {
      type: "video",
      src: heroVideo,
    },

    {
      type: "image",
      src: hero1,
    },

    {
      type: "image",
      src: hero2,
    },

    {
      type: "image",
      src: hero3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pw-hero">
      {/* SLIDER */}
      <div className="pw-hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`pw-hero-slide ${
              currentSlide === index ? "active" : ""
            }`}
          >
            {/* VIDEO */}
            {slide.type === "video" ? (
              <video autoPlay muted loop playsInline className="pw-hero-video">
                <source src={slide.src} type="video/mp4" />
              </video>
            ) : (
              /* IMAGE */
              <img src={slide.src} alt="" className="pw-hero-image" />
            )}
          </div>
        ))}
      </div>

      {/* OVERLAY */}
      <div className="pw-hero-overlay"></div>

      {/* CONTENT */}
      <div className="pw-hero-content">
        <div className="pw-hero-card">
          <span className="pw-hero-subtitle">Premium Gym Wears</span>

          <h1 className="pw-hero-heading">
            Built For Strength,
            <br />
            Styled For Everyday.
          </h1>

          <p className="pw-hero-text">
            Discover high-performance activewear designed for confidence,
            movement and modern lifestyle.
          </p>

          <Link to="/shop" className="pw-hero-btn">
            Explore Our Collections
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
