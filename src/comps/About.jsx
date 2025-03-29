import React from "react";
import Heading from "./UI/Heading";
import { useTranslation } from "react-i18next";
import aboutImg from "/pageImg/aboutImg.png";
import Email from "./UI/Email.jsx";

import weightIcon from "/about/weightIcon.svg";
import communityIcon from "/about/communityIcon.svg";
import medalIcon from "/about/medalIcon.svg";
import trophyIcon from "/about/trophyIcon.svg";

const About = () => {
  const { t, i18n } = useTranslation();

  const storyItems = [
    { icon: weightIcon, text: "weightT" },
    { icon: communityIcon, text: "communityT" },
    { icon: medalIcon, text: "medalT" },
    { icon: trophyIcon, text: "trophyT" },
  ];

  return (
    <>
      <div className="flex flex-col">
        <Heading label="about" />
        {/* IMAGE */}
        <div className="max-w-7xl mx-auto -z-10 -mt-8 mb-9 flex justify-center px-2.5 md:px-0 lg:px-4">
          <img
            className="w-2xs sm:w-xl md:w-2xl lg:w-7xl"
            src={aboutImg}
            alt=""
          />
        </div>
        <p
          className={`text-2xl/normal max-w-7xl px-4 mx-auto mb-8 text-start ${i18n.language === "ru" ? "russian-text" : "english-text"}`}
        >
          {t("aboutT")}
        </p>
        {/* STORY */}
        <div className="bg-stone-950">
          <div className="gap-32 flex flex-col lg:flex-row max-w-7xl px-5 py-8 items-center justify-between mx-auto w-full">
            {/* HEADING STORY */}
            <div>
              <h1
                className={`text-7xl uppercase text-center md:text-8xl text-stone-50 mt-4 mx-auto w-fit ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
              >
                {t("storyH")} <p className="text-(--primary)">SPORTS</p>
              </h1>
            </div>
            {/* LIST STORY */}
            <div className="lg:w-xl flex flex-col gap-4">
              <ul className="flex flex-col gap-2 w-full">
                {storyItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center gap-4 justify-between w-full border-b border-gray-400 last:border-b-2 last:border-(--primary) pb-2"
                  >
                    <img className="h-8" src={item.icon} alt="Icon" />
                    <li
                      className={`text-2xl/tight text-end text-stone-50 ${i18n.language === "ru" ? "russian-text-light" : "english-text-light"}`}
                    >
                      {t(item.text)}
                    </li>
                  </div>
                ))}
              </ul>
              <p
                className={`text-stone-50 text-end text-2xl/tight ${i18n.language === "ru" ? "russian-text-light" : "english-text-light"}`}
              >
                {t("storyT")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Email />
    </>
  );
};

export default About;
