import React from "react";
import "./Hero.css";
import { FaArrowRight } from "react-icons/fa";
import { TfiControlPlay, TfiControlPause } from "react-icons/tfi";

const Hero = ({
  HeroData,
  setHeroCount,
  heroCount,
  playStatus,
  setPlayStatus,
}) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{HeroData.text1}</p>
        <p>{HeroData.text2}</p>
      </div>
      <div className="hero-explorer">
        <p>Explore features</p>
        <FaArrowRight style={{backgroundColor:"orangered",padding:"10px",borderRadius:"50px"}}/>
      </div>
      <div className="hero-dot-plat">
        <ul className="hero-dots">
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "hero-dot orrange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "hero-dot orrange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "hero-dot orrange" : "hero-dot"}
          ></li>
        </ul>
        <div className="hero-play">
          {playStatus ? (
            <div>
            <TfiControlPause onClick={() => setPlayStatus(!playStatus)} />
            </div>
          ) : (
            <TfiControlPlay onClick={() => setPlayStatus(!playStatus)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
