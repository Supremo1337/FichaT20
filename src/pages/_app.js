import "../styles/globals.css";
import "../styles/styles.scss";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/globalStyles";
import { lightTheme, darkTheme } from "../styles/Themes";
import React, { useContext, useEffect, useState } from "react";
import {
  DarkLightProvider,
  DarkLightContext,
} from "../components/Context/DarkLightProvider";
import usePersistedState from "../utils/usePersistedState";
import {
  UseStateContext,
  UseStateProvider,
} from "../components/Context/UseStateProvider";
import useLocalStorage from "use-local-storage";

function MyApp({ Component, pageProps }) {
  const [isLightTheme, setLightTheme] = usePersistedState("theme", true);
  useEffect(() => {}, [isLightTheme]);

  return (
    <>
      {/* <UseStateProvider> */}
      <DarkLightProvider
        isLightTheme={isLightTheme}
        setLightTheme={setLightTheme}
      >
        <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </DarkLightProvider>
      {/* </UseStateProvider> */}
    </>
  );
}

export default MyApp;
