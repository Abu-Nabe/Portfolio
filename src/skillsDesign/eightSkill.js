/** @format */

import React from "react";

import { sFirebaseIcon } from "./../extension/skillsImgs";

import "./../style/skills.css";

export const EightSkill = () => {
  const handleYoutubeClick = () => {
    window.open("https://www.youtube.com/shorts/cgjstc8pins", "_blank");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/shadowfsdev/Hobbystar", "_blank");
  };

  return (
    <div>
      <div className="skillsMainDiv">
        <img className="skillsImg" src={sFirebaseIcon} alt="Image" />
        <p class="skillsName2">
          Availability: <span onClick={handleYoutubeClick}>Youtube</span> &{" "}
          <span onClick={handleGithubClick}>Github</span>
        </p>
        <p class="skillsName2">Languages: Java, Swift</p>
        <p class="skillsName2">Database Management: Firebase</p>
        <p class="skillsName2">Frameworks: Android Studio & Xcode</p>

      </div>
    </div>
  );
};

export default EightSkill;
