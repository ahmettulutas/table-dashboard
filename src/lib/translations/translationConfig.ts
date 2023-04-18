import i18next from "i18next";
import { useState } from "react";
import { Enums } from "../enums";

const useLanguage = () => {
  const [lang, setLang] = useState(i18next.language as Enums["langs"]),
    toggleLang = (langKey: Enums["langs"]) => {
      i18next.changeLanguage(langKey, () => {
        setLang(langKey);
        localStorage.setItem("lang", langKey);
      });

    };
  return { lang, toggleLang };
};
export default useLanguage;
