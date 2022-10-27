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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [armorNumber, setArmorNumber] = useState(0);
  const [shieldNumber, setShieldNumber] = useState(0);
  const [penaltyArmor, setPenaltyArmor] = useState(0);
  const [penaltyShield, setPenaltyShield] = useState(0);
  const [somarPenalidade, setSomarPenalidade] = useState(0);

  const somaPenalidade = () => {
    (penaltyArmor + penaltyShield);
  };

  
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
      gridColumn: "3/4",
      gridRow: "1/2",
    },
    {
      fontSize: "10px",
      name: "Bônus de Escudo",
      gridColumn: "4/5",
      gridRow: "1/2",
    },
    { fontSize: "10px", name: "Outros", gridColumn: "5/6", gridRow: "1/2" },
    {
      fontSize: "12px",
      name: "Penalidade de Armadura",
      gridColumn: "1/4",
      gridRow: "3/4",
    },
  ];

  const inputs = [
    { width: "100%", gridColumn: "2/3", gridRow: "2/3", nameValue: "" },
    {
      width: "100%",
      gridColumn: "3/4",
      gridRow: "2/3",
      nameValue: "armorNumber",
    },
    {
      width: "100%",
      gridColumn: "4/5",
      gridRow: "2/3",
      nameValue: "shieldNumber",
    },
    {
      width: "100%",
      gridColumn: "5/6",
      gridRow: "2/3",
      nameValue: "penaltyArmor",
    },
    {
      width: "100%",
      gridColumn: "4/6",
      gridRow: "3/4",
      nameValue: "penaltyShield",
    },
  ];

  const inputsArmorAndDefense = [
    { width: "100%", gridColumn: "1/2", gridRow: "2/3", onChange: "" },
    { width: "100%", gridColumn: "1/2", gridRow: "3/4", onChange: "" },
    {
      width: "100%",
      gridColumn: "2/3",
      gridRow: "2/3",
      onChange: "",
    } /*<-------------------------------- AQUI*/,
    { width: "100%", gridColumn: "2/3", gridRow: "3/4", onChange: "" },
    { width: "100%", gridColumn: "3/4", gridRow: "2/3", onChange: "" },
    { width: "100%", gridColumn: "3/4", gridRow: "3/4", onChange: "" },
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
                <CheckSkills type={"checkbox"} gridColumn={"1/2"}></CheckSkills>
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
                      width={res.width}
                      height={"15px"}
                      placeholder={"0"}
                      gridColumn={res.gridColumn}
                      gridRow={res.gridRow}
                      readOnly
                      value={
                        res.nameValue == "shieldNumber"
                          ? shieldNumber
                          : res.nameValue == "armorNumber"
                          ? armorNumber
                          : res.nameValue == "penaltyArmor"
                          ? penaltyShield
                          : res.nameValue == "penaltyShield"
                          ? penaltyArmor
                          : ""
                      }
                    ></InputSkills>
                  );
                })}
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
                Defesa {/*<-------------------------------- AQUI*/}
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
                    width={res.width}
                    height={"15px"}
                    placeholder={"0"}
                    gridColumn={res.gridColumn}
                    gridRow={res.gridRow}
                    onChange={(e) => {
                      index === 2
                        ? setArmorNumber(e.target.value)
                        : index === 3
                        ? setShieldNumber(e.target.value)
                        : index === 4
                        ? setPenaltyArmor(e.target.value)
                        : index === 5
                        ? setPenaltyShield(e.target.value)
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
