import { Link } from "react-router-dom";

const Accessories = () => {
  return (
    <section className="pw-men-hero">
      <div className="pw-men-hero-container">
        <div className="pw-men-breadcrumb">
          <Link to="/">Home</Link>

          <span>/</span>

          <span>Gym Accessories</span>
        </div>

        <div className="pw-men-hero-content">
          <h1 className="pw-men-title">Gym Accessories</h1>

          <p className="pw-men-description">
            Complete your fitness lifestyle with premium gym accessories.
            Discover caps, water bottles, gym bags, training gloves, socks, and
            everyday essentials designed to support your performance both inside
            and outside the gym.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Accessories;
