import React from "react";

import { Star, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Adams S.",
      date: "05/01/2026",
      review:
        "PrimeWears exceeded my expectations. The quality feels premium and the fit is perfect both in and outside the gym.",

      products: ["Prime Compression Tee x2", "Flex Performance Joggers x1"],
    },

    {
      name: "Oladipupo J.",
      date: "12/02/2026",
      review:
        "The materials are incredibly comfortable and breathable. Definitely one of the best activewear brands I’ve purchased from.",

      products: ["Sculpt Seamless Set x1", "Core Training Shorts x2"],
    },

    {
      name: "Dan T.",
      date: "20/02/2026",
      review:
        "Amazing customer service and fast delivery. The designs look luxurious and minimal exactly how I like them.",

      products: ["Oversized Pump Cover x1", "Elite Gym Hoodie x1"],
    },

    {
      name: "Malen R.",
      date: "02/03/2026",
      review:
        "I’ve washed these sets multiple times and the quality still feels brand new. Worth every penny.",

      products: ["Women’s Sculpt Leggings x2"],
    },
  ];

  return (
    <section className="pw-testimonials">
      {/* TOP */}
      <div className="pw-testimonials-top">
        <span className="pw-faq-subtitle">Testimonials</span>

        <h1 className="pw-faq-heading">Loved By Athletes & Everyday Movers</h1>

        <div className="pw-faq-line"></div>

        <p className="pw-about-text">
          Thousands of customers trust PrimeWears for premium comfort, modern
          design and performance-driven activewear.
        </p>

        <div className="pw-review-summary">
          <div className="pw-review-stars">
            {[...Array(5)].map((_, index) => (
              <Star key={index} fill="currentColor" />
            ))}
          </div>

          <span>30,582+ Reviews</span>
        </div>
      </div>

      {/* SLIDER */}
      <div className="pw-testimonials-slider">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".pw-next",
            prevEl: ".pw-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },

            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="pw-testimonial-card">
                {/* HEADER */}
                <div className="pw-testimonial-header">
                  <div className="pw-review-user">
                    <h3>{item.name}</h3>

                    <div className="pw-verified">
                      <CheckCircle2 />

                      <span>Verified Buyer</span>
                    </div>
                  </div>

                  <span className="pw-review-date">{item.date}</span>
                </div>

                {/* STARS */}
                <div className="pw-card-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" />
                  ))}
                </div>

                {/* REVIEW */}
                <p className="pw-testimonial-text">{item.review}</p>

                {/* PRODUCTS */}
                <div className="pw-products-bought">
                  <h4>Purchased Items</h4>

                  <div className="pw-products-list">
                    {item.products.map((product, i) => (
                      <span key={i} className="pw-product-tag">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CONTROLS */}
        <div className="pw-testimonial-controls">
          <button className="pw-prev">
            <ChevronLeft />
          </button>

          <button className="pw-next">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
