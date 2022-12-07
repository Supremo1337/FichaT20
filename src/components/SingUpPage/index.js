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
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [comparativeSingUp, setComparativeSingUp] = useState("");
  const [second, setSecond] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email);
    console.log(password);
    const jsonSingUp = { email, password, confirmPassword };
    axios
      .post(
        "http://localhost:8000/api/authme/register",
        JSON.stringify(jsonSingUp),
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
        setComparativeSingUp(error);
      });
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
              value={confirmPassword}
              placeholder="********"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </InputAndText>
          <GroupCheckBoxAndButton>
            {/* <Link href="./"> */}
            <a>
              <LoginButton type={"submit"} value="CRIAR SUA CONTA" />
              <TextTitle background={"#2f1e22"}></TextTitle>
            </a>
            {/* </Link> */}
          </GroupCheckBoxAndButton>
        </FormLogin>
      </LoginBox>
      <BackgroundOverlay></BackgroundOverlay>
    </Content>
  );
}
