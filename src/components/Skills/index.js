import {
  Content,
  SkillsText,
  InputSkills,
  NameSkills,
  InputSkillsTotal,
  Column,
  GroupInputAndOperator,
} from "./styles";
import { TextTitle } from "../../styles/global";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Title } from "../../styles/global";
import { skillsAttributes } from "./skillsAttributes";
import SubmitBar from "../SubmitBar";

export default function Skills() {
  return (
    <Content>
      {/* <SkillsTitleandValue> */}
      <Column height={"935px"} gridColumn={"1/2"}>
        <Title fontSize={"12px"}>PERÍCIAS</Title>
        {skillsAttributes.map((res, index) => {
          return (
            <NameSkills key={index}>
              {res.title}
              {res.simbolo == "+" ? (
                <OpenWithIcon sx={{ fontSize: 10 }} />
              ) : res.simbolo == "*" ? (
                <AcUnitIcon sx={{ fontSize: 10 }} />
              ) : null}

              {res.simbolo2 == "+" ? (
                <OpenWithIcon sx={{ fontSize: 10 }} />
              ) : null}
            </NameSkills>
          );
        })}
      </Column>
      <Column gap={"10px"} height={"935px"} gridColumn={"2/3"}>
        <TextTitle fontSize={"10px"}>Total</TextTitle>
        {skillsAttributes.map((res, index) => {
          return (
            <GroupInputAndOperator key={index}>
              <InputSkillsTotal right={"5px"} />
              <label>=</label>
            </GroupInputAndOperator>
          );
        })}
      </Column>
      <Column gap={"10px"} height={"935px"} gridColumn={"3/4"}>
        <SkillsText fontSize={"8px"}>1/2 do Nível</SkillsText>
        {skillsAttributes.map((res, index) => {
          return (
            <GroupInputAndOperator key={index}>
              <InputSkills width={"25px"} height={"15px"}></InputSkills>
              <label>+</label>
            </GroupInputAndOperator>
          );
        })}
      </Column>
      <Column gap={"10px"} height={"935px"} gridColumn={"4/5"}>
        <SkillsText fontSize={"8px"}>Mod. de Atributo</SkillsText>
        {skillsAttributes.map((res, index) => {
          return (
            <GroupInputAndOperator key={index}>
              <InputSkills width={"25px"} height={"15px"}></InputSkills>
              <label>+</label>
            </GroupInputAndOperator>
          );
        })}
      </Column>
      <Column gap={"10px"} height={"935px"} gridColumn={"5/6"}>
        <SkillsText fontSize={"8px"}>Treino</SkillsText>
        {skillsAttributes.map((res, index) => {
          return (
            <GroupInputAndOperator key={index}>
              <InputSkills width={"25px"} height={"15px"}></InputSkills>
              <label>+</label>
            </GroupInputAndOperator>
          );
        })}
      </Column>
      <Column gap={"10px"} height={"935px"} gridColumn={"6/7"}>
        <SkillsText fontSize={"8px"}>Outros</SkillsText>
        {skillsAttributes.map((res, index) => {
          return (
            <GroupInputAndOperator key={index}>
              <InputSkills width={"25px"} height={"15px"}></InputSkills>
            </GroupInputAndOperator>
          );
        })}
      </Column>
      <SubmitBar gridColumn="1/7" gridRow="2/3" />
    </Content>
  );
}
