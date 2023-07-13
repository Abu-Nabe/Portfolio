/** @format */

import React from "react";

import { sSwiftIcon } from "./../extension/skillsImgs";

import "./../style/skills.css";

export const SeventhSkill = () => {
  const handleYoutubeClick = () => {
    window.open("https://www.youtube.com/watch?v=1M0TB3XMJa0", "_blank");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/shadowfsdev/demotaxi", "_blank");
  };

  return (
    <div>
      <div className="skillsMainDiv">
        <img className="skillsImg" src={sSwiftIcon} alt="Image" />
        <p class="skillsName2">
          Availability: <span onClick={handleYoutubeClick}>Youtube</span> &{" "}
          <span onClick={handleGithubClick}>Github</span>
        </p>
        <p class="skillsName2">Purpose: For fun/Speed challenge</p>
        <p class="skillsName2">Languages: Swift</p>
        <p class="skillsName2">Frameworks: Xcode</p>
      </div>
    </div>
  );
};

export default SeventhSkill;
