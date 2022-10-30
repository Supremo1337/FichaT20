import { ItensTitle } from "../Inventory/styles";
import { InputProfieciency, Select } from "../Others/styles";
import { InputSkills, SkillsText } from "../Skills/styles";
import {
  Content,
  Group,
  Conditions,
  TextAndInput,
  TestResistance,
  InputsDiv,
  ConditionAndInputsDiv,
  InputMagics,
  Description,
  ModalDiv,
  InputModal,
} from "./styles";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { Title } from "../../styles/global";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 900,
  border: "2px solid",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};

export default function Magics() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const MagicInputs = [
    { value: "Nome:", gridColumn: "1/3", gridRow: "" },
    { value: "Escola:", gridColumn: "1/2", gridRow: "" },
    { value: "Execução:", gridColumn: "1/2", gridRow: "" },
    { value: "Alcance:", gridColumn: "1/2", gridRow: "" },
    { value: "Área:", gridColumn: "2/3", gridRow: "2/3" },
    { value: "Efeito:", gridColumn: "2/3", gridRow: "3/4" },
    { value: "Duração:", gridColumn: "2/3", gridRow: "" },
    { value: "Resistência:", gridColumn: "1/3", gridRow: "" },
  ];

  return (
    <Content>
      <Title>Magias</Title>
      <div>
        <Button
          style={{
            color: "black",
            border: "1px solid",
            height: "30px",
            minWidth: "42px",
          }}
          onClick={handleOpen}
        >
          <AddBoxOutlinedIcon />
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <Title>Adicionar Nova Mágia</Title>
            </Typography>
            <ModalDiv id="modal-modal-description" sx={{ mt: 2 }}>
              {MagicInputs.map((res, index) => {
                return (
                  <InputModal
                    key={index}
                    height={"5%"}
                    value={res.value}
                  ></InputModal>
                );
              })}
              <InputProfieciency
                border={"1px solid"}
                borderRadius={"5px"}
                height={"50%"}
                placeholder="Descrição:"
              ></InputProfieciency>
            </ModalDiv>
          </Box>
        </Modal>
      </div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label="Nome da Magia"
              {...a11yProps(1)}
            />
            <Tab
              label="Nome da Magia"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Group>
            <ConditionAndInputsDiv>
              <Conditions>
                <TextAndInput width={"55%"}>
                  <SkillsText>Atributo-chave</SkillsText>
                  <Select defaultValue={"INT"}>
                    <option value="FOR">FOR</option>
                    <option value="DES">DES</option>
                    <option value="CON">CON</option>
                    <option value="INT">INT</option>
                    <option value="SAB">SAB</option>
                    <option value="CAR">CAR</option>
                  </Select>
                </TextAndInput>
                <TextAndInput width={"65%"}>
                  <SkillsText>MOD</SkillsText>
                  <InputSkills width={"65%"} placeholder={"0"}></InputSkills>
                </TextAndInput>
                <TestResistance>
                  <TextAndInput>
                    <SkillsText>TESTE DE RESISTÊNCIA</SkillsText>
                    <InputSkills width={"40%"} placeholder={"0"}></InputSkills>
                  </TextAndInput>
                  <ItensTitle>
                    (10 + 1/2 nível + mod. atributo-chave)
                  </ItensTitle>
                </TestResistance>
              </Conditions>
              <InputsDiv>
                {MagicInputs.map((res, index) => {
                  return (
                    <InputMagics
                      key={index}
                      defaultValue={res.value}
                      gridColumn={res.gridColumn}
                      gridRow={res.gridRow}
                    ></InputMagics>
                  );
                })}
              </InputsDiv>
            </ConditionAndInputsDiv>
            <Description>
              <InputProfieciency
                placeholder="Descrição:"
                height={"98%"}
                border={"none"}
              ></InputProfieciency>
            </Description>
          </Group>
        </TabPanel>
        <TabPanel value={value} index={1}></TabPanel>
      </Box>
    </Content>
  );
}
