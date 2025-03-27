import React from "react";
import Heading from "./UI/Heading";
import NewsCard from "./UI/NewsCard";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const newsItems = [
    {
      id: 1,
      image: "news1Img",
      heading: "news1H",
      text: "news1T",
      date: "news1Date",
    },
    {
      id: 2,
      image: "news2Img",
      heading: "news2H",
      text: "news2T",
      date: "news2Date",
    },
    {
      id: 3,
      image: "news3Img",
      heading: "news3H",
      text: "news3T",
      date: "news3Date",
    },
  ];

  return (
    <>
      <Heading label="news" />
      <div className="max-w-7xl mx-auto flex flex-col gap-8 justify-around items-center mt-8">
        <NewsCard items={newsItems} />
      </div>
    </>
  );
};

export default News;
