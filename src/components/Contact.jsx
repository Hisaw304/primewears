import React, { useState } from "react";
import { Check } from "lucide-react";
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";

const Contact = () => {
  const [focusedInput, setFocusedInput] = useState("");

  const contactPoints = [
    "Premium customer support experience",
    "Fast response from our team",
    "Worldwide order assistance",
    "Product & sizing guidance",
  ];

  return (
    <section className="pw-contact">
      <div className="pw-contact-container">
        {/* LEFT */}
        <div className="pw-contact-left">
          <span className="pw-about-subtitle">Contact Us</span>

          <h1 className="pw-about-heading">We Would Love To Hear From You</h1>

          <div className="pw-about-line"></div>

          <p className="pw-about-text">
            Have questions about products, orders or collaborations? Our team is
            always ready to assist you with anything you need.
          </p>

          <h3 className="pw-contact-small-heading">Talk To Our Team Today</h3>

          {/* BULLETS */}
          <div className="pw-contact-points">
            {contactPoints.map((point, index) => (
              <div key={index} className="pw-contact-point">
                <div className="pw-contact-check">
                  <Check />
                </div>

                <span>{point}</span>
              </div>
            ))}
          </div>

          {/* SOCIALS */}
          <div className="pw-contact-socials">
            <a href="/">
              <FaInstagram />
            </a>

            <a href="/">
              <FaTwitter />
            </a>

            <a href="/">
              <FaFacebookF />
            </a>

            <a href="/">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="pw-contact-right">
          <form className="pw-contact-form">
            {/* NAME */}
            <div
              className={`pw-contact-group ${
                focusedInput === "name" ? "active" : ""
              }`}
            >
              <input
                type="text"
                required
                onFocus={() => setFocusedInput("name")}
                onBlur={() => setFocusedInput("")}
              />

              <label>Name</label>
            </div>

            {/* EMAIL */}
            <div
              className={`pw-contact-group ${
                focusedInput === "email" ? "active" : ""
              }`}
            >
              <input
                type="email"
                required
                onFocus={() => setFocusedInput("email")}
                onBlur={() => setFocusedInput("")}
              />

              <label>Email Address</label>
            </div>

            {/* PHONE */}
            <div
              className={`pw-contact-group ${
                focusedInput === "phone" ? "active" : ""
              }`}
            >
              <input
                type="tel"
                required
                onFocus={() => setFocusedInput("phone")}
                onBlur={() => setFocusedInput("")}
              />

              <label>Phone Number</label>
            </div>

            {/* MESSAGE */}
            <div
              className={`pw-contact-group textarea ${
                focusedInput === "message" ? "active" : ""
              }`}
            >
              <textarea
                required
                onFocus={() => setFocusedInput("message")}
                onBlur={() => setFocusedInput("")}
              ></textarea>

              <label>Message</label>
            </div>

            {/* BUTTON */}
            <button type="submit" className="pw-contact-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
