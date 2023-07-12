/** @format */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Minibar } from "./../extension/minibar";
import { ExpDesign } from "./../experiencedesign/expDesign";
import { ExpMediaDesign } from "./../experiencedesign/expMediaDesign";
import backgroundImg from "./../img/4.png";

import "./../style/skills.css";

function Experience() {
  useEffect(() => {
    document.title = "Languages & Frameworks - Software Developer"; // Change the title here
  }, []);

  return (
    <div className="Experience">
      <div className="mainDiv">
        <img className="expBackgroundImg" src={backgroundImg} alt="Image" />
        <Minibar selected={3} normal="textLabel" />
        
      </div>
    </div>
  );
}

export default Experience;
