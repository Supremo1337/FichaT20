import { Content, TextArea } from "./styles";
import { Title } from "../../styles/global";
import * as React from "react";
import Box from "@mui/material/Box";

export default function Notes() {
  return (
    <Content>
      <Box sx={{ width: "100%" }}>
        <Title fontSize={"20px"}>DESCRIÇÃO</Title>
        <TextArea rows="4" cols="20" />
        <Title fontSize={"20px"}>HABILIDADES DE RAÇA E ORIGEM</Title>
        <TextArea rows="4" cols="20" />
        <Title fontSize={"20px"}>HABILIDADES DE CLASSE E PODERES</Title>
        <TextArea rows="4" cols="20" />
        <Title fontSize={"20px"}>Anotações</Title>
        <TextArea rows="4" cols="20" />
      </Box>
    </Content>
  );
}
