import { Content, RulesInputs, RulesInputsGroup, TextGroup } from "./styles";
import { SkillsText } from "../Skills/styles";
import { Title } from "../../styles/global";

export default function Attack() {
  const Rules = [
    { title: "Teste de Ataque" },
    { title: "Dano", left: "-50px" },
    { title: "Crítico", left: "-50px" },
    { title: "Tipo", left: "-50px" },
    { title: "Alcance", left: "-50px" },
  ];

  const Inputs = [
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
  ];

  return (
    <Content>
      <TextGroup>
        <Title fontSize={"20px"}>ATAQUES</Title>
        {Rules.map((res) => {
          return <SkillsText left={res.left}>{res.title}</SkillsText>;
        })}
      </TextGroup>
      <RulesInputsGroup>
        {Inputs.map(() => {
          return <RulesInputs></RulesInputs>;
        })}
      </RulesInputsGroup>
    </Content>
  );
}
