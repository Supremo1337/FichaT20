import {
  Content,
  GroupDates,
  Group,
  BoxPerso,
  TextDiv,
  NamePerso,
  Logo,
  Attribute,
  BoxRow,
  Box,
  AttributeTitle,
  AttributeInput,
  ModNumber,
  StatusLM,
  StatusGroup,
  ButtonsAndInputs,
  Buttons,
  LMInput,
  PointsLM,
  ProgressBar,
  GroupStates,
} from "./styles";
import { useState } from "react";

export default function Characterdata() {
  const inputs = [
    { title: "Personagem", placeholder: "Nome Do Personagem" },
    { title: "Jogador", placeholder: "Nome Do Jogador" },
    { title: "Raça", placeholder: "Raça" },
  ];
  const inputs2 = [
    { title: "Origem", placeholder: "Origem" },
    { title: "Classe & Nível", placeholder: "Classe e nível" },
    { title: "Divindade", placeholder: "Divindade" },
  ];

  const Boxinputs = [
    { title: "FOR", number: "0" },
    { title: "DES", number: "0" },
    { title: "CON", number: "0" },
  ];
  const Boxinputs2 = [
    { title: "INT", number: "0" },
    { title: "SAB", number: "0" },
    { title: "CAR", number: "0" },
  ];

  const Statusmap = [{ title: "Vida" }, { title: "Mana" }];

  const [maxNum1, setMaxNum1] = useState("");

  const Max = (event) => {
    const limit = 3;
    setMaxNum1(event.target.value.slice(0, limit));
  };

  const [Actualnum, setActualNum] = useState("");

  const Actual = (event) => {
    const limit = 3;
    setActualNum(event.target.value.slice(0, limit));
  };

  return (
    <Content>
      <GroupDates>
        <Group>
          {inputs.map((res) => {
            return (
              <BoxPerso>
                <TextDiv width={"102px"}>{res.title}</TextDiv>
                <NamePerso placeholder={res.placeholder}></NamePerso>
              </BoxPerso>
            );
          })}
        </Group>
        <Group>
          {inputs2.map((res) => {
            return (
              <BoxPerso>
                <TextDiv width={"102px"}>{res.title}</TextDiv>
                <NamePerso placeholder={res.placeholder}></NamePerso>
              </BoxPerso>
            );
          })}
        </Group>
      </GroupDates>
      <Attribute>
        <BoxRow>
          {Boxinputs.map((res) => {
            return (
              <Box>
                <AttributeTitle>{res.title}</AttributeTitle>
                <ModNumber>{res.number}</ModNumber>
                <AttributeInput placeholder="10" type="number"></AttributeInput>
              </Box>
            );
          })}
        </BoxRow>
        <BoxRow>
          {Boxinputs2.map((res) => {
            return (
              <Box>
                <AttributeTitle>{res.title}</AttributeTitle>
                <ModNumber>{res.number}</ModNumber>
                <AttributeInput placeholder="10" type="number"></AttributeInput>
              </Box>
            );
          })}
        </BoxRow>
      </Attribute>
      <StatusLM>
        {Statusmap.map((res) => {
          return (
            <StatusGroup>
              <TextDiv color={"#ff0000"}>{res.title}</TextDiv>
              <GroupStates>
                <ButtonsAndInputs>
                  <Buttons></Buttons>
                  <Buttons></Buttons>
                  <LMInput type="number"></LMInput>/
                  <PointsLM type="number"></PointsLM>
                  <Buttons></Buttons>
                  <Buttons></Buttons>
                </ButtonsAndInputs>
                <ProgressBar></ProgressBar>
              </GroupStates>
            </StatusGroup>
          );
        })}
      </StatusLM>
    </Content>
  );
}
