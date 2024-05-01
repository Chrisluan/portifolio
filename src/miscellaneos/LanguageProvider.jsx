import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    //language representa o valor readonly
    //changeLanguage é uma função separada do useState para ser chamada do lado de fora do componente
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
