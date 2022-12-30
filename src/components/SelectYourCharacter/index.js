import {
  Content,
  CreateNewCharacter,
  NameCharacterCLickToAcess,
  SelectCharacterBox,
} from "./styles";
import { LogOut, TopBar, Wrapper } from "../../pages/ficha";
import Switch from "react-switch";
import { useContext } from "react";
import { DarkLightContext } from "../Context/DarkLightProvider";
import { shade } from "polished";
import { TormentaLogo } from "../../../public/img/TormentaLogo";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { TextTitle } from "../../styles/global";
import Button from "@mui/material/Button";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

export default function SelectYourCharacter() {
  const { toggleTheme, isLightTheme } = useContext(DarkLightContext);
  const [nameCharacter, setNameCharacter] = useState();

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
    <Wrapper>
      <Content>
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
          <a>
            {/* <LogOut onClick={logOut}>Encerrar Sessão</LogOut> */}
          </a>
          {/* </Link> */}
        </TopBar>
        <SelectCharacterBox >
          <TextTitle fontSize="20px">Personagem:</TextTitle>
          <NameCharacterCLickToAcess>
            Nome do Personagem
          </NameCharacterCLickToAcess>
        </SelectCharacterBox>
        <CreateNewCharacter>
        <Button
          style={{
            color: "black",
            border: "1px solid",
            height: "30px",
            minWidth: "42px",
          }}
        >
          <AddBoxOutlinedIcon />
        </Button>
        </CreateNewCharacter>
      </Content>
    </Wrapper>    
  );
}
