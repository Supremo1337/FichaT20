import React, { useState, createContext } from "react";

export const DarkLightContext = createContext({});

export const DarkLightProvider = ({ children, isLightTheme, setLightTheme }) => {
  const toggleTheme = () => {
    // if (theme === "light") {
    //   setTheme("dark");
    // } else {
    //   setTheme("light");
    // }
    setLightTheme(!isLightTheme)
  };
  
console.log(isLightTheme)
  return (
    <DarkLightContext.Provider value={{ toggleTheme, isLightTheme }}>
      {children}
    </DarkLightContext.Provider>
  );
};
