/** @format */

import React from "react";

import {
  fsWebIcon,
} from "./../extension/skillsImgs";

import "./../style/skills.css";

export const SecondSkill = () => {
  return (
    <div>
      <div className="skillsMainDiv">
        <img className="skillsImg" src={fsWebIcon} alt="Image" />
        <a href="https://socirank.com" target="_blank">
        <p class="skillsNameSelectable">Availability: Web Browser</p>
        </a>
        <p class="skillsName2">Languages: JavaScript, PHP, NodeJS</p>
        <p class="skillsName2">Database Management: MySql & Amazon Web Services</p>
        <p class="skillsName2">Frameworks: Visual Studio Code</p>
      </div>
    </div>
  );
};

export default SecondSkill;
