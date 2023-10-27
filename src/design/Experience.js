/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Minibar } from "./../extension/minibar";
import { ExpDesign } from "./../experiencedesign/expDesign";
import { ExpMediaDesign } from "./../experiencedesign/expMediaDesign";
import backgroundImg from "./../img/3.png";

import "./../style/experience.css";

function Experience() {
  const isMedia = window.matchMedia("(max-width: 900px)").matches;
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    document.title = "Experience - Software Engineer"; // Change the title here
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="Experience">
      <div className="mainDiv">
        <img
          className="expBackgroundImg"
          src={backgroundImg}
          onLoad={handleImageLoad}
        />

        {imageLoaded ? (
          <>
            <Minibar selected={2} normal="textLabel" />
            <div className="experienceDiv">
              {isMedia ? <ExpMediaDesign /> : <ExpDesign />}
            </div>
          </>
        ) : (
          <>
            <div className="lineAnimation"></div>
            <div className="blackScreen"></div>
          </>
        )}
      </div>
    </div>
  );
}

export default Experience;
