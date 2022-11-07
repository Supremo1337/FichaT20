import CharacterDataCopy from "../components/CharacterDataCopy";
import Attribute from "../components/Attribute";
import LifeAndManeCopy from "../components/LifeAndManeCopy";
import Skills from "../components/Skills";
import Attack from "../components/Attack";
import DefenseAndProfiency from "../components/DefenseAndProficiency";
import Notes from "../components/Notes";
import Invetory from "../components/Inventory";
import styled from "styled-components";
import React, { useContext } from "react";
import Switch from "react-switch";
import { shade } from "polished";
import Magics from "../components/Magics";
import { TormentaLogo } from "../../public/img/TormentaLogo";
import { DarkLightContext } from "../components/Context/DarkLightProvider";
import Link from "next/link";
import SubmitBar from "../components/SubmitBar";

const Global = styled.div`
  width: 100%;
  height: auto;
  border: 0;
  display: grid;
  grid-template-columns: 32vw 14vw 9vw 17vw 23vw;
  grid-template-rows: 21vh 38vh 42vh 53vh 60vh 5vh;
  gap: 10px;
  grid-template: repeat(5, auto) / 32vw 14vw 9vw 17vw 23vw; ;
`;

const TopBar = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const LogOut = styled.button`
  width: 10%;
  border: none;
  border-radius: 10px;
  color: #ff0000;
`;

export default function LoginPages() {
  const { toggleTheme, isLightTheme } = useContext(DarkLightContext);
  return (
    <>
      <TopBar>
        <Switch
          onChange={() => toggleTheme()}
          checked={!isLightTheme}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          onHandleColor="#67070e"
          offHandleColor={shade(0.2, "#67070e")}
          onColor="#888888"
        />
        <TormentaLogo width={"200px"} />
        <LogOut>Encerrar Sessão</LogOut>
      </TopBar>
      <Global>
        <CharacterDataCopy isLightTheme={!isLightTheme} />
        <LifeAndManeCopy />
        <Attribute />
        <Skills />
        <Attack />
        <DefenseAndProfiency />
        <Notes />
        {/* <Invetory /> */}
        <Magics />
        {/* <SubmitBar /> */}
        <Link href={"/loginscreen"}>
          <ul>
            <li>
              <a>TeladeLOGIn</a>
            </li>
          </ul>
        </Link>
      </Global>
    </>
  );
}
