import React from "react";
import { Link } from "react-router-dom";
const FooterCta = () => {
  return (
    <div>
      <section className="pw-footer-cta">
        <div className="pw-footer-cta-content">
          <span className="pw-footer-cta-subtitle">PRIMEWEARS</span>

          <h1 className="pw-footer-cta-heading">
            Discover premium gym wear crafted for performance, comfort and
            everyday style.
          </h1>

          <Link to="/shop" className="pw-footer-cta-btn">
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FooterCta;
