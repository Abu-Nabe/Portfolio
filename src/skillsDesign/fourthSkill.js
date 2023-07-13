/** @format */

import React from "react";

import {
  sReactIcon,
} from "./../extension/skillsImgs";

import "./../style/skills.css";

export const FourthSkill = () => {
  return (
    <div>
      <div className="skillsMainDiv">
        <img className="skillsImg" src={sReactIcon} alt="Image" />
        <a href="https://www.youtube.com/watch?v=yNF--4Ly9Y8" target="_blank">
         <p class="skillsNameSelectable">Availability: Youtube</p>
        </a>
        <p class="skillsName2">Purpose: Quick scare game to pull pranks</p>
        <p class="skillsName2">Languages: JavaScript</p>
        <p class="skillsName2">Library: React</p>
      </div>
    </div>
  );
};

export default FourthSkill;
