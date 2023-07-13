import React, { useEffect, useState } from "react";

import { Minibar } from "./../extension/minibar";
import { MainSkill } from "./../skillsDesign/mainSkill";
import { MainMediaSkill } from "./../skillsDesign/mainMediaSkill";
import backgroundImg from "./../img/5.png";
import "./../style/skills.css";

function Skills() {
  const isMedia = window.matchMedia('(max-width: 900px)').matches;
  useEffect(() => {
    document.title = "Languages & Frameworks - Software Engineer";
  }, []);

  return (
    <div className="Experience">
      <div className="mainDiv">
        <img className="skillsBackgroundImg" src={backgroundImg} alt="Image" />
        <Minibar selected={3} normal="textLabel" />
          {isMedia ? <MainMediaSkill /> : <MainSkill />}
      </div>
    </div>
  );
}

export default Skills;
