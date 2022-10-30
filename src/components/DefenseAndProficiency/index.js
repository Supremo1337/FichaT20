import {
  Content,
  DefenseGroup,
  PartsRow,
  Defense,
  DefenseCard,
  InputDefense,
  ModBox,
  GropuArmorAndPenalty,
  EXP,
  EXPInput,
  P,
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
import Others from "../Others";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      color="red"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <div>{children}</div>
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
export default function DefenseAndProficiency() {
  const [value, setValue] = React.useState(0);
  const [armorNumber, setArmorNumber] = useState(0);
  const [shieldNumber, setShieldNumber] = useState(0);
  const [penaltyArmor, setPenaltyArmor] = useState(0);
  const [penaltyShield, setPenaltyShield] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const sumPenalty = penaltyArmor + penaltyShield;

  const text = [
    {
      fontSize: "10px",
      name: "Modificador de Des",
      gridColumn: "2/3",
      gridRow: "1/2",
    },
    {
      fontSize: "10px",
      name: "Bônus de Armadura",
      gridColumn: "4/5",
      gridRow: "1/2",
    },
    {
      fontSize: "10px",
      name: "Bônus de Escudo",
      gridColumn: "6/7",
      gridRow: "1/2",
    },
    { fontSize: "10px", name: "Outros", gridColumn: "8/9", gridRow: "1/2" },
    {
      fontSize: "14px",
      name: "Penalidade de Armadura",
      gridColumn: "1/5",
      gridRow: "3/4",
    },
  ];

  const inputs = [
    { gridColumn: "2/3", gridRow: "2/3", nameValue: "" },
    { gridColumn: "4/5", gridRow: "2/3", nameValue: "armorNumber" },
    { gridColumn: "6/7", gridRow: "2/3", nameValue: "shieldNumber" },
    { gridColumn: "8/9", gridRow: "2/3", nameValue: "" },
    { gridColumn: "5/9", gridRow: "3/4", nameValue: "Penalty of Armor" },
  ];

  const inputsArmorAndDefense = [
    { gridColumn: "1/2", gridRow: "2/3", placeholder: "Armadura" },
    { gridColumn: "1/2", gridRow: "3/4", placeholder: "Escudo" },
    { gridColumn: "2/3", gridRow: "2/3", placeholder: "10" },
    { gridColumn: "2/3", gridRow: "3/4", placeholder: "10" },
    { gridColumn: "3/4", gridRow: "2/3", placeholder: "10" },
    { gridColumn: "3/4", gridRow: "3/4", placeholder: "10" },
  ];

  return (
    <Content>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab label="Defesas" {...a11yProps(0)} />
            <Tab label="Outros" {...a11yProps(1)} />
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
                <CheckSkills
                  type={"checkbox"}
                  gridColumn={"1/2"}
                  gridRow={1 / 2}
                ></CheckSkills>
                {text.map((res, index) => {
                  return (
                    <SkillsText
                      key={index}
                      fontSize={res.fontSize}
                      gridColumn={res.gridColumn}
                      gridRow={res.gridRow}
                    >
                      {res.name}
                    </SkillsText>
                  );
                })}
                {inputs.map((res, index) => {
                  return (
                    <InputSkills
                      key={index}
                      width="100%"
                      height={"15px"}
                      placeholder={"0"}
                      gridColumn={res.gridColumn}
                      gridRow={res.gridRow}
                      readOnly
                      value={
                        res.nameValue == "armorNumber"
                          ? armorNumber
                          : res.nameValue == "shieldNumber"
                          ? shieldNumber
                          : res.nameValue == "penaltyArmor"
                          ? penaltyArmor
                          : res.nameValue == "Penalty of Armor"
                          ? sumPenalty
                          : ""
                      }
                    ></InputSkills>
                  );
                })}
                <P gridColumn={"1/2"} gridRow={"2/3"}>
                  +
                </P>
                <P gridColumn={"3/4"} gridRow={"2/3"}>
                  +
                </P>
                <P gridColumn={"5/6"} gridRow={"2/3"}>
                  +
                </P>
                <P gridColumn={"7/8"} gridRow={"2/3"}>
                  +
                </P>
              </ModBox>
            </PartsRow>
            <GropuArmorAndPenalty>
              <Title gridColumn={"1/2"} gridRow={"1/2"}>
                ARMADURA & ESCUDO
              </Title>
              <SkillsText
                gridColumn={"2/3"}
                gridRow={"1/2"}
                textAling={"center"}
              >
                Defesa
              </SkillsText>
              <SkillsText
                gridColumn={"3/4"}
                gridRow={"1/2"}
                textAling={"center"}
              >
                Penalidade
              </SkillsText>
              {inputsArmorAndDefense.map((res, index) => {
                return (
                  <InputSkills
                    key={index}
                    width="100%"
                    height={"15px"}
                    placeholder={res.placeholder}
                    gridColumn={res.gridColumn}
                    gridRow={res.gridRow}
                    onChange={(e) => {
                      index === 2
                        ? setArmorNumber(e.target.value)
                        : index === 3
                        ? setShieldNumber(e.target.value)
                        : index === 4
                        ? setPenaltyArmor(Number(e.target.value))
                        : index === 5
                        ? setPenaltyShield(Number(e.target.value))
                        : "";
                    }}
                  ></InputSkills>
                );
              })}
            </GropuArmorAndPenalty>
            <EXP>
              <Title>PONTOS DE EXPERIÊNCIA</Title>
              <EXPInput type={"number"} placeholder={"Xp"}></EXPInput>
            </EXP>
          </DefenseGroup>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Others></Others>
        </TabPanel>
      </Box>
    </Content>
  );
}
