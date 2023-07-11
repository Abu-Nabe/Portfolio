import React, {useEffect} from 'react';
import { BrowserRouter as Link} from 'react-router-dom';

import {Minibar} from './../extension/minibar'
import {aboutText} from './../extension/about'
import {linkedinIcon, githubIcon, socirankIcon} from './../extension/img'

import './../style/home.css'
import backgroundImg from './../img/7.png'

function Home() {
  useEffect(() => {
    document.title = 'Software Developer'; // Change the title here
  }, []);
  
  return (
    <div className="Home">
      <div className="mainDiv" id="mainDiv">
        <img className="backgroundImg" src={backgroundImg} alt="Image" />
        <Minibar selected={1} normal="textLabel"/>
          <div className="middleDiv">
            <p className="middleTop">Abu Nabé</p>
            <p className="middleHeader">Software Developer</p>
            <p className="middleText">{aboutText}</p>

            <div className="iconDiv">
            <a href="https://www.linkedin.com/in/mohamed-abu-bacar-nabe-002371204/" target="_blank">
                 <img className="icon" src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://github.com/shadowfsdev" target="_blank">
                <img className="icon" src={githubIcon} alt="Image" />
            </a>
            <a href="https://socirank.com" target="_blank">
                <img className="icon" src={socirankIcon} alt="Image" />
            </a>

            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;