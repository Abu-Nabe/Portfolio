import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Link} from 'react-router-dom';

import {Minibar} from './../extension/minibar'
import {aboutText} from './../extension/about'
import {linkedinIcon, githubIcon, socirankIcon, pelegantIcon} from './../extension/img'

import './../style/home.css'
import backgroundImg from './../img/7.png'

function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    document.title = 'Software Engineer'; // Change the title here
  }, []);
  
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="Home">
      <Helmet>
        <meta name="description" content="Experienced software engineer with 3+ years of proficiency in diverse programming languages and frameworks." />
      </Helmet>
      <div className="mainDiv" id="mainDiv">
        <img className="backgroundImg" src={backgroundImg} alt="Image" onLoad={handleImageLoad}/>
        {imageLoaded ? (
          <>
          <Minibar selected={1} normal="textLabel"/>
          <div className="middleDiv">
            <p className="middleTop">Abu Nabé</p>
            <p className="middleHeader">Software Engineer</p>
            <p className="middleText">{aboutText}</p>

            <div className="iconDiv">
            <a href="https://www.linkedin.com/in/abunabe" target="_blank">
                 <img className="icon" src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://github.com/shadowfsdev" target="_blank">
                <img className="icon" src={githubIcon} alt="Image" />
            </a>
            <a href="https://socirank.com" target="_blank">
                <img className="icon" src={socirankIcon} alt="Image" />
            </a>
            <a href="https://pelegant.netlify.app/" target="_blank">
                <img className="icon" src={pelegantIcon} alt="Image" />
            </a>
            </div>
        </div>
          </>
        ) : (
          <>
            <div className="lineAnimation"></div>
            <div className="blackScreen"></div>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;