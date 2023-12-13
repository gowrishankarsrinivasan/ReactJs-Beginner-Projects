import React from "react";
import "./nav.css";
import { ImSearch } from "react-icons/im";

const Nav = () => {
  return (
    <div className="container">
      <div className="nav-left">
        <p>Dashboard Box</p>
      </div>
      <div className="nav-center">
        <input type="text" className="nav-input" placeholder="Search here..." />
        <ImSearch className="icon"/>
      </div>
      <div className="nav-right">
        <h2>Popularity</h2>
      </div>
    </div>
  );
};

export default Nav;
