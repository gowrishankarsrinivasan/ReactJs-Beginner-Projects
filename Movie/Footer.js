// Footer.jsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireAlt, faFilm, faTv, faSearch } from "@fortawesome/free-solid-svg-icons";
import "../Movie/footer.css"; // Import your CSS file

const Footer = () => {
  const data = [
    {
      icon: faFireAlt,
      name: "Trending",
    },
    {
      icon: faFilm,
      name: "Movies",
    },
    {
      icon: faTv,
      name: "TV series",
    },
    {
      icon: faSearch,
      name: "Search",
    },
  ];
  
  return (
    <div className="container-fluid">
      <div className="footer-row">
        <div className="footer-content">
          {data.map((val) => (
            <button type="button" className="footer-col" key={val.name}>
              <FontAwesomeIcon icon={val.icon} id="fire" />
              <br />
              <h5 className="footer-h5">{val.name}</h5>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
