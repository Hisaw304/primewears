import React from "react";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import FooterCta from "../components/FooterCta";
import ProductSlider from "../components/productslider/ProductSlider";
import mensWear from "../data/mensWear";
import womensWear from "../data/womensWear";
import accessories from "../data/accessories";
import CategoryShowcase from "../components/CategoryShowcase";
const Home = () => {
  return (
    <div>
      <Hero />

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
      <CategoryShowcase />
      <Testimonials />
      <FooterCta />
    </div>
  );
};

export default Home;
