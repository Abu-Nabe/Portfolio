/** @format */

import React from "react";

import {
  sKotlinIcon,
} from "./../extension/skillsImgs";

import "./../style/skills.css";

export const ThirdSkill = () => {
  return (
    <div>
      <div className="skillsMainDiv">
        <img className="skillsImg" src={sKotlinIcon} alt="Image" />
        <a href="https://www.youtube.com/watch?v=3tp8VUVSj2k&feature=youtu.be" target="_blank">
         <p class="skillsNameSelectable">Availability: Youtube</p>
        </a>
        <p class="skillsName2">Purpose: Assisting friend with his university assignment</p>
        <p class="skillsName2">Languages: Kotlin</p>
        <p class="skillsName2">Database Management: Cache</p>
      </div>
    </div>
  );
};

export default ThirdSkill;
