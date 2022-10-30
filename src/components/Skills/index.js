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

export default function Skills() {
  const skillsAttributes = [
    { title: "Acrobacia", simbolo: "+" },
    { title: "Adestramento", simbolo: "*" },
    { title: "Atletismo" },
    { title: "Atuação" },
    { title: "Cavalgar" },
    { title: "Conhecimento", simbolo: "*" },
    { title: "Cura" },
    { title: "Diplomacia" },
    { title: "Enganação" },
    { title: "Fortitude" },
    { title: "Furtividade", simbolo: "+" },
    { title: "Guerra", simbolo: "*" },
    { title: "Iniciativa" },
    { title: "Intimidação" },
    { title: "Intuição" },
    { title: "Investigação" },
    { title: "Jogatina", simbolo: "*" },
    { title: "Ladinagem", simbolo: "*", simbolo2: "+" },
    { title: "Luta" },
    { title: "Misticismo", simbolo: "*" },
    { title: "Nobreza", simbolo: "*" },
    { title: "Ofício", simbolo: "*" },
    { title: "Ofício", simbolo: "*" },
    { title: "Percepção" },
    { title: "Pilotagem", simbolo: "*" },
    { title: "Pontaria" },
    { title: "Reflexos" },
    { title: "Religião", simbolo: "*" },
    { title: "Sobrevivência" },
    { title: "Vontade" },
  ];

  return (
    <Content>
      {/* <SkillsTitleandValue> */}
      <Column height={"935px"} gridColumn={"1/2"}>
        <Title>PERÍCIAS</Title>
        {skillsAttributes.map((res, index) => {
          return (
            <NameSkills key={index}>
              {res.title}
              {res.simbolo == "+" ? (
                <OpenWithIcon sx={{ fontSize: 10 }}></OpenWithIcon>
              ) : res.simbolo == "*" ? (
                <AcUnitIcon sx={{ fontSize: 10 }}></AcUnitIcon>
              ) : null}

              {res.simbolo2 == "+" ? (
                <OpenWithIcon sx={{ fontSize: 10 }}></OpenWithIcon>
              ) : null}
            </NameSkills>
          );
        })}
      </Column>
      <Column gap={"10px"} height={"935px"} gridColumn={"2/3"}>
        <TextTitle fontSize={"12px"}>Total</TextTitle>
        {skillsAttributes.map((res, index) => {
          return (
            <GroupInputAndOperator key={index}>
              <InputSkillsTotal right={"5px"}></InputSkillsTotal>
              <label>=</label>
            </GroupInputAndOperator>
          );
        })}
      </Column>
      <Column gap={"10px"} height={"935px"} gridColumn={"3/4"}>
        <SkillsText fontSize={"10px"}>1/2 do Nível</SkillsText>
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
        <SkillsText fontSize={"10px"}>Mod. de Atributo</SkillsText>
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
        <SkillsText fontSize={"10px"}>Treino</SkillsText>
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
        <SkillsText fontSize={"10px"}>Outros</SkillsText>
        {skillsAttributes.map((res, index) => {
          return (
            <GroupInputAndOperator key={index}>
              <InputSkills width={"25px"} height={"15px"}></InputSkills>
            </GroupInputAndOperator>
          );
        })}
      </Column>
    </Content>
  );
}
