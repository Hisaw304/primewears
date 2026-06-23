import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* MEN */
import men1 from "../assets/men1.jpg";
import men2 from "../assets/men2.jpg";
import men3 from "../assets/men3.jpg";
import men4 from "../assets/men4.jpg";
import men5 from "../assets/men5.jpg";

/* WOMEN */
import women1 from "../assets/women1.jpg";
import women2 from "../assets/women2.jpg";
import women3 from "../assets/women3.jpg";
import women4 from "../assets/women4.jpg";
import women5 from "../assets/women5.jpg";

/* ACCESSORIES */
import acc1 from "../assets/acc1.jpg";
import acc2 from "../assets/acc2.jpg";
import acc3 from "../assets/acc3.jpg";
import acc4 from "../assets/acc4.jpg";
import acc5 from "../assets/acc5.jpg";

const CategoryShowcase = () => {
  const categories = [
    {
      title: "Men",
      button: "Shop Men",
      link: "/shop/men",
      images: [men1, men2, men3, men4, men5],
    },
    {
      title: "Women",
      button: "Shop Women",
      link: "/shop/women",
      images: [women1, women2, women3, women4, women5],
    },
    {
      title: "Accessories",
      button: "Shop Accessories",
      link: "/shop/accessories",
      images: [acc1, acc2, acc3, acc4, acc5],
    },
  ];

  const [indexes, setIndexes] = useState([0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexes((prev) => prev.map((item) => (item + 1) % 5));
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pw-categorys-showcase">
      {categories.map((category, index) => (
        <div key={category.title} className="pw-categorys-card">
          <img
            src={category.images[indexes[index]]}
            alt={category.title}
            className="pw-categorys-image"
          />

          <div className="pw-categorys-overlay">
            <h2 className="pw-categorys-title">{category.title}</h2>

            <Link to={category.link} className="pw-categorys-btn">
              {category.button}
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CategoryShowcase;
