import React, { useContext } from 'react';
import { LanguageContext } from '../miscellaneos/LanguageProvider.jsx';
import translations from '../miscellaneos/translations.json';

const Translations = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    keys.forEach((k) => {
      value = value[k];
    });

    return value;
  };

  return { t, changeLanguage };
};

export default Translations;
