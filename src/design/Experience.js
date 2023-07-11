/** @format */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Minibar } from "./../extension/minibar";
import { FirstTwo } from "./../experiencedesign/expDesign";

import backgroundImg from "./../img/2.png";

import "./../style/experience.css";

function Experience() {
  useEffect(() => {
    document.title = "Experience - Software Developer"; // Change the title here
  }, []);

  return (
    <div className="Experience">
      <div className="mainDiv">
        <Minibar selected={2} normal="textLabel" />
        <div className="experienceDiv">
            <FirstTwo />
        </div>
      </div>
    </div>
  );
}

export default Experience;
