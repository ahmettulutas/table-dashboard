import React, { useState } from "react";
import { enums } from "~/lib/enums";
import useLanguage from "~/lib/translations/translationConfig";


const ToggleLang:React.FC = () => {

  const { toggleLang, lang } = useLanguage(),
    [language, setLanguage] = useState(lang);
  return (
    <div className="flex gap-1 mx-2 cursor-pointer items-center">
      <p className={`${language === enums.langs.en ? "text-primaryBlue underline" : ""} transition-all duration-200 text-xs`} onClick={() => {
        setLanguage("en");
        toggleLang("en");
      }}>EN</p>
      <span>|</span>
      <p className={`${language === enums.langs.tr ? "text-primaryBlue underline" : ""} transition-all duration-200 text-xs`} onClick={() => {
        setLanguage("tr");
        toggleLang("tr");
      }}>TR</p>
    </div>
  );
};

export default ToggleLang;
