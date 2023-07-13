/** @format */

import React, { useEffect, useState } from "react";
import { Minibar } from "./../extension/minibar";
import { FirstSkill } from "./../skillsDesign/firstSkill";
import { SecondSkill } from "./../skillsDesign/secondSkill";
import { ThirdSkill } from "./../skillsDesign/thirdSkill";
import { FourthSkill } from "./../skillsDesign/fourthSkill";
import { FifthSkill } from "./../skillsDesign/fifthSkill";
import { SixthSkill } from "./../skillsDesign/sixthSkill";
import { SeventhSkill } from "./../skillsDesign/seventhSkill";
import { EightSkill } from "./../skillsDesign/eightSkill";

import {
  fullstackIcon,
  fullstackIcon2,
  kotlinIcon,
  reactIcon,
  flutterIcon,
  javaIcon,
  swiftIcon,
  firebaseIcon,
} from "./../extension/img";
import backgroundImg from "./../img/1.png";
import "./../style/skills.css";

import { fsMobileIcon, fsWebIcon, sKotlinIcon, sReactIcon, sFlutterIcon, sJavaIcon, sSwiftIcon, sFirebaseIcon} from "./../extension/skillsImgs";

export const MainMediaSkill = () => {
  
  return (
    <div className="skillsDiv">
        <div className="skillsMediaDiv">
        <p class="skillsMediaName">Fullstack Mobile Application</p>
        <img className="skillsImg" src={fsMobileIcon} alt="Image" />
             <p class="skillsMediaName2">Languages: Java, Swift, PHP, NodeJS</p>
          <p class="skillsMediaName2">Database Management: MySql & Cloudways</p>
          <p class="skillsMediaName2">Frameworks: Android Studio & Xcode</p>
        </div>

        <div className="skillsMediaDiv">
        <p class="skillsMediaName">Fullstack Web Application</p>
        <img className="skillsImg" src={fsWebIcon} alt="Image" />
            <p class="skillsMediaName2">Languages: JavaScript, PHP, NodeJS</p>
            <p class="skillsMediaName2">Database Management: MySql & Amazon Web Services</p>
            <p class="skillsMediaName2">Frameworks: Visual Studio Code</p>
        </div>

        <div className="skillsMediaDiv">
        <p class="skillsMediaName">Kotlin: University Assignment</p>
        <img className="skillsImg" src={sKotlinIcon} alt="Image" />
            <p class="skillsMediaName2">Purpose: Assisting friend with his university assignment</p>
            <p class="skillsMediaName2">Languages: Kotlin</p>
            <p class="skillsMediaName2">Database Management: Cache</p>
        </div>

        <div className="skillsMediaDiv">
        <p class="skillsMediaName">React: Scare Game</p>
        <img className="skillsImg" src={sReactIcon} alt="Image" />
            <p class="skillsMediaName2">Purpose: Quick scare game to pull pranks</p>
            <p class="skillsMediaName2">Languages: JavaScript</p>
            <p class="skillsMediaName2">Library: React</p>
        </div>

        <div className="skillsMediaDiv">
        <p class="skillsMediaName">Flutter: To Do App</p>
        <img className="skillsImg" src={sFlutterIcon} alt="Image" />
        <p class="skillsMediaName2">Purpose: To learn about Flutter and acquire some experience</p>
        <p class="skillsMediaName2">Languages: Dart</p>
        <p class="skillsMediaName2">Software development kit: Flutter</p>
        </div>

        <div className="skillsMediaDiv">
            <p class="skillsMediaName">Java: Educational Game</p>
            <img className="skillsImg" src={sJavaIcon} alt="Image" />
            <p class="skillsMediaName2">Purpose: To create an educational app</p>
            <p class="skillsMediaName2">Languages: Java</p>
            <p class="skillsMediaName2">Frameworks: Android Studio</p>
        </div>

        <div className="skillsMediaDiv">
            <p class="skillsMediaName">Swift: Taxi Demo</p>
            <img className="skillsImg" src={sSwiftIcon} alt="Image" />
            <p class="skillsMediaName2">Purpose: For fun/Speed challenge</p>
            <p class="skillsMediaName2">Languages: Swift</p>
            <p class="skillsMediaName2">Frameworks: Xcode</p>
        </div>

        <div className="skillsMediaDiv">
            <p class="skillsMediaName">Firebase Backend</p>
            <img className="skillsImg" src={sFirebaseIcon} alt="Image" />
            <p class="skillsMediaName2">Languages: Java, Swift</p>
            <p class="skillsMediaName2">Database Management: Firebase</p>
            <p class="skillsMediaName2">Frameworks: Android Studio & Xcode</p>
        </div>


    </div>
  );
}

export default MainMediaSkill;
