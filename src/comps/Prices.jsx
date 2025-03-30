import React from "react";
import Heading from "./UI/Heading";
import { useTranslation } from "react-i18next";

const Prices = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-12 px-2">
      <Heading label="prices" />
      {/* OFF-PEAK TIME */}
      <div className="flex flex-row gap-4 items-center english-text-semibold text-base/tight md:text-2xl/tight uppercase">
        <p className="px-2 py-2.5 bg-(--primary) w-fit">OFF-PEAK:</p>
        <p>07:00 | 12:00 - 14:00 | 22:00 - 00:00</p>
      </div>
      {/* RENTAL TABLE */}
      <table className="table-auto w-full text-center">
        <thead>
          {/* TABLE HEADER 1 */}
          <tr className="bg-stone-950 border-2 border-stone-950">
            <th
              colSpan="3"
              className={`p-3 text-4xl/tight uppercase md:text-5xl/tight text-(--primary) ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              {t("tables.rentalTable.header")}
            </th>
          </tr>
          {/* TABLE HEADER 1/3 */}
          <tr>
            <th className="bg-(--dark-primary) border-2 border-stone-950 p-2"></th>
            <th
              className={`text-xl/tight md:text-4xl/tight text-stone-950 bg-(--primary) border-2 border-stone-950 uppercase p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              {t("tables.rentalTable.standart")}
            </th>
            <th
              className={`text-xl/tight md:text-4xl/tight text-stone-950 bg-(--primary) border-2 border-stone-950 uppercase p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              {t("tables.rentalTable.offpeak")}
            </th>
          </tr>
        </thead>
        <tbody>
          {/* 1 ROW */}
          <tr>
            <td
              className={`border-2 text-base md:text-2xl border-stone-950 p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              {t("tables.rentalTable.amateur")}
            </td>
            <td
              className={`border-2 text-base md:text-2xl border-stone-950 p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              4.000
            </td>
            <td
              className={`border-2 text-base md:text-2xl border-stone-950 p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              3.000
            </td>
          </tr>
          {/* 2 ROW */}
          <tr>
            <td
              className={`border-2 text-base md:text-2xl border-stone-950 p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              {t("tables.rentalTable.pro")}
            </td>
            <td
              className={`border-2 text-base md:text-2xl border-stone-950 p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              3.000
            </td>
            <td
              className={`border-2 text-base md:text-2xl border-stone-950 p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              2.000
            </td>
          </tr>
        </tbody>
      </table>
      {/* GROUP TABLE */}
      <table className="table-auto w-full text-center">
        <thead>
          {/* TABLE HEADER 1 */}
          <tr className="bg-stone-950 border-2 border-stone-950">
            <th
              colSpan="3"
              className={`p-3 text-4xl/tight uppercase md:text-5xl/tight text-(--primary) ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              {t("tables.groupTable.header")}
            </th>
          </tr>
          {/* TABLE HEADER 1/3 */}
          <tr>
            <th
              className={`text-base md:text-2xl text-stone-950 bg-(--primary) border-2 border-stone-950 p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              {t("tables.groupTable.attendance")}
            </th>
            <th
              className={`text-base md:text-2xl text-stone-950 bg-stone-400 border-2 border-stone-950 p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              {t("tables.groupTable.amateur")}
            </th>
            <th
              className={`text-base md:text-2xl text-stone-950 bg-stone-400 border-2 border-stone-950 p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              {t("tables.groupTable.sport")}
            </th>
          </tr>
        </thead>
        <tbody>
          {/* 1 ROW */}
          <tr>
            <td
              className={`border-2 text-base md:text-2xl border-stone-950 p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              4x
            </td>
            <td
              className={`border-2 text-base md:text-2xl border-stone-950 p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              -
            </td>
            <td
              className={`border-2 text-base md:text-2xl border-stone-950 p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              18.000
            </td>
          </tr>
          {/* 2 ROW */}
          <tr>
            <td
              className={`border-2 text-base md:text-2xl border-stone-950 p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              8x
            </td>
            <td
              className={`border-2 text-base md:text-2xl border-stone-950 p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              20.000
            </td>
            <td
              className={`border-2 text-base md:text-2xl border-stone-950 p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              26.000
            </td>
          </tr>
          {/* 3 ROW */}
          <tr>
            <td
              className={`border-2 text-base md:text-2xl border-stone-950 p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              12x
            </td>
            <td
              className={`border-2 text-base md:text-2xl border-stone-950 p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              23.000
            </td>
            <td
              className={`border-2 text-base md:text-2xl border-stone-950 p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              32.000
            </td>
          </tr>
          {/* 4 ROW */}
          <tr>
            <td
              className={`border-2 text-base md:text-2xl border-stone-950 p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              24x
            </td>
            <td
              className={`border-2 text-base md:text-2xl border-stone-950 p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              -
            </td>
            <td
              className={`border-2 text-base md:text-2xl border-stone-950 p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              36.000
            </td>
          </tr>
        </tbody>
      </table>
      {/* INDIVIDUAL TABLE */}
      <table className="table-auto w-full text-center">
        <thead>
          {/* TABLE HEADER 1 */}
          <tr className="bg-stone-950 border-2 border-stone-950">
            <th
              colSpan="3"
              className={`p-3 text-4xl/tight uppercase md:text-5xl/tight text-(--primary) ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              {t("tables.individualTable.header")}
            </th>
          </tr>
          {/* TABLE HEADER 2 */}
          <tr>
            <th
              colSpan="3"
              className={`text-xl/tight md:text-4xl/tight text-stone-950 bg-(--primary) border-2 border-stone-950 uppercase p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              {t("tables.individualTable.standart")}
            </th>
          </tr>
          {/* TABLE HEADER 2/3 */}
          <tr>
            <th className="bg-(--dark-primary) border-2 border-stone-950 p-2"></th>
            <th
              className={`text-base/tight md:text-2xl text-stone-950 bg-stone-400 border-2 border-stone-950 p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              {t("tables.individualTable.uptoeight")}
            </th>
            <th
              className={`text-base/tight md:text-2xl text-stone-950 bg-stone-400 border-2 border-stone-950 p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              {t("tables.individualTable.overeight")}
            </th>
          </tr>
        </thead>
        <tbody>
          {/* 1 ROW */}
          <tr>
            <td
              className={`border-2 text-base md:text-2xl border-stone-950 p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              {t("tables.individualTable.individual")}
            </td>
            <td
              className={`border-2 text-base md:text-2xl border-stone-950 p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              6.000
            </td>
            <td
              className={`border-2 text-base md:text-2xl border-stone-950 p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              9.000
            </td>
          </tr>
          {/* 2 ROW */}
          <tr>
            <td
              className={`border-2 text-base md:text-2xl border-stone-950 p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              {t("tables.individualTable.headcoach")}
            </td>
            <td
              colSpan="4"
              className={`border-2 text-base md:text-2xl border-stone-950 p-2 ${i18n.language === "ru" ? "russian-text-semibold" : "english-text-semibold"}`}
            >
              20.000
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Prices;
