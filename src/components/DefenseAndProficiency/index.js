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
import { useEffect, useState } from "react";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function DefenseMultipliers() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Defesas" {...a11yProps(1)} />
            <Tab label="Outros" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
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
                    <SkillsText fontSize={"10px"}>
                      Modificador de Des
                    </SkillsText>
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
              Space
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
        </TabPanel>
        <TabPanel value={value} index={1}>
          PROFICIÊNCIAS
          <br />
          TAMANHO
          <br />
          DESLOCAMENTO
        </TabPanel>
      </Box>
    </Content>
  );
}
