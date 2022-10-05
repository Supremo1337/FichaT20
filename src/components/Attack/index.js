import { Content, RulesInputs, RulesInputsGroup, TextGroup } from "./styles";
import { SkillsText } from "../Skills/styles";
import { Title } from "../../styles/global";

export default function Attack() {
  const Rules = [
    { title: "Teste de Ataque" },
    { title: "Dano", left1: "-50px" },
    { title: "Crítico", left1: "-50px" },
    { title: "Tipo", left1: "-50px" },
    { title: "Alcance", left1: "-50px" },
  ];

  const Inputs = [{ title: "" }, { title: "" }, { title: "" }, { title: "" }, { title: "" }, { title: "" }, { title: "" }];

  return (
    <Content>
      <TextGroup>
        <Title fontSize={"20px"}>ATAQUES</Title>
        {Rules.map((res) => {
          return <SkillsText left={res.left1}>{res.title}</SkillsText>;
        })}
      </TextGroup>
      {Inputs.map(() => {
        return (
          <RulesInputsGroup>
            <RulesInputs></RulesInputs>
            <RulesInputs></RulesInputs>
            <RulesInputs></RulesInputs>
            <RulesInputs></RulesInputs>
            <RulesInputs></RulesInputs>
            <RulesInputs></RulesInputs>
          </RulesInputsGroup>
        );
      })}
    </Content>
  );
}
