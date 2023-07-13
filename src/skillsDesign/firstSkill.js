/** @format */

import React from "react";

import { fsMobileIcon } from "./../extension/skillsImgs";

import "./../style/skills.css";

export const FirstSkill = () => {
  const handleIOSClick = () => {
    window.open("https://apps.apple.com/us/app/socirank/id1628275604", "_blank");
  };

  const handleAndroidClick = () => {
    window.open("https://play.google.com/store/apps/details?id=com.socirank", "_blank");
  };
  {
    return (
      <div>
        <div className="skillsMainDiv">
          <img className="skillsImg" src={fsMobileIcon} alt="Image" />
          <p class="skillsName2">
            Availability: <span onClick={handleIOSClick}>IOS</span> &{" "}
            <span onClick={handleAndroidClick}>Android</span>
          </p>
          <p class="skillsName2">Languages: Java, Swift, PHP, NodeJS</p>
          <p class="skillsName2">Database Management: MySql & Cloudways</p>
          <p class="skillsName2">Frameworks: Android Studio & Xcode</p>
        </div>
      </div>
    );
  }
};

export default FirstSkill;
