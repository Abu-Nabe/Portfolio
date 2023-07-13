/** @format */

import React from "react";

import { sJavaIcon } from "./../extension/skillsImgs";

import "./../style/skills.css";

export const SixthSkill = () => {
  const handleYoutubeClick = () => {
    window.open("https://www.youtube.com/watch?v=-BG5ZRAQenk", "_blank");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/shadowfsdev/education", "_blank");
  };

  return (
    <div>
      <div className="skillsMainDiv">
        <img className="skillsImg" src={sJavaIcon} alt="Image" />
        <p class="skillsName2">
          Availability: <span onClick={handleYoutubeClick}>Youtube</span> &{" "}
          <span onClick={handleGithubClick}>Github</span>
        </p>
        <p class="skillsName2">Purpose: To create an educational app</p>
        <p class="skillsName2">Languages: Java</p>
        <p class="skillsName2">Frameworks: Android Studio</p>
      </div>
    </div>
  );
};

export default SixthSkill;
