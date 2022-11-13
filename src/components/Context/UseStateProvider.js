import React, { useState, createContext } from "react";

export const UseStateContext = createContext({});

export const UseStateProvider = ({ children }) => {
  const [attributeFor, setAttributeFor] = useState(0);
  const [attributeDes, setAttributeDes] = useState(0);
  const [attributeCon, setAttributeCon] = useState(0);
  const [attributeInt, setAttributeInt] = useState(0);
  const [attributeSab, setAttributeSab] = useState(0);
  const [attributeCar, setAttributeCar] = useState(0);

  return (
    <UseStateContext.Provider
      value={{
        attributeFor,
        attributeDes,
        attributeCon,
        attributeInt,
        attributeSab,
        attributeCar,
      }}
    >
      {children}
    </UseStateContext.Provider>
  );
};
