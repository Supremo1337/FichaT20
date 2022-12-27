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
import { Option, Title } from "../../styles/global";
import { useEffect, useState } from "react";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Others from "../Others";
import { Select } from "../Others/styles";
import { textTitleOfModAndBonus } from "./textTitleOfModAndBonus";
import { inputsOfModAndBonus } from "./inputsOfModAndBonus";
import { inputsArmorAndShield } from "./inputsArmorAndShield";
import SubmitBar from "../SubmitBar";

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
  const [other, setOther] = useState(0);
  const [attributeForSelect, setAttributeForSelect] = useState("DES");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const sumPenalty = penaltyArmor + penaltyShield;

  const onChange = (e) => {
    e.target.name == "Other" ? setOther(event.target.value) : "";
  };

  let selectAttribute;
  switch (attributeForSelect) {
    case "FOR":
      selectAttribute = "";
      break;
    case "DES":
      selectAttribute = "";
      break;
    case "CON":
      selectAttribute = "";
      break;
    case "INT":
      selectAttribute = "";
      break;
    case "CAR":
      selectAttribute = "";
      break;
    case "SAB":
      selectAttribute = "";
      break;
  }
  console.log("SOU O SELECT ATTRIBUTE", selectAttribute);

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
                  <Title fontSize="1.2rem">Defesa</Title>
                  <InputDefense
                    type={"number"}
                    disabled
                    top={"10px"}
                    border={"none"}
                    placeholder={"10"}
                  />
                </DefenseCard>
                <InputDefense
                  borderRadius={"50%"}
                  disabled
                  left={"-10px"}
                  placeholder={"=10"}
                />
              </Defense>
              <ModBox>
                <CheckSkills
                  type={"checkbox"}
                  gridColumn={"1/2"}
                  gridRow={"1/2"}
                />
                <SkillsText
                  fontSize={"10px"}
                  gridColumn={"2/3"}
                  gridRow={"1/2"}
                >
                  Mod. de
                </SkillsText>
                <Select
                  position={"relative"}
                  top={"10px"}
                  gridColumn={"2/3"}
                  gridRow={"1/2"}
                  onChange={(e) => {
                    setAttributeForSelect(e.target.value);
                  }}
                  value={attributeForSelect || ""}
                >
                  <Option value="FOR">FOR</Option>
                  <Option value="DES">DES</Option>
                  <Option value="CON">CON</Option>
                  <Option value="INT">INT</Option>
                  <Option value="SAB">SAB</Option>
                  <Option value="CAR">CAR</Option>
                </Select>
                {textTitleOfModAndBonus.map((res, index) => {
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
                {inputsOfModAndBonus.map((res, index) => {
                  return (
                    <InputSkills
                      key={index}
                      width="100%"
                      height={"15px"}
                      placeholder={"0"}
                      gridColumn={res.gridColumn}
                      gridRow={res.gridRow}
                      readOnly={res.name == "Other" ? false : true}
                      name={res.name}
                      onChange={onChange}
                      value={
                        res.nameValue == "attributeSelected"
                          ? selectAttribute
                          : res.nameValue == "armorNumber"
                          ? armorNumber
                          : res.nameValue == "shieldNumber"
                          ? shieldNumber
                          : res.nameValue == "other"
                          ? other
                          : res.nameValue == "Penalty of Armor"
                          ? sumPenalty
                          : ""
                      }
                      type={res.type == "number" ? "number" : ""}
                    />
                  );
                })}
              </ModBox>
            </PartsRow>
            <GropuArmorAndPenalty>
              <Title fontSize="1.6rem" gridColumn={"1/2"} gridRow={"1/2"}>
                ARMADURA & ESCUDO
              </Title>
              <SkillsText
                fontSize="1.6rem"
                gridColumn={"2/3"}
                gridRow={"1/2"}
                textAling={"center"}
              >
                Defesa
              </SkillsText>
              <SkillsText
                fontSize="1.6rem"
                gridColumn={"3/4"}
                gridRow={"1/2"}
                textAling={"center"}
              >
                Penalidade
              </SkillsText>
              {inputsArmorAndShield.map((res, index) => {
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
                    type={res.type == "number" ? "number" : ""}
                  />
                );
              })}
            </GropuArmorAndPenalty>
            {/* <EXP>
              <Title fontSize="1.6rem">PONTOS DE EXPERIÊNCIA</Title>
              <EXPInput type={"number"} placeholder={"Xp"}></EXPInput>
            </EXP> */}
          </DefenseGroup>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Others />
        </TabPanel>
      </Box>
      <SubmitBar />
    </Content>
  );
}
