import React from "react";
import hero1 from "./img/hero1.png";
import hero2 from "./img/hero2.png";
import brands from "./img/brands.png";
import "./hero.css";

export const HeroSec = () => {
  return (
    <>
      <section id="hero">
        <div className="container">
          <div className="hero__subscribe">
            <div className="sbscribe">
              <img src={hero1} alt="img" className="subscribe1__img" />
              <button className="subscribe1__btn">GET THEM BOTH</button>
            </div>
            <div className="sbscribe">
              <img src={hero2} alt="" className="subscribe2__img" />
              <button className="subscribe1__btn">GET ALL THREE</button>
            </div>
          </div>
          <div className="hero__content">
            <p className="hero__text1">All of these and more now streaming.</p>
            <p className="hero__text2">
              The Disney Bundle Duo Basic includes Disney+ (With Ads) and Hulu
              (With Ads). Terms Apply.
            </p>
            <img src={brands} alt="" className="hero__img" />
            <a href="#" className="hero__link">
              View All Plan Options
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
