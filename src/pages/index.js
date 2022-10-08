import CharacterData from "../components/CharacterData";
import Attribute from "../components/Attribute";
import Lifeandmane from "../components/LifeAndMane";
import Skills from "../components/Skills";
import Attack from "../components/Attack";
import DefenseAndProfiency from "../components/DefenseAndProficiency";
import Notes from "../components/Notes";
import Invetory from "../components/Inventory";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/globalStyles";
import { lightTheme, darkTheme } from "../styles/Themes";
import React, { useState } from "react";
import Switch from "react-Switch";
// import FontStyles from "../fonts/fontStyles";

const Global = styled.div`
  width: 100%;
  height: auto;
  // background: gray;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 0;
`;

const GlobalRow = styled.div`
  width: 77%;
  height: auto;
  // background: orange;
  display: flex;
  flex-direction: column;
  border: 0;

`;

const RowGroup = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  // background: purple;
  border: 0;

`;

const GlobalColumn = styled.div`
  width: 23%;
  height: 960px;
  display: flex;
  // background: purple;
  border: 0;

`;

const DivSwitcher = styled.div`
  background: blue;
  border: 0;

`;

// ReactDOM.render(
//   <React.StrictMode>
//     <FontStyles />
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

export default function Home() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <DivSwitcher>
          <GlobalStyles />
          <Switch
            onChange={toggleTheme}
            checked={theme === "dark"}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
          />
        </DivSwitcher>
        <Global>
          <GlobalRow>
            <RowGroup>
              <CharacterData />
              <Lifeandmane />
              <Attribute />
            </RowGroup>
            <RowGroup>
              <Attack />
              <DefenseAndProfiency></DefenseAndProfiency>
            </RowGroup>
            <Notes />
          </GlobalRow>
          <GlobalColumn>
            <Skills></Skills>
          </GlobalColumn>
          <Invetory />
        </Global>
      </ThemeProvider>
  );
}
