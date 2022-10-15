import React, { useState, createContext } from "react";

export const DarkLightContext = createContext({});

export const DarkLightProvider = ({ children, isLightTheme, setLightTheme }) => {
  const toggleTheme = () => {
    setLightTheme(!isLightTheme)
  };
  

  return (
    <DarkLightContext.Provider value={{ toggleTheme, isLightTheme }}>
      {children}
    </DarkLightContext.Provider>
  );
};
