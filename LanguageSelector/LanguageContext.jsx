import { createContext , useContext , useState } from "react";

// create context

const LanguageContext = createContext();

// Creating custom hook 

export const useLanguage = ()=> useContext(LanguageContext);

// Create Provider

export const LanguageProvider = ({children}) =>{

    //set Default Language 

    const[Language , setLanguage] = useState("en");


    const toggleLanguage = (langCode) =>{
        setLanguage(langCode);
    };

    return(
        <LanguageContext.Provider
          value={{Language , toggleLanguage}}
        >

            {children}
        </LanguageContext.Provider>
    )
};

