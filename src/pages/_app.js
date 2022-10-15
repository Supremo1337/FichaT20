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

function MyApp({ Component, pageProps }) {
  const [isLightTheme, setLightTheme] = useState(true);

  useEffect(() => {}, [isLightTheme]);

  return (
    <>
      <DarkLightProvider
        isLightTheme={isLightTheme}
        setLightTheme={setLightTheme}
      >
        <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </DarkLightProvider>
    </>
  );
}

export default MyApp;
