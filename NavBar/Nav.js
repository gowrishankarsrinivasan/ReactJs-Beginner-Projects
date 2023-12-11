import React from "react";
import "../NavBar/nav.css";

const Nav = () => {
  return (
    <div className="container">
      <div className="nav-left">
        <p>Demo</p>
      </div>
      <div className="nav-right">
        <p>Home</p>
        <p>about us</p>
        <p>contact</p>
        <p>log out</p>
      </div>
    </div>
  );
};

export default Nav;
