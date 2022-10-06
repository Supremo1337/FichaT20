import { Content, TextArea } from "./styles";
import { Title } from "../../styles/global";
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

export default function Notes() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Content>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Anotações" {...a11yProps(1)} />
            <Tab label="Magias" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Title fontSize={"20px"}>DESCRIÇÃO</Title>
          <TextArea rows="3" cols="10"></TextArea>
          <Title fontSize={"20px"}>HABILIDADES DE RAÇA E ORIGEM</Title>
          <TextArea rows="3" cols="20"></TextArea>
          <Title fontSize={"20px"}>HABILIDADES DE CLASSE E PODERES</Title>
          <TextArea rows="3" cols="20"></TextArea>
          <Title fontSize={"20px"}>Anotações</Title>
          <TextArea rows="3" cols="20"></TextArea>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Magias
        </TabPanel>
      </Box>
    </Content>
  );
}
