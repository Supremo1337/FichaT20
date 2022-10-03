import {
  Content,
  Defense,
  DefenseGroup,
  DefenseSubGroup,
  InputDefense,
  ModBox,
  BoxRow,
  TextAndInputs,
} from "./styles";
import { AttributeTitle } from "../Attribute/styles";
import { CheckSkills, InputSkills, SkillsText } from "../Skills/styles";

export default function DefenseMultipliers() {
  return (
    <Content>
      <DefenseGroup>
        <DefenseSubGroup>
          <Defense>
            <AttributeTitle>Defesa</AttributeTitle>
            <InputDefense
              type={"number"}
              disabled
              top={"10px"}
              border={"none"}
              placeholder={"10"}
            ></InputDefense>
          </Defense>
          <InputDefense
            borderRadius={"50%"}
            disabled
            left={"-10px"}
            placeholder={"=10"}
          ></InputDefense>
        </DefenseSubGroup>
        <ModBox>
          <BoxRow>
            <CheckSkills type={"checkbox"}></CheckSkills>
            <TextAndInputs>
              <SkillsText fontSize={"10px"}>Modificador de Des</SkillsText>
              <InputSkills width={"50%"} height={"15px"}></InputSkills>
            </TextAndInputs>
            <TextAndInputs>
              <SkillsText fontSize={"10px"}>Bônus de Armadura</SkillsText>
              <InputSkills width={"50%"} height={"15px"}></InputSkills>
            </TextAndInputs>
            <TextAndInputs>
              <SkillsText fontSize={"10px"}>Bônus de Escudo</SkillsText>
              <InputSkills width={"50%"} height={"15px"}></InputSkills>
            </TextAndInputs>
            <TextAndInputs>
              <SkillsText fontSize={"10px"}>Outros</SkillsText>
              <InputSkills width={"50%"} height={"15px"}></InputSkills>
            </TextAndInputs>
          </BoxRow>
        </ModBox>
      </DefenseGroup>
    </Content>
  );
}
