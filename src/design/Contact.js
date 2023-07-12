/** @format */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Minibar } from "./../extension/minibar";

import backgroundImg from "./../img/1.png";

import "./../style/contact.css";

import { linkedinIcon, githubIcon, socirankIcon, facebookIcon, gmailIcon, whatsappIcon } from "./../extension/img";

function Contact() {
  useEffect(() => {
    document.title = "Contact me - Software Developer"; // Change the title here
  }, []);

  return (
    <div className="Contact">
      <div className="contactmainDiv">
        <img className="contactBackgroundImg" src={backgroundImg} alt="Image" />
        <Minibar selected={4} normal="textLabel" />

        <div className="contactCenterDiv">
          <a href="mailto:abubacarnabe@gmail.com" target="_blank">
            <div class="contactDiv">
              <img src={gmailIcon} alt="Image" class="contactImg"></img>
              <p class="contactName">abubacarnabe@gmail.com</p>
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
              <img src={facebookIcon} alt="Image" class="contactImg"></img>
              <p class="contactName">Abu's Facebook - not active</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/mohamed-abu-bacar-nabe-002371204/" target="_blank">
            <div class="contactDiv">
              <img src={linkedinIcon} alt="Image" class="contactImg"></img>
              <p class="contactName">Abu's LinkedIn - not active</p>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Contact;
