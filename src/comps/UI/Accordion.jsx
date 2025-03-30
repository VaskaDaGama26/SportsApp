import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import arrow_down from "/icons/arrow_down.svg";

function Accordion({ sections }) {
  const { t, i18n } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col gap-4 px-4">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`${
            activeIndex === index
              ? "border-primaryColor2"
              : "border-primaryColor1"
          } `}
        >
          <button
            className={`flex text-stone-50 text-2xl justify-between pb-3 w-full text-left cursor-pointer ${
              i18n.language === "ru" ? "russian-text" : "english-text"
            } ${activeIndex === index ? "text-(--primary)" : "text-stone-50"}  `}
            onClick={() => toggleAccordion(index)}
          >
            {t(section.title)}
            <img
              src={arrow_down}
              alt=""
              className={`transition-transform duration-300 ${
                activeIndex === index ? "-rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {activeIndex === index && (
            <div
              className={` pb-6 text-xl text-stone-400 ${
                i18n.language === "ru" ? "russian-text" : "english-text"
              }`}
            >
              <p>{t(section.content)}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
