import { Content, TextArea } from "./styles";
import { AttributeTitle } from "../Attribute/styles";

export default function Notes() {
  return (
    <Content>
      <AttributeTitle fontSize={"20px"}>DESCRIÇÃO</AttributeTitle>
      <TextArea rows="10" cols="80"></TextArea>
      <AttributeTitle fontSize={"20px"}>HABILIDADES DE RAÇA E ORIGEM</AttributeTitle>
      <TextArea rows="10" cols="80"></TextArea>
      <AttributeTitle fontSize={"20px"}>HABILIDADES DE CLASSE E PODERES</AttributeTitle>
      <TextArea rows="10" cols="80"></TextArea>
    </Content>
  );
}
