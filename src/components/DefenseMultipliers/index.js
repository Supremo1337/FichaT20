import {
  Content,
  DefenseGroup,
  PartsRow,
  Defense,
  DefenseCard,
  InputDefense,
  ModBox,
  BoxRow,
  GropuArmorAndPenalty,
  PenaltyAndArmorText,
  Stats,
  PenaltyAndArmor,
  ModBoxGroup,
  EXP,
  EXPInput,
} from "./styles";
import { CheckSkills, InputSkills, SkillsText } from "../Skills/styles";
import { Title } from "../../styles/global";

export default function DefenseMultipliers() {
  const inputs = [
    { width: "100px" },
    { width: "90px" },
    { width: "80px" },
    { width: "30px" },
  ];

  const inputs2 = [
    { width: "70%" },
    { width: "100%" },
    { width: "70%" },
    { width: "100%" },
  ];
  return (
    <Content>
      <DefenseGroup>
        <PartsRow>
          <Defense>
            <DefenseCard>
              <Title>Defesa</Title>
              <InputDefense
                type={"number"}
                disabled
                top={"10px"}
                border={"none"}
                placeholder={"10"}
              ></InputDefense>
            </DefenseCard>
            <InputDefense
              borderRadius={"50%"}
              disabled
              left={"-10px"}
              placeholder={"=10"}
            ></InputDefense>
          </Defense>
          <ModBox>
            <ModBoxGroup>
              <BoxRow width={"100%"}>
                <CheckSkills type={"checkbox"}></CheckSkills>
                <SkillsText fontSize={"10px"}>Modificador de Des</SkillsText>
                <SkillsText fontSize={"10px"}>Bônus de Armadura</SkillsText>
                <SkillsText fontSize={"10px"}>Bônus de Escudo</SkillsText>
                <SkillsText fontSize={"10px"}>Outros</SkillsText>
              </BoxRow>
              <BoxRow width={"92%"}>
                {inputs.map((res) => {
                  return (
                    <InputSkills
                      width={res.width}
                      height={"15px"}
                      placeholder={"0"}
                    ></InputSkills>
                  );
                })}
                {/* <InputSkills
                  width={"90px"}
                  height={"15px"}
                  placeholder={"0"}
                ></InputSkills>
                <InputSkills
                  width={"80px"}
                  height={"15px"}
                  placeholder={"0"}
                ></InputSkills>
                <InputSkills
                  width={"30px"}
                  height={"15px"}
                  placeholder={"0"}
                ></InputSkills> */}
              </BoxRow>
            </ModBoxGroup>
            <BoxRow width={"100%"}>
              <SkillsText>Penalidade de Armadura</SkillsText>
              <InputSkills
                width={"48%"}
                height={"15px"}
                placeholder={"0"}
              ></InputSkills>
            </BoxRow>
          </ModBox>
        </PartsRow>

        <GropuArmorAndPenalty>
          <PenaltyAndArmor width={"60%"}>
            <Title>ARMADURA & DEFESA</Title>
            <InputSkills
              width={"90%"}
              height={"15px"}
              placeholder={"0"}
            ></InputSkills>
            <InputSkills
              width={"90%"}
              height={"15px"}
              placeholder={"0"}
            ></InputSkills>
          </PenaltyAndArmor>
          {/* Space */}
          <PenaltyAndArmor width={"40%"}>
            <PenaltyAndArmorText>
              <SkillsText>Defesa</SkillsText>
              <SkillsText>Penalidade</SkillsText>
            </PenaltyAndArmorText>
            <Stats>
              {inputs2.map((res) => {
                return (
                  <InputSkills
                    width={res.width}
                    height={"15px"}
                    placeholder={"0"}
                  ></InputSkills>
                );
              })}
            </Stats>
          </PenaltyAndArmor>
        </GropuArmorAndPenalty>
        <EXP>
          <Title>PONTOS DE EXPERIÊNCIA</Title>
          <EXPInput type={"number"} placeholder={"Xp"}></EXPInput>
        </EXP>
      </DefenseGroup>
    </Content>
  );
}
