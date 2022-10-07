import { Title } from "../../styles/global";
import {
  Content,
  Displacement,
  InputProfieciency,
  NumbersOptions,
  Options,
  Proficiency,
  Size,
} from "./styles";

export default function Others() {
  return (
    <Content>
      <Proficiency>
        <Title>Proficiency</Title>
        <InputProfieciency></InputProfieciency>
      </Proficiency>
      <Size>
        <Title>TAMANHO</Title>
        <Options>
          <option value="volvo">Mínusculo</option>
          <option value="saab">Pequeno</option>
          <option value="mercedes">Médio</option>
          <option value="audi">Grande</option>
          <option value="audi">Enorme</option>
          <option value="audi">Colossal</option>
        </Options>
        <NumbersOptions width={"15%"} placeholder="0/0"></NumbersOptions>
      </Size>
      <Displacement>
        <Title>Deslocamento</Title>
        <NumbersOptions width={"75%"}></NumbersOptions>
      </Displacement>
    </Content>
  );
}
