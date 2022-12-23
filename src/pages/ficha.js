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
import { useRouter } from "next/router";
import { useEffect } from "react";

export const Wrapper = styled.div`
  margin: 10px;
`;

const Global = styled.div`
  width: 100%;
  height: auto;
  border: 0;
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 32vw 14vw 9vw 17vw 23vw;
    grid-template-rows: 21vh 38vh 42vh 53vh 60vh 5vh;
    grid-template: repeat(5, auto) / 32vw 14vw 9vw 17vw 23vw;
    gap: 10px;
  }
  /* @media (max-width: 890px) {
    grid-template-columns: 50vw 50vw;
    grid-template-rows: 21vh 38vh 42vh 53vh 60vh 5vh;
  } */
`;

export const TopBar = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const LogOut = styled.button`
  width: 10%;
  border: none;
  border-radius: 10px;
  color: #ff0000;
  cursor: pointer;
`;

export default function Ficha() {
  const { toggleTheme, isLightTheme } = useContext(DarkLightContext);

  // const router = useRouter();
  // const logOut = () => {
  //   setToken(null);
  //   router.push("/");
  // };

  // useEffect(() => {
  //   if (!token) {
  //     router.push("/");
  //   }
  // }, [token]);

  return (
    <>
      <Wrapper>
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
          {/* <Link href="./"> */}
          <a>{/* <LogOut onClick={logOut}>Encerrar Sessão</LogOut> */}</a>
          {/* </Link> */}
        </TopBar>
        <Global>
          <CharacterDataCopy isLightTheme={!isLightTheme} />
          {/* <LifeAndManeCopy /> */}
          {/* <Attribute /> */}
          {/* <Skills /> */}
          {/* <Attack /> */}
          {/* <DefenseAndProfiency /> */}
          {/* <Notes /> */}
          {/* <Invetory /> */}
          {/* <Magics /> */}
        </Global>
      </Wrapper>
    </>
  );
}
