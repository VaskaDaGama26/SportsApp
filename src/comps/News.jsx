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
      image: "newsBlock.news1Img",
      heading: "newsBlock.news1H",
      text: "newsBlock.news1T",
      date: "newsBlock.news1Date",
    },
    {
      id: 2,
      image: "newsBlock.news2Img",
      heading: "newsBlock.news2H",
      text: "newsBlock.news2T",
      date: "newsBlock.news2Date",
    },
    {
      id: 3,
      image: "newsBlock.news3Img",
      heading: "newsBlock.news3H",
      text: "newsBlock.news3T",
      date: "newsBlock.news3Date",
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
