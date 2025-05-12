import { createContext, useContext , useState , useEffect } from "react";
// create the context

export const ThemeContext = createContext();

// create the custom hook

export const useTheme = ()=>useContext(ThemeContext);

//create Provider
export const ThemeProvider = ({children})=>{
    // setDefault theme
    const[theme , setTheme] = useState("light");


    useEffect(()=>{
        document.body.className = theme;
    },[theme]);

    const toggleTheme = () =>{
        setTheme(theme ==="light" ? "dark":"light");
    }
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

