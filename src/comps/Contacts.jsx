import React from "react";
import Heading from "./UI/Heading";
import Email from "./UI/Email";
import img from "/pageImg/contactsImg.png";
import fb from "/icons/contacts/fbContacts.svg";
import inst from "/icons/contacts/instContacts.svg";
import wp from "/icons/contacts/wpContacts.svg";
import phone from "/icons/contacts/phoneContacts.svg";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="flex flex-col xl:flex-row mt-8 md:px-0 px-2 justify-between gap-4 max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 w-fit sm:w-xl lg:mx-0 mx-auto">
          <Heading label="contacts" />
          <p
            className={`text-2xl/relaxed ${i18n.language === "ru" ? "russian-text" : "english-text"}`}
          >
            {t("contactsT")}
          </p>
          <div className="flex flex-col gap-8 items-start">
            <div className="flex flex-row gap-2">
              <img className="h-8" src={fb} alt="Facebook Icon" />
              <a
                className={`text-2xl cursor-pointer ${i18n.language === "ru" ? "russian-text" : "english-text"}`}
                href=""
              >
                sports
              </a>
            </div>
            <div className="flex flex-row gap-2">
              <img className="h-8" src={inst} alt="Instagram Icon" />
              <a
                className={`text-2xl cursor-pointer ${i18n.language === "ru" ? "russian-text" : "english-text"}`}
                href=""
              >
                @sports
              </a>
            </div>
            <div className="flex flex-row gap-2">
              <img className="h-8" src={wp} alt="WhatsApp" />
              <a
                className={`text-2xl cursor-pointer ${i18n.language === "ru" ? "russian-text" : "english-text"}`}
                href=""
              >
                +1 (999)-999-99-99
              </a>
            </div>
            <div className="flex flex-row gap-2">
              <img className="h-8" src={phone} alt="Phone" />
              <a
                className={`text-2xl cursor-pointer ${i18n.language === "ru" ? "russian-text" : "english-text"}`}
                href=""
              >
                +1 (999)-999-99-99
              </a>
            </div>
          </div>
        </div>
        <img className="w-fit xl:mx-0 mx-auto" src={img} alt="Contacts Image" />
      </div>
      <Email />
    </>
  );
};

export default Contacts;
