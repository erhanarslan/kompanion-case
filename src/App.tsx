import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "./i18n";
import Register from "./pages/Register";
import "./App.css";
import { RegisterProvider } from './context/registerContext';
import { useState } from "react";



const App = () => {
  return (
    <RegisterProvider>
      <I18nextProvider i18n={i18n}>
        <LanguageSwitcher />
        <Register />
      </I18nextProvider>
    </RegisterProvider>
  );
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);
  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.body.dir = currentLang === "ar" ? "ltr" : "rtl";
    setCurrentLang(newLang);
  };


  return (
    <div className="language-switcher">
      <button className="langButton" onClick={toggleLanguage}>
        {currentLang === 'en' ? 'العربية' : 'English'}
      </button>
    </div>
  );
};

export default App;
