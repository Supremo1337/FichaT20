import {
  Content,
  Defense,
  DefenseGroup,
  DefenseSubGroup,
  InputDefense,
  ModBox,
  BoxRow,
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
          <BoxRow width={"100%"}>
            <CheckSkills type={"checkbox"}></CheckSkills>
            <SkillsText fontSize={"10px"} >
              Modificador de Des
            </SkillsText>
            <SkillsText fontSize={"10px"} >
              Bônus de Armadura
            </SkillsText>
            <SkillsText fontSize={"10px"} >
              Bônus de Escudo
            </SkillsText>
            <SkillsText fontSize={"10px"} >
              Outros
            </SkillsText>
          </BoxRow>
          <BoxRow width={"92%"}>
            <InputSkills width={"100px"} height={"15px"}></InputSkills>
            <InputSkills width={"90px"} height={"15px"}></InputSkills>
            <InputSkills width={"80px"} height={"15px"}></InputSkills>
            <InputSkills width={"30px"} height={"15px"}></InputSkills>

          </BoxRow>
        </ModBox>
      </DefenseGroup>
    </Content>
  );
}
