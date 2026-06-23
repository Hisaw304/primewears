import { Link } from "react-router-dom";

import ProductSlider from "../components/productslider/ProductSlider";

import mensWear from "../data/mensWear";
import womensWear from "../data/womensWear";
import accessories from "../data/accessories";

import shopHero from "../assets/about-hero.jpg";
import FooterCta from "../components/FooterCta";

const Shop = () => {
  return (
    <>
      {/* HERO */}

      <section
        className="pw-shop-hero"
        style={{
          backgroundImage: `url(${shopHero})`,
        }}
      >
        <div className="pw-shop-overlay">
          <div className="pw-shop-hero-content">
            <p className="pw-shop-breadcrumb">
              <Link to="/">Home</Link> / Shop
            </p>

            <h1>Shop Gym Wear</h1>

            <p>
              Discover premium gym clothing, performance wear, and accessories
              built for training, recovery, and everyday confidence.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}

      <ProductSlider title="Men's Wear" products={mensWear} link="/shop/men" />

      <ProductSlider
        title="Women's Wear"
        products={womensWear}
        link="/shop/women"
      />

      <ProductSlider
        title="Accessories"
        products={accessories}
        link="/shop/accessories"
      />
      <FooterCta />
    </>
  );
};

export default Shop;
