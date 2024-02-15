import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="bannerContainer">
      <div className="bannerMain">
        <div className="text">
          <h1>Lorem ipsum, dolor sit amet consec </h1>
        </div>
        <div className="bannerBox">
          <input className="inputBox"></input>
          <button className="bannerButton">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
