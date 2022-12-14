import { useState } from "react";
import { Title, Option } from "../../styles/global";
import {
  Content,
  Proficiency,
  TextAreaProfieciency,
  Size,
  Select,
  Numbers,
  Displacement,
  Move,
} from "./styles";

export default function Others() {
  const [size, setSize] = useState("Médio");

  let sizeNumber;
  switch (size) {
    case "Mínusculo":
      sizeNumber = "5/-5";
      break;
    case "Pequeno":
      sizeNumber = "2/-2";
      break;
    case "Médio":
      sizeNumber = "0/0";
      break;
    case "Grande":
      sizeNumber = "-2/2";
      break;
    case "Enorme":
      sizeNumber = "-5/5";
      break;
    case "Colossal":
      sizeNumber = "-10/10";
      break;
  }

  return (
    <Content>
      <Proficiency>
        <Title fontSize="1.6rem">Proficiências</Title>
        <TextAreaProfieciency
          height={"100%"}
          border={"none"}
          background={"none"}
        />
      </Proficiency>
      <Size>
        <Title fontSize="1.6rem">TAMANHO</Title>
        <Select
          onChange={(e) => {
            setSize(e.target.value);
          }}
          value={size}
        >
          <Option value="Mínusculo">Mínusculo</Option>
          <Option value="Pequeno">Pequeno</Option>
          <Option value="Médio">Médio</Option>
          <Option value="Grande">Grande</Option>
          <Option value="Enorme">Enorme</Option>
          <Option value="Colossal">Colossal</Option>
        </Select>
        <Numbers width={"20%"}>{sizeNumber}</Numbers>
      </Size>
      <Displacement>
        <Title fontSize="1.6rem">Deslocamento</Title>
        <Move width={"75%"} />
      </Displacement>
    </Content>
  );
}
