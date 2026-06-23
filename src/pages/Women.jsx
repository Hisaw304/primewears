import { Link } from "react-router-dom";

const Women = () => {
  return (
    <section className="pw-men-hero">
      <div className="pw-men-hero-container">
        <div className="pw-men-breadcrumb">
          <Link to="/">Home</Link>

          <span>/</span>

          <span>Women Gym Clothes & Wears</span>
        </div>

        <div className="pw-men-hero-content">
          <h1 className="pw-men-title">Women Gym Clothes & Wears</h1>

          <p className="pw-men-description">
            Elevate every workout with premium activewear designed for
            confidence, comfort, and performance. Explore leggings, sports bras,
            tops, shorts, and training essentials crafted to move with you
            through every session.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Women;
