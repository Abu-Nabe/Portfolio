/** @format */

import React from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  instaIcon,
  githubIcon,
  socirankIcon,
  githubIcon2,
  googleIcon,
  appleIcon,
  youtubeIcon,
} from "./../extension/img";
import {
  socirankText,
  bankText,
  foodText,
  hobbystarText,
  socirankWebText,
  collegeText,
  tutorText,
} from "./../extension/about";
import {
  socirankExp,
  bankExp,
  hobbystarExp,
  foodExp,
  socirankWebExp,
  tutoringExp,
  collegeExp,
} from "./../extension/portfolioImgs";

export const FirstTwo = () => {
  return (
    <div>
      <div className="experienceDiv">

        <div className="experienceContainer">
          <div className="experienceRightDiv">
            <img className="experienceImg" src={socirankExp} alt="Image" />
            <div className="experienceIconDiv">
              <a href="https://socirank.com" target="_blank">
                <img className="icon" src={socirankIcon} alt="LinkedIn" />
              </a>
              <a href="https://instagram.com/socirank" target="_blank">
                <img className="icon" src={instaIcon} alt="Image" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.socirank" target="_blank">
                <img className="icon" src={googleIcon} alt="Image" />
              </a>
              <a href="https://apps.apple.com/us/app/socirank/id1628275604" target="_blank">
                <img className="icon" src={appleIcon} alt="Image" />
              </a>
            </div>
          </div>

          <div className="experienceLeftDiv">
            <p className="experienceTitle">SociRank</p>
            <p className="experienceText">{socirankText}</p>
          </div>
        </div>

        <div className="experienceContainer">
          <div className="experienceLeftDiv">
            <p className="experienceTitle">Personal Bank</p>
            <p className="experienceText">{bankText}</p>
          </div>
          <div className="experienceRightDiv">
            <img className="experienceImg2" src={bankExp} alt="Image" />

            <div className="experienceIconDiv">
              <a href="https://github.com/shadowfsdev/banking" target="_blank">
                <img className="icon" src={githubIcon2} alt="Image" />
              </a>
            </div>
          </div>
        </div>

        <div className="experienceContainer">
          <div className="experienceRightDiv">
            <img className="experienceImg" src={foodExp} alt="Image" />
            <div className="experienceIconDiv">
              <a href="https://www.youtube.com/watch?v=gALBM_urZr4" target="_blank">
                <img className="icon" src={youtubeIcon} alt="Image" />
              </a>
              <a href="https://github.com/shadowfsdev/foodscanner" target="_blank">
                <img className="icon" src={githubIcon2} alt="Image" />
              </a>
            </div>
          </div>

          <div className="experienceLeftDiv">
            <p className="experienceTitle">Food Scanner</p>
            <p className="experienceText">{foodText}</p>
          </div>
        </div>

        <div className="experienceContainer">
          <div className="experienceLeftDiv">
            <p className="experienceTitle">HobbyStar</p>
            <p className="experienceText">{hobbystarText}</p>
          </div>
          <div className="experienceRightDiv">
            <img className="experienceImg2" src={hobbystarExp} alt="Image" />

            <div className="experienceIconDiv">
              <a href="https://www.youtube.com/shorts/cgjstc8pins" target="_blank">
                <img className="icon" src={youtubeIcon} alt="Image" />
              </a>
              <a href="https://github.com/shadowfsdev/Hobbystar" target="_blank">
                <img className="icon" src={githubIcon2} alt="Image" />
              </a>
            </div>
          </div>
        </div>

        <div className="experienceContainer">
          <div className="experienceRightDiv">
            <img className="experienceImg" src={socirankWebExp} alt="Image" />
            <div className="experienceIconDiv">
              <a href="https://socirank.com" target="_blank">
                <img className="icon" src={socirankIcon} alt="LinkedIn" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=8CuML5eH288"
                target="_blank">
                <img className="icon" src={youtubeIcon} alt="Image" />
              </a>
            </div>
          </div>

          <div className="experienceLeftDiv">
            <p className="experienceTitle">SociRank Website</p>
            <p className="experienceText">{socirankWebText}</p>
          </div>
        </div>

        <div className="experienceContainer">
          <div className="experienceLeftDiv">
            <p className="experienceTitle">Frontend Tutoring</p>
            <p className="experienceText">{tutorText}</p>
          </div>
          <div className="experienceRightDiv">
            <img className="experienceImg2" src={tutoringExp} alt="Image" />

            <div className="experienceIconDiv">
              <a
                href="https://github.com/shadowfsdev/ecommerce" target="_blank">
                <img className="icon" src={githubIcon2} alt="Image" />
              </a>
            </div>
          </div>
        </div>
        <div className="experienceContainer">
          <div className="experienceRightDiv">
            <img className="experienceImg" src={collegeExp} alt="Image" />
            <div className="experienceIconDiv">
              <a href="https://github.com/shadowfsdev/mybvp" target="_blank">
                <img className="icon" src={githubIcon2} alt="Image" />
              </a>
            </div>
          </div>

          <div className="experienceLeftDiv">
            <p className="experienceTitle">College App</p>
            <p className="experienceText">{collegeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstTwo;
