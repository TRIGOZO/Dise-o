import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { TRANSLATIONS_ES } from "./locales/es";
import { TRANSLATIONS_EN } from "./locales/en";
import { TRANSLATIONS_QH} from "./locales/qh";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      es: {
        translation: TRANSLATIONS_ES,
      },
      qh: {
        translation: TRANSLATIONS_QH,
      },
    },
  })
  

i18n.changeLanguage("qh");

export { i18n };
