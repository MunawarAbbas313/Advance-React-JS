import { createContext, useContext, useState, useEffect } from "react";

// Create the context
export const ThemeContext = createContext();

// create a custom hook to use Values
// pass the created context to useContext
export const useTheme = () => useContext(ThemeContext); // This is the correction!

// create Provider

export const ThemeProvider = ({ children }) => { // Note the capital 'C' in Children
  const [theme, setTheme] = useState("light");

  // Set logic for switching between modes

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Create a toogle function to change the modes

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return ( // Don't forget the 'return' statement here!
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
