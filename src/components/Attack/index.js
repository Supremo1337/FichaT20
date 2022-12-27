import {
  Content,
  RulesInputs,
  RulesInputsGroup,
  PlaceTextAndInputsInColumn,
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
    { title: "Teste de Ataque", width: "18%", maxWidth: "" },
    { title: "Dano", width: "11%", maxWidth: "" },
    { title: "Crítico", width: "13%", maxWidth: "" },
    { title: "Tipo", width: "14%", maxWidth: "" },
    { title: "Alcance", width: "15%", maxWidth: "" },
  ];

  return (
    <Content>
      <PlaceTextAndInputsInColumn width="25%" maxWidth="">
        <Title fontSize={"1.6rem"}>ATAQUES</Title>
        {inputs.map((_, index) => {
          return <RulesInputs key={index} width="100%" />;
        })}
      </PlaceTextAndInputsInColumn>

      {teste.map((res, index) => {
        return (
          <PlaceTextAndInputsInColumn key={index} width={res.width}>
            <SkillsText key={index} left={res.left} fontSize="1.2rem">
              {res.title}
            </SkillsText>
            {inputs.map((_, index) => {
              return <RulesInputs key={index} width="100%" />;
            })}
          </PlaceTextAndInputsInColumn>
        );
      })}
    </Content>
  );
}
