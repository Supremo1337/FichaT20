import {
  Content,
  SkillsTitleandValue,
  SkillsText,
  SkillsRow,
  CheckSkills,
  InputSkills,
  NameSkills,
  NameCheckGroup,
  InputSkillsGroup,
  InputSkillsTotal,
  Column,
  GroupInputAndOperator,
} from "./styles";
import { TextTitle } from "../CharacterData/styles.js";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Title } from "../../styles/global";

export default function Skills() {
  const Skills = [
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
        {Skills.map((res, index) => {
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
        {Skills.map((res, index) => {
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
        {Skills.map((res, index) => {
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
        {Skills.map((res, index) => {
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
        {Skills.map((res, index) => {
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
        {Skills.map((res, index) => {
          return (
            <GroupInputAndOperator key={index}>
              <InputSkills width={"25px"} height={"15px"}></InputSkills>
            </GroupInputAndOperator>
          );
        })}
      </Column>
      {/* <Text>Total</Text> */}
      {/* <SkillsText fontSize={"10px"} paddingTop={"7px"} marginLeft={"-22px"} width={"40px"}>1/2 do Nível</SkillsText>
        <SkillsText fontSize={"10px"} paddingTop={"7px"} marginLeft={"-22px"} width={"40px"}>Mod. de Atributo</SkillsText>
        <SkillsText fontSize={"10px"} paddingTop={"7px"} marginLeft={"-22px"} width={"30px"}>Treino</SkillsText>
        <SkillsText fontSize={"10px"} paddingTop={"7px"} marginLeft={"-22px"} width={"30px"}>Outros</SkillsText>
      </SkillsTitleandValue> */}
      {/* {Skills.map((res, index) => {
        return (
          <SkillsRow key={index}>
            <NameCheckGroup>
              <CheckSkills type="checkbox"></CheckSkills>
              <NameSkills fontSize={"12px"}>
                {res.title}
                {res.simbolo ? (
                  <OpenWithIcon sx={{ fontSize: 10 }}></OpenWithIcon>
                ) : null}
              </NameSkills>
            </NameCheckGroup>
            <InputSkillsGroup>
              <InputSkillsTotal right={"5px"}></InputSkillsTotal>
              <label style={{ position: "relative", right: "7px" }}>=</label>
              <InputSkills
                width={"25px"}
                height={"15px"}
                right={"13px"}
              ></InputSkills>
              <label style={{ position: "relative", right: "12px" }}>+</label>
              <InputSkills
                width={"25px"}
                height={"15px"}
                right={"12px"}
              ></InputSkills>
              <label style={{ position: "relative", right: "12px" }}>+</label>
              <InputSkills
                width={"25px"}
                height={"15px"}
                right={"12px"}
              ></InputSkills>
              <label style={{ position: "relative", right: "12px" }}>+</label>
              <InputSkills
                width={"25px"}
                height={"15px"}
                right={"13px"}
              ></InputSkills>
            </InputSkillsGroup>
          </SkillsRow>
        );
      })} */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Adestramento*</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Atlestismo</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Atuação</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow>
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Cavalgar</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Conhecimento</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Cura</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Diplomacia</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Enganação</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Fortitude</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>
            Furtividade<OpenWithIcon sx={{ fontSize: 10 }}></OpenWithIcon>
          </NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Guerra</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Iniciativa</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Intimidação</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Intuição</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Investigação</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Jogatina*</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>
            Ladinagem*<OpenWithIcon sx={{ fontSize: 10 }}></OpenWithIcon>
          </NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Luta</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Misticismo*</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Nobreza*</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Ofício(_____)*</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Ofício(_____)*</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Percepção</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Pilotagem*</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Pontaria</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Reflexos</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Religião*</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Sobrevivência</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space */}
      {/* <SkillsRow>
        <NameCheckGroup>
          <CheckSkills type="checkbox"></CheckSkills>
          <NameSkills fontSize={"12px"}>Vontade</NameSkills>
        </NameCheckGroup>
        <InputSkillsGroup>
          <InputSkillsTotal right={"5px"}></InputSkillsTotal>
          <label style={{ position: "relative", right: "7px" }}>=</label>
          <InputSkills right={"13px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"12px"}></InputSkills>
          <label style={{ position: "relative", right: "12px" }}>+</label>
          <InputSkills right={"13px"}></InputSkills>
        </InputSkillsGroup>
      </SkillsRow> */}
      {/* Space  */}
    </Content>
  );
}
