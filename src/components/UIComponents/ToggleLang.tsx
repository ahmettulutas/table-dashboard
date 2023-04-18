import React from "react";
import { enums } from "~/lib/enums";
import useLanguage from "~/lib/translations/translationConfig";


const ToggleLang:React.FC = () => {

  const { toggleLang, lang } = useLanguage();
  return (
    <div className="flex gap-1 mx-2 cursor-pointer items-center">
      <p className={`${lang === enums.langs.en ? "text-primaryBlue dark:text-darkPrimaryBlue underline" : ""} transition-all duration-200 text-xs`} onClick={() => {

        toggleLang("en");
      }}>EN</p>
      <span>|</span>
      <p className={`${lang === enums.langs.tr ? "text-primaryBlue dark:text-darkPrimaryBlue underline" : ""} transition-all duration-200 text-xs`} onClick={() => {
        toggleLang("tr");
      }}>TR</p>
    </div>
  );
};

export default ToggleLang;
