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
        <Title>Proficiências</Title>
        <InputProfieciency height={"100%"} border={"none"}></InputProfieciency>
      </Proficiency>
      <Size>
        <Title>TAMANHO</Title>
        <Options>
          <option value="Mínusculo">Mínusculo</option>
          <option value="Pequeno">Pequeno</option>
          <option value="Médio">Médio</option>
          <option value="Grande">Grande</option>
          <option value="Enorme">Enorme</option>
          <option value="Colossal">Colossal</option>
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
