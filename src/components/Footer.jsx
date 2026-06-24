import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";

import { IoSend } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="pw-footer">
      {/* TOP */}
      <div className="pw-footer-top">
        {/* BRAND */}
        <div className="pw-footer-brand">
          <h2 className="pw-footer-title">PrimeWears</h2>

          <p className="pw-footer-text">
            Premium gym wears built for movement, confidence, and everyday
            performance.
          </p>

          {/* SOCIALS */}
          <div className="pw-footer-socials">
            <a href="/" className="pw-social-link">
              <FaInstagram />
            </a>

            <a href="/" className="pw-social-link">
              <FaTwitter />
            </a>

            <a href="/" className="pw-social-link">
              <FaFacebookF />
            </a>

            <a href="/" className="pw-social-link">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* LINKS */}
        <div className="pw-footer-links-wrapper">
          {/* SHOP */}
          <div className="pw-footer-links">
            <h3>Shop</h3>

            <a href="/shop/men">Men</a>
            <a href="/shop/women">Women</a>
            <a href="/shop/accessories">Accessories</a>
            <a href="/shop">Shop</a>
            <a href="/new-in">New In</a>
          </div>

          {/* COMPANY */}
          <div className="pw-footer-links">
            <h3>Company</h3>

            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/">Careers</a>
            <a href="/">Lookbook</a>
          </div>

          {/* SUPPORT */}
          <div className="pw-footer-links">
            <h3>Support</h3>

            <a href="/about">FAQs</a>
            <a href="/">Shipping</a>
            <a href="/">Returns</a>
            <a href="/">Privacy Policy</a>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="pw-footer-newsletter">
          <h3>Join Our Newsletter</h3>

          <p>
            Get exclusive drops, early access and special offers from
            PrimeWears.
          </p>

          <form className="pw-newsletter-form">
            <input type="email" placeholder="Enter your email" />

            <button type="submit">
              <IoSend />
            </button>
          </form>
        </div>
      </div>

      {/* BIG BRAND */}
      <div className="pw-footer-big-text">
        <h1>PrimeWears</h1>
      </div>

      {/* BOTTOM */}
      <div className="pw-footer-bottom">
        <p>© 2026 PrimeWears. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
