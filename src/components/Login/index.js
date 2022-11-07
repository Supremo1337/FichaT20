import React, { useState } from "react";
import { TextTitle } from "../../styles/global";
import { Content, FormLogin, InputAndText, InputLogin } from "./styles";

export default function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Content>
      <FormLogin onSubmit={handleSubmit}>
        <InputAndText controlId="email">
          <TextTitle>Email</TextTitle>

          <InputLogin
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputAndText>

        <InputAndText controlId="password">
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
      </FormLogin>
    </Content>
  );
}
