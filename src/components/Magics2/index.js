import { ItensTitle } from "../Inventory/styles";
import { Options } from "../Others/styles";
import { InputSkills, SkillsText } from "../Skills/styles";
import {
  Content,
  Conditions,
  TextAndInput,
  TestResistance,
  TableColumn,
} from "./styles";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

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

export default function Magics2() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Content>
      <Conditions>
        <TextAndInput width={"55%"}>
          <SkillsText>Atributo-chave</SkillsText>
          <Options>
            <option value="FOR">FOR</option>
            <option value="DES">DES</option>
            <option value="CON">CON</option>
            <option value="INT">INT</option>
            <option value="SAB">SAB</option>
            <option value="CAR">CAR</option>
          </Options>
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
          <ItensTitle>(10 + 1/2 nível + mod. atributo-chave)</ItensTitle>
        </TestResistance>
      </Conditions>
      <TableColumn>
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
            <AddBoxOutlinedIcon></AddBoxOutlinedIcon>
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <div></div>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </div>
        <ItensTitle>Magias</ItensTitle>
      </TableColumn>
    </Content>
  );
}
