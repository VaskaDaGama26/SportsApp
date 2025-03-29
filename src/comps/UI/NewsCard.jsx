import React from "react";
import { useTranslation } from "react-i18next";

const NewsCard = ({ items }) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row gap-4 md:gap-12 items-center justify-center mx-4"
        >
          <img className="w-80 lg:w-96" src={t(item.image)} alt="" />
          <div className="w-full md:w-1/2 flex flex-col items-start gap-4">
            <h1
              className={`text-4xl text-(--primary) border-b ${
                i18n.language === "ru"
                  ? "russian-text-semibold"
                  : "english-text-semibold"
              }`}
            >
              {t(item.date)}
            </h1>
            <h2
              className={`text-3xl/snug ${
                i18n.language === "ru"
                  ? "russian-text-semibold"
                  : "english-text-semibold"
              }`}
            >
              {t(item.heading)}
            </h2>
            <p
              className={`text-xl/normal ${
                i18n.language === "ru" ? "russian-text" : "english-text"
              }`}
            >
              {t(item.text)}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default NewsCard;
