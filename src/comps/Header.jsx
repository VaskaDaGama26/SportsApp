import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import burger from "/icons/menu_icon.svg";
import close from "/icons/close_icon.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsMenuOpen(false);
  };

  const leftItems = [
    { id: 1, label: "prices", link: "/prices" },
    { id: 2, label: "news", link: "/news" },
  ];
  const rightItems = [
    { id: 3, label: "contacts", link: "/contacts" },
    { id: 4, label: "about", link: "/about" },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const renderNav = () => (
    <nav className="flex items-center w-full max-w-7xl justify-between">
      {/* LOGO */}
      <a href="/">
        <img src="./logo.svg" alt="Sports | Sport Club" />
      </a>
      <div className="flex flex-row gap-24 items-center">
        {/* LEFT NAV */}
        <ul className="flex flex-row justify-end gap-16 items-center w-3xs">
          {leftItems.map((item) => (
            <li
              key={item.id}
              className={`text-gray-950  text-xl uppercase ${
                i18n.language === "ru" ? "russian-text" : "english-text"
              }`}
            >
              <a className="underline-animation" href={item.link}>
                {t(item.label)}
              </a>
            </li>
          ))}
        </ul>
        {/* CENTER LOGO */}
        <a href="/">
          <img className="h-6" src="./logo.png" alt="Sports | Sport Club" />
        </a>
        {/* RIGHT NAV */}
        <ul className="flex flex-row justify-start gap-16 items-center w-3xs">
          {rightItems.map((item) => (
            <li
              key={item.id}
              className={`text-gray-950 text-xl h-fit uppercase ${
                i18n.language === "ru" ? "russian-text" : "english-text"
              }`}
            >
              <a className="underline-animation" href={item.link}>
                {t(item.label)}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* LANGUAGE BUTTONS */}
      <div>
        {/* Button RU */}
        <button
          onClick={() => changeLanguage("ru")}
          className={`text-xl me-3 english-text ${
            i18n.language === "ru"
              ? "border-b-2"
              : "text-gray-950 cursor-pointer"
          }`}
        >
          RU
        </button>
        {/* Button EN */}
        <button
          onClick={() => changeLanguage("en")}
          className={`text-xl english-text ${
            i18n.language === "en"
              ? "border-b-2"
              : "text-gray-950 cursor-pointer"
          }`}
        >
          EN
        </button>
      </div>
    </nav>
  );
  const renderMobileNav = () => (
    <>
      {/* CLOSE ICON */}
      <div className="w-full justify-end flex mb-12">
        <img
          className="h-8"
          src={close}
          alt="Menu"
          onClick={() => setIsMenuOpen(false)}
        />
      </div>
      <nav className="flex flex-col items-end w-full max-w-7xl gap-8">
        <div className="flex flex-col gap-24 items-center">
          {/* NAV */}
          <ul className="flex flex-col justify-end gap-8 items-end w-fit">
            {leftItems.map((item) => (
              <li
                key={item.id}
                className={`text-gray-950  text-xl uppercase ${
                  i18n.language === "ru" ? "russian-text" : "english-text"
                }`}
              >
                <a className="underline-animation" href={item.link}>
                  {t(item.label)}
                </a>
              </li>
            ))}
            {rightItems.map((item) => (
              <li
                key={item.id}
                className={`text-gray-950 text-xl h-fit uppercase ${
                  i18n.language === "ru" ? "russian-text" : "english-text"
                }`}
              >
                <a className="underline-animation" href={item.link}>
                  {t(item.label)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* LANGUAGE BUTTONS */}
        <div className="border-t-2 border-black">
          {/* Button RU */}
          <button
            onClick={() => changeLanguage("ru")}
            className={`text-xl me-3 english-text ${
              i18n.language === "ru"
                ? "border-b-2"
                : "text-gray-950 cursor-pointer"
            }`}
          >
            RU
          </button>
          {/* Button EN */}
          <button
            onClick={() => changeLanguage("en")}
            className={`text-xl english-text ${
              i18n.language === "en"
                ? "border-b-2"
                : "text-gray-950 cursor-pointer"
            }`}
          >
            EN
          </button>
        </div>
      </nav>
    </>
  );

  return (
    <>
      {/* DESKTOP */}
      <div className="z-50 sticky top-0 flex-row justify-center items-center w-full h-20 py-4 px-5 mx-auto bg-(--primary) shadow5 hidden lg:flex">
        {renderNav()}
      </div>

      {/* MOBILE */}
      <div className="z-50 sticky top-0 flex-row justify-between w-full h-20 py-4 px-5 mx-auto bg-(--primary) shadow5 flex lg:hidden">
        {/* LOGO */}
        <a className="flex items-center" href="/">
          <img src="/logo.svg" alt="Sports | Sport Club" />
        </a>
        {/* CENTER LOGO */}
        <a className="flex items-center" href="/">
          <img className="h-6" src="./logo.png" alt="Sports | Sport Club" />
        </a>
        {/* BURGER ICON */}
        <div
          className="flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img className="h-8" src={burger} alt="Menu" />
        </div>
      </div>
      {/* SIDE MENU */}
      <div
        className={`menu lg:hidden fixed top-0 right-0 w-2/3 md:w-1/3 h-screen py-8 px-6 bg-(--primary) bg-opacity-75 z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {renderMobileNav()}
      </div>
    </>
  );
};

export default Header;
