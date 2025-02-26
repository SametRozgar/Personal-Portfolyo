import { createContext, useState, useEffect } from "react";
import ceviri from "../data/translations.json";

export const ContextLanguage = createContext();

export const LanguageContexts = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [content, setContent] = useState(ceviri[language] || {});

  useEffect(() => {
    setContent(ceviri[language] || {});
  }, [language]);

  const dilDegistir = () => {
    setLanguage(()=>{
      if(language==="en")
      {
        return"tr"
      }else if(language==="tr")
        {
     return "en"
      }
    });
  };

  return (
    <ContextLanguage.Provider value={{ dilDegistir, content, language }}>
      {children}
    </ContextLanguage.Provider>
  );
};
