/** @format */

import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./../style/minibar.css";

export const Minibar = ({ selected, normal }) => {
  const navigate = useNavigate();

  const checkSelected = (id) => {
    if (selected === id) {
      return "textSelected"; // Replace "selectedClassName" with the desired className for the selected item
    } else {
      return normal; // Use the normal className for other items
    }
  };

  return (
    <div>
      <div id="textDiv" className="textDiv">
        <p className={checkSelected(1)}>
            <Link className="plain-link" to={"/"}>
                Home
            </Link>
        </p>
        <p className={checkSelected(2)}>
        <Link className="plain-link" to={"/experience"}>
            Professional experience
        </Link></p>
        <p className={checkSelected(3)}>
          <Link className="plain-link" to={"/skills"}>
            Skills
          </Link>
        </p>
        <p className={checkSelected(4)}>
          <Link className="plain-link" to={"/contact"}>
            Contact me
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Minibar;
