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
  ];

  return (
    <Content>
      <TextGroup>
        <Title fontSize={"20px"}>ATAQUES</Title>
        {Rules.map((res, index) => {
          return (
            <SkillsText key={index} left={res.left}>
              {res.title}
            </SkillsText>
          );
        })}
      </TextGroup>
      {Inputs.map((_, index) => {
        return (
          <RulesInputsGroup key={index}>
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
