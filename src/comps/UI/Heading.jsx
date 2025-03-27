import React from "react";
import { useTranslation } from "react-i18next";

const Heading = ({ label }) => {
  const { t, i18n } = useTranslation();

  return (
    <h1
      className={`text-7xl w-full lg:text-9xl text-center md:w-fit lg:w-fit mx-auto mt-8 uppercase ${
        i18n.language === "ru"
          ? "russian-text-semibold"
          : "english-text-semibold"
      }`}
      dangerouslySetInnerHTML={{ __html: t(label) }}
    ></h1>
  );
};

export default Heading;
