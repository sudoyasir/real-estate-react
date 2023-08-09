import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
          {/* Left Side */}
          <div className="flexColStart hero-left">
            <div className="hero-title">
              <div className="orange-circle"></div>
              <h1>
                Discover <br /> Most Suitable <br /> Property
              </h1>
            </div>

            <div className="flexColStart hero-des">
              <span className="secondaryText">
                Find a variety of property that suits you very easilty
              </span>
              <span className="secondaryText">
                Forget all difficulties in finding a residencie for you
              </span>
            </div>

            <div className="flexCenter search-bar">
              <HiLocationMarker color="var(--blue)" size={25} />
              <input type="text" name="" id="" />
              <button className="button">Search</button>
            </div>

            <div className="flexCenter stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={88000} end={9000} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Premium Products</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp start={1950} end={2000} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Happy Customers</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp end={28} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Award Wining</span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flexCenter hero-right">
            <div className="image-container">
              <img src="./hero-image.png" alt="Hero Image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
