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
import { shade } from "polished";
import Magics2 from "../components/Magics2";


const Global = styled.div`
  width: 100%;
  height: auto;
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

const TopBar = styled.div`
  height: 50px;
  background: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Logo = styled.div`
  width: 10%;
  height: 50px;
  background: red;
`;

const LogOut = styled.button`
  width: 10%;
  border: none;
  border-radius: 10px;
  color: #ff0000;
`;

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
      <TopBar>
        <GlobalStyles />
        <Switch
          onChange={toggleTheme}
          checked={theme === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          onHandleColor="#67070e"
          offHandleColor={shade(0.2, "#67070e")}
          onColor="#888888"
        />
        <Logo></Logo>
        <LogOut>Encerrar Sessão</LogOut>
      </TopBar>
      <Global>
        <GlobalRow>
          <RowGroup>
            <CharacterData />
            <Lifeandmane />
            <Attribute />
          </RowGroup>
          <RowGroup>
            <Attack />
            <DefenseAndProfiency />
          </RowGroup>
          <Notes />
        </GlobalRow>
        <GlobalColumn>
          <Skills></Skills>
        </GlobalColumn>
        <Invetory />
        <Magics2 />
      </Global>
    </ThemeProvider>
  );
}
