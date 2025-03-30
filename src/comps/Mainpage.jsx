import React from "react";
import Heading from "./UI/Heading";
import Button from "./UI/Button";
import Accordion from "./UI/Accordion";
import { useTranslation } from "react-i18next";
import mainImg from "/pageImg/mainImg.png"

const Mainpage = () => {
  const { t, i18n } = useTranslation();

  const accordionData = [
    { title: "accordion.accH1", content: "accordion.accT1" },
    { title: "accordion.accH2", content: "accordion.accT2" },
    { title: "accordion.accH3", content: "accordion.accT3" },
    { title: "accordion.accH4", content: "accordion.accT4" },
    { title: "accordion.accH5", content: "accordion.accT5" },
    { title: "accordion.accH6", content: "accordion.accT6" },
  ];

  return (
    <div className="flex flex-col justify-center max-w-9xl">
      <Heading label="main" />
      {/* IMAGE */}
      <div className="-z-10 mx-auto -mt-8 mb-9 flex justify-center px-2.5 md:px-0 lg:px-4">
        <img
          className="w-2xs sm:w-xl md:w-2xl lg:w-7xl"
          src={mainImg}
          alt=""
        />
      </div>
      {/* COME BLOCK */}
      <div className="flex flex-col gap-4 max-w-7xl px-4 mx-auto mb-8 items-end">
        <div className="flex gap-2 flex-col items-start">
          <h3
            className={`w-fit text-3xl md:text-5xl/snug border-primaryColor2 ${
              i18n.language === "ru"
                ? "russian-text-semibold"
                : "english-text-semibold"
            }`}
          >
            {t("come_h")}
          </h3>
          <p
            className={`md:text-3xl/normal text-xl/relaxed ${
              i18n.language === "ru" ? "russian-text" : "english-text"
            }`}
          >
            {t("come_desc")}
          </p>
        </div>
        <Button label="SEE PRICE-LIST" route="/prices" />
      </div>
      {/* FAQS */}
      <div className="flex flex-col bg-stone-950 h-fit mb-8 gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-9xl english-text-semibold text-stone-50 mt-4 mx-auto w-fit">
            FAQS
          </h1>
          <h5
            className={`text-lg leading-none text-stone-400 w-2xs sm:w-xl text-center mx-auto ${
              i18n.language === "ru" ? "russian-text" : "english-text"
            }`}
          >
            {t("faqs_disc")}
            <a href="" className="text-(--primary) cursor-pointer">
              @sports
            </a>
          </h5>
        </div>
        <div className="mb-8">
          <Accordion sections={accordionData} />
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
