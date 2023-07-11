/** @format */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Minibar } from "./../extension/minibar";

import './../style/experience.css'
import backgroundImg from "./../img/2.png";
function Experience() {

  useEffect(() => {
    document.title = "Experience - Software Developer"; // Change the title here
  }, []);

  return (
    <div className="Experience">
      <img className="backgroundImg" src={backgroundImg} alt="Image" />
      <Minibar selected={2} normal="textLabel" />
    </div>
  );
}

export default Experience;
