/** @format */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Minibar } from "./../extension/minibar";
import { ExpDesign } from "./../experiencedesign/expDesign";
import { ExpMediaDesign } from "./../experiencedesign/expMediaDesign";
import backgroundImg from "./../img/3.png";

import "./../style/experience.css";

function Experience() {
  const isMedia = window.matchMedia('(max-width: 900px)').matches;
  useEffect(() => {
    document.title = "Experience - Software Developer"; // Change the title here
  }, []);

  return (
    <div className="Experience">
      <div className="mainDiv">
        <img className="expBackgroundImg" src={backgroundImg} alt="Image" />
        <Minibar selected={2} normal="textLabel" />
        <div className="experienceDiv">
            {isMedia ? <ExpMediaDesign /> : <ExpDesign />}
        </div>
      </div>
    </div>
  );
}

export default Experience;
