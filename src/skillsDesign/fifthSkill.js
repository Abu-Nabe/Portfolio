/** @format */

import React from "react";

import {
  sFlutterIcon,
} from "./../extension/skillsImgs";

import "./../style/skills.css";

export const FifthSkill = () => {
  return (
    <div>
      <div className="skillsMainDiv">
        <img className="skillsImg" src={sFlutterIcon} alt="Image" />
        <a href="https://www.youtube.com/watch?v=l8oVANTjd6k" target="_blank">
         <p class="skillsNameSelectable">Availability: Youtube</p>
        </a>
        <p class="skillsName2">Purpose: To learn about Flutter and acquire some experience</p>
        <p class="skillsName2">Languages: Dart</p>
        <p class="skillsName2">Software development kit: Flutter</p>
      </div>
    </div>
  );
};

export default FifthSkill;
