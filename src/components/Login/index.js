import React, { useState } from "react";
import { TextTitle } from "../../styles/global";
import {
  BackgroundOverlay,
  Content,
  FormLogin,
  GroupCheckBoxAndButton,
  Header,
  InputAndText,
  InputLogin,
  LoginBox,
} from "./styles";
import Vector from "../../../public/img/Vector";
import { TormentaLogoLogin } from "../../../public/img/TormentaLogoLogin";
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Text,
} from "./CheckBoxLogin";
import CheckIcon from "../../../public/icon/icons8-done.svg";

export default function Login() {
  const [checked, setChecked] = useState(false);
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleCheckboxChange() {
    setChecked(!checked);
  }

  return (
    <Content>
      {/* <Vector style={{ width: "99vw", position: "absolute", bottom: "0px" }} /> */}
      {/* <BackgroundOverlay> */}
      <LoginBox>
        <Header>
          <TormentaLogoLogin />
          <TextTitle fontSize={"20px"}>
            Faça login e aproveite sua aventura
          </TextTitle>
        </Header>
        <FormLogin onSubmit={handleSubmit}>
          <InputAndText controlId="email">
            <TextTitle fontSize={"20px"}>Endereço de e-mail</TextTitle>
            <InputLogin
              autoFocus
              type="email"
              value={email}
              placeholder="johndoe@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputAndText>
          <InputAndText controlId="password">
            <TextTitle fontSize={"20px"}>Insira sua Senha</TextTitle>
            <InputLogin
              type="password"
              value={password}
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputAndText>
          <GroupCheckBoxAndButton>
            <CheckboxContainer checked={checked} onClick={handleCheckboxChange}>
              <HiddenCheckbox
                onChange={handleCheckboxChange}
                checked={checked}
              />
              <StyledCheckbox checked={checked}>
                <img
                  alt="tick icon"
                  style={{ width: "15px" }}
                  src={require("../../../public/icon/icons8-done.svg")}
                />
              </StyledCheckbox>
              <Text checked={checked}>Instagram</Text>
            </CheckboxContainer>

            {/* <CheckBoxLogin type={"checkbox"} /> */}
          </GroupCheckBoxAndButton>
        </FormLogin>
      </LoginBox>
      {/* </BackgroundOverlay> */}
    </Content>
  );
}
{
  /* 
        <InputAndText controlId="email">
        <TextTitle>Email</TextTitle>
        
        
        </InputAndText>
        
        
          <TextTitle>Senha</TextTitle>
          
          <InputLogin
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          </InputAndText>
          
          <button block type="submit" disabled={!validateForm()}>
          Login
          </button>
        </FormLogin> */
}
