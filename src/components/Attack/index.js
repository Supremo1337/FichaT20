import { Content, RulesInputs, RulesInputsGroup, TextGroup } from "./styles";
import { SkillsText } from "../Skills/styles";
import { AttributeTitle } from "../Attribute/styles";

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
        <AttributeTitle fontSize={"20px"}>ATAQUES</AttributeTitle>
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
