import React, { useState } from "react";
import { TextTitle } from "../../styles/global";
import {
  BackgroundOverlay,
  Content,
  ForgetAndLogin,
  FormLogin,
  GroupCheckBoxAndButton,
  Header,
  InputAndText,
  InputLogin,
  LoginBox,
  LoginButton,
  TextForgetAndLogin,
} from "./styles";
import { TormentaLogoLogin } from "../../../public/img/TormentaLogoLogin";
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
} from "./CheckBoxLogin";
import { Envelope, Lock } from "phosphor-react";
import Link from "next/link";

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
      <LoginBox>
        <Header>
          <TormentaLogoLogin />
          <TextTitle fontSize={"20px"}>
            Crie sua conta e aproveite sua aventura
          </TextTitle>
        </Header>
        <FormLogin onSubmit={handleSubmit}>
          <InputAndText controlId="email">
            <TextTitle fontSize={"16px"} color={"#000"}>
              Endereço de e-mail
            </TextTitle>
            <Envelope
              size={24}
              color="#7C7C8A"
              style={{ position: "relative", top: "29px", left: "10px" }}
            />
            <InputLogin
              autoFocus
              type="email"
              value={email}
              placeholder="johndoe@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputAndText>
          <InputAndText controlId="password">
            <TextTitle fontSize={"16px"} color={"#000"}>
              Insira sua Senha
            </TextTitle>
            <Lock
              size={24}
              color="#7C7C8A"
              style={{ position: "relative", top: "29px", left: "10px" }}
            />
            <InputLogin
              type="password"
              value={password}
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputAndText>
          <InputAndText controlId="password">
            <TextTitle fontSize={"16px"} color={"#000"}>
              Confirmar sua senha
            </TextTitle>
            <Lock
              size={24}
              color="#7C7C8A"
              style={{ position: "relative", top: "29px", left: "10px" }}
            />
            <InputLogin
              type="password"
              value={password}
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputAndText>
          <GroupCheckBoxAndButton>
            <Link href="./">
              <a>
                <LoginButton>
                  <TextTitle
                    fontSize={"16px"}
                    color={"#F0CBAD"}
                    background={"#2f1e22"}
                  >
                    CRIAR SUA CONTA
                  </TextTitle>
                </LoginButton>
              </a>
            </Link>
          </GroupCheckBoxAndButton>
        </FormLogin>
      </LoginBox>
      <BackgroundOverlay></BackgroundOverlay>
    </Content>
  );
}
