import React, { useState } from "react";
import fbIcon from "/fb_icon.svg";
import instIcon from "/inst_icon.svg";
import wpIcon from "/wp_icon.svg";
import fbHover from "/fb_iconHover.svg";
import instHover from "/inst_iconHover.svg";
import wpHover from "/wp_iconHover.svg";

const Footer = () => {
  const [fbHovered, setFbHovered] = useState(false);
  const [instHovered, setInstHovered] = useState(false);
  const [wpHovered, setWpHovered] = useState(false);

  return (
    <div className="border-t-1 border-stone-400 flex flex-col md:flex-row gap-4 md:gap-0 pt-4 mt-8 pb-16 mx-4 justify-between">
      <div className="flex md:flex-row flex-col items-start md:items-center gap-2 md:gap-4 md:ms-4">
        <p className="text-stone-400 english-text text-lg leading-none">
          © 2025 Sports. All rights reserved.
        </p>
        {/* DOC LINKS */}
        <div className="flex flex-row gap-4 md:gap-8">
          <a
            className="leading-none text-stone-400 border-b-1 hover:text-stone-600 transition duration-300 english-text text-lg"
            href="/"
          >
            License
          </a>
          <a
            className="leading-none text-stone-400 border-b-1 hover:text-stone-600 transition duration-300 english-text text-lg"
            href="/"
          >
            Styleguide
          </a>
          <a
            className="leading-none text-stone-400 border-b-1 hover:text-stone-600 transition duration-300 english-text text-lg"
            href="/"
          >
            Changelog
          </a>
        </div>
      </div>
      {/* SOCIAL ICONS */}
      <div className="flex flex-row items-center gap-2 me-4">
        <div
          className="flex items-center justify-center cursor-pointer w-7 h-7"
          onMouseEnter={() => setFbHovered(true)}
          onMouseLeave={() => setFbHovered(false)}
        >
          {fbHovered ? <img src={fbHover} /> : <img src={fbIcon} />}
        </div>
        <div
          className="flex items-center justify-center cursor-pointer w-7 h-7"
          onMouseEnter={() => setInstHovered(true)}
          onMouseLeave={() => setInstHovered(false)}
        >
          {instHovered ? <img src={instHover} /> : <img src={instIcon} />}
        </div>
        <div
          className="flex items-center justify-center cursor-pointer w-7 h-7"
          onMouseEnter={() => setWpHovered(true)}
          onMouseLeave={() => setWpHovered(false)}
        >
          {wpHovered ? <img src={wpHover} /> : <img src={wpIcon} />}
        </div>
      </div>
    </div>
  );
};

export default Footer;
