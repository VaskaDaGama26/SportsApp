import React from "react";
import { useTranslation } from "react-i18next";
import subs from "/icons/contacts/subs_icon.svg";

const Email = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto pt-8 flex flex-col xl:flex-row gap-8 xl:gap-0 xl:px-0 px-4 justify-between items-start">
      <h1
        className={`text-5xl uppercase ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
      >
        {t("emailComp.emailH")}
      </h1>
      <div className="flex flex-col gap-4 sm:flex-row">
        <input
          className={`border border-gray-400 customFocus px-4 py-3.5 w-72 ${i18n.language === "ru" ? "russian-text-light" : "english-text-light"}`}
          placeholder={t("emailComp.placeholderEmail")}
          type="email"
        />
        <button
          onClick={""}
          className={`w-fit customFocus text-xl english-text-light uppercase flex gap-2 bg-(--primary) px-8 py-3 items-center transition duration-300 hover:shadow-(--shadow3) cursor-pointer ${i18n.language === "ru" ? "russian-text-light" : "english-text-light"}`}
        >
          {t("emailComp.buttonEmail")}
          <img className="h-6 md:h-8" src={subs}></img>
        </button>
      </div>
    </div>
  );
};

export default Email;
