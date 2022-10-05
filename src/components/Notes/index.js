import { Content, TextArea } from "./styles";
import { Title } from "../../styles/global";

export default function Notes() {
  return (
    <Content>
      <Title fontSize={"20px"}>DESCRIÇÃO</Title>
      {/* <TextArea rows="10" cols="40"></TextArea> */}
      <Title fontSize={"20px"}>HABILIDADES DE RAÇA E ORIGEM</Title>
      {/* <TextArea rows="10" cols="40"></TextArea> */}
      <Title fontSize={"20px"}>HABILIDADES DE CLASSE E PODERES</Title>
      {/* <TextArea rows="10" cols="40"></TextArea> */}
    </Content>
  );
}
