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

export const MainSkill = () => {
  const checkSelected = (id, selected) => {
    if (id === selected) {
      return "skillsSelected";
    } else {
      return "skillsName";
    }
  };

  const [selectedSkill, setSelectedSkill] = useState(1);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(false);
    setTimeout(() => {
      setFadeIn(true);
    }, 0);
  }, [selectedSkill]);

  const handleSkillSelection = (id) => {
    setSelectedSkill(id);
  };

  const renderSelectedSkill = (selected) => {
    if (selected === 1) {
      return <FirstSkill />;
    } else if (selected === 2) {
      return <SecondSkill />;
    } else if (selected === 3) {
      return <ThirdSkill />;
    } else if (selected === 4) {
      return <FourthSkill />;
    } else if (selected === 5) {
      return <FifthSkill />;
    } else if (selected === 6) {
      return <SixthSkill />;
    } else if (selected === 7) {
      return <SeventhSkill />;
    } else if (selected === 8) {
      return <EightSkill />;
    }
    // Add more conditions for additional skills if needed
    return null;
  };

  return (
    <div className="skillsDiv">
      <div className="skillsCenterDiv">
        <div className="skillsIconDiv" onClick={() => handleSkillSelection(1)}>
          <img src={fullstackIcon} alt="Image" className="contactImg" />
          <p className={checkSelected(1, selectedSkill)}>
            Fullstack Mobile Application
          </p>
        </div>
        <hr className="skillsLine" />
        <div className="skillsIconDiv" onClick={() => handleSkillSelection(2)}>
          <img src={fullstackIcon2} alt="Image" className="contactImg" />
          <p className={checkSelected(2, selectedSkill)}>
            Fullstack Web Application
          </p>
        </div>

        <hr className="skillsLine" />
        <div className="skillsIconDiv" onClick={() => handleSkillSelection(3)}>
          <img src={kotlinIcon} alt="Image" className="contactImg" />
          <p className={checkSelected(3, selectedSkill)}>
            Kotlin: University Assignment
          </p>
        </div>

        <hr className="skillsLine" />
        <div className="skillsIconDiv" onClick={() => handleSkillSelection(4)}>
          <img src={reactIcon} alt="Image" className="contactImg" />
          <p className={checkSelected(4, selectedSkill)}>React: Scare Game</p>
        </div>

        <hr className="skillsLine" />
        <div className="skillsIconDiv" onClick={() => handleSkillSelection(5)}>
          <img src={flutterIcon} alt="Image" className="contactImg" />
          <p className={checkSelected(5, selectedSkill)}>Flutter: To Do App</p>
        </div>

        <hr className="skillsLine" />
        <div className="skillsIconDiv" onClick={() => handleSkillSelection(6)}>
          <img src={javaIcon} alt="Image" className="contactImg" />
          <p className={checkSelected(6, selectedSkill)}>
            Java: Educational Game
          </p>
        </div>

        <hr className="skillsLine" />
        <div className="skillsIconDiv" onClick={() => handleSkillSelection(7)}>
          <img src={swiftIcon} alt="Image" className="contactImg" />
          <p className={checkSelected(7, selectedSkill)}>Swift: Taxi Demo</p>
        </div>

        <hr className="skillsLine" />
        <div className="skillsIconDiv" onClick={() => handleSkillSelection(8)}>
          <img src={firebaseIcon} alt="Image" className="contactImg" />
          <p className={checkSelected(8, selectedSkill)}>Firebase Backend</p>
        </div>
      </div>
      <div className={`skillContainer ${fadeIn ? "fade-in" : ""}`}>
        {renderSelectedSkill(selectedSkill)}
      </div>
    </div>
  );
}

export default MainSkill;
