import React from "react";
import { useState } from "react";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import img from "./img/logo-color.png";
import "../base-apperal-comming-soon/landing.css";

const Landing = () => {
  const [email, setEmail] = useState(" ");


  return (
    <div className="container">
      <div className="left">
        <div className="inner-container">
        <img src={img} className="logo" alt="errored" />
          <h1>
            <span>We're</span>
            <br />
            coming
            <br />
            soon
          </h1>
          <p>
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <form>
            <input type="text" value={email} placeholder="enter your email" />
            <button type="submit">
            <IoArrowForwardCircleSharp />
            </button>
          </form>
        </div>
      </div>
      <div className="right-bg-img"></div>
    </div>
  );
};

export default Landing;
