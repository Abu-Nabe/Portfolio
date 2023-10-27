/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Minibar } from "./../extension/minibar";

import backgroundImg from "./../img/1.png";

import "./../style/contact.css";

import {
  linkedinIcon,
  githubIcon,
  socirankIcon,
  facebookIcon2,
  gmailIcon,
  whatsappIcon,
} from "./../extension/img";

function Contact() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    document.title = "Contact me - Software Engineer"; // Change the title here
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="Contact">
      <div className="contactmainDiv">
        <img className="contactBackgroundImg" src={backgroundImg} alt="Image"  onLoad={handleImageLoad}/>
        {imageLoaded ? (
          <>
            <Minibar selected={4} normal="textLabel" />

            <div className="contactCenterDiv">
              <a href="mailto:abubacarnabe@gmail.com" target="_blank">
                <div class="contactDiv">
                  <img src={gmailIcon} alt="Image" class="contactImg"></img>
                  <p class="contactName">Abu's Gmail</p>
                </div>
              </a>
              <a href="https://wa.link/vs81kn" target="_blank">
                <div class="contactDiv">
                  <img src={whatsappIcon} alt="Image" class="contactImg"></img>
                  <p class="contactName">Abu's WhatsApp</p>
                </div>
              </a>
              <a href="https://github.com/shadowfsdev" target="_blank">
                <div class="contactDiv">
                  <img src={githubIcon} alt="Image" class="contactImg"></img>
                  <p class="contactName">Abu's Github</p>
                </div>
              </a>
              <a href="https://www.facebook.com/abumancityabu/" target="_blank">
                <div class="contactDiv">
                  <img src={facebookIcon2} alt="Image" class="contactImg"></img>
                  <p class="contactName">Abu's Facebook</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/abunabe"
                target="_blank"
              >
                <div class="contactDiv">
                  <img src={linkedinIcon} alt="Image" class="contactImg"></img>
                  <p class="contactName">Abu's LinkedIn</p>
                </div>
              </a>
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

export default Contact;
