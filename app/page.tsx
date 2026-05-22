"use client";
import Home from "../pages/home";

import global_chinese_traditional from "../lib/translations/chinese_traditional/global.json";
import global_english from "../lib/translations/english/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: { global: global_english },
    "zh-HK": { global: global_chinese_traditional },
  },
  fallbackLng: "en",
});

export default function Page() {
  return (
    <I18nextProvider i18n={i18next}>
      <Home />
    </I18nextProvider>
  );
}
