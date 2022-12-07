import {
  Content,
  RulesInputs,
  RulesInputsGroup,
  TESTE,
  TextGroup,
} from "./styles";
import { SkillsText } from "../Skills/styles";
import { Title } from "../../styles/global";

export default function Attack() {
  const inputs = [
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
  ];

  const teste = [
    { title: "Teste de Ataque", width: "55px" },
    { title: "Dano", width: "40px" },
    { title: "Crítico", width: "40px" },
    { title: "Tipo", width: "45px" },
    { title: "Alcance", width: "50px" },
  ];

  return (
    <Content>
      <TESTE width="80px">
        <Title fontSize={"1.6rem"}>ATAQUES</Title>
        {inputs.map((_, index) => {
          return <RulesInputs width="100%" />;
        })}
      </TESTE>

      {teste.map((res, index) => {
        return (
          <TESTE key={index} width={res.width}>
            <SkillsText key={index} left={res.left} fontSize="1.2rem">
              {res.title}
            </SkillsText>
            {inputs.map((_, index) => {
              return <RulesInputs width="100%" />;
            })}
          </TESTE>
        );
      })}
    </Content>
  );
}
