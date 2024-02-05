// BackGround.js
import React from "react";
import "../Spa/BackGround.css";
import video from "../Spa/img/video.mp4";
import img1 from "../Spa/img/elephant.jpg";
import img2 from "../Spa/img/sunset.jpg";
import img3 from "../Spa/img/sunset2.jpg";

const BackGround = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="Background" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={img1} className="Backgroundimg" alt="background-image" />;
  } else if (heroCount === 1) {
    return <img src={img2} className="Backgroundimg" alt="background-image" />;
  } else if (heroCount === 2) {
    return <img src={img3} className="Backgroundimg" alt="background-image" />;
  }
};

export default BackGround;
