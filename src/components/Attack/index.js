import { Content, RulesInputs, RulesInputsGroup, TextGroup } from "./styles";
import { SkillsText } from "../Skills/styles";
import { Title } from "../../styles/global";

export default function Attack() {
  const Rules = [
    { title: "Teste de Ataque", left: "0px" },
    { title: "Dano", left: "0px" },
    { title: "Crítico", left: "0px" },
    { title: "Tipo", left: "0px" },
    { title: "Alcance", left: "-0px" },
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
            <SkillsText key={index} left={res.left} fontSize="0.8rem">
              {res.title}
            </SkillsText>
          );
        })}
      </TextGroup>
      {Inputs.map((_, index) => {
        return (
          <RulesInputsGroup key={index}>
            {/* <SkillsText fontSize="0.8rem">Teste de Ataque</SkillsText> */}
            <RulesInputs width="25%" />
            {/* <RulesInputs width="10%" /> */}
            {/* <RulesInputs width="10%" /> */}
            {/* <RulesInputs width="10%" /> */}
            {/* <RulesInputs width="10%" /> */}
            {/* <RulesInputs width="10%" /> */}
          </RulesInputsGroup>
        );
      })}
    </Content>
  );
}
