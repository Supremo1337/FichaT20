import { Content, SkillsTitleandValue, SkillsText, SkillsRow } from "./styles";
import { AttributeTitle } from "../Attribute/styles";
import { TextDiv } from "../Characterdata/styles";

export default function Skills() {
  return (
    <Content>
      <SkillsTitleandValue>
        <AttributeTitle>PERÍCIAS</AttributeTitle>
        <TextDiv>Total</TextDiv>
        <SkillsText fontSize={"10px"}>1/2 do Nível</SkillsText>
        <SkillsText fontSize={"10px"}>Mod. de Atributo</SkillsText>
        <SkillsText fontSize={"10px"}>Treino</SkillsText>
        <SkillsText fontSize={"10px"}>Outros</SkillsText>
      </SkillsTitleandValue>
      <SkillsRow>
        <SkillsText fontSize={"14px"}>Acrobacia</SkillsText>
      </SkillsRow>
    </Content>
  );
}
