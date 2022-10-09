import { ItensTitle } from "../Inventory/styles";
import { Options } from "../Others/styles";
import { InputSkills, SkillsText } from "../Skills/styles";
import { Content, Conditions, TextAndInput, TestResistance } from "./styles";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  name,
  Escola,
  Execucao,
  Alcance,
  Área,
  Duração,
  Resistência,
  Efeito
) {
  return {
    name,
    Escola,
    Execucao,
    Alcance,
    Área,
    Duração,
    Resistência,
    Efeito,
  };
}

const rows = [
  createData(
    "Escreva aqui",
    "Escreva aqui",
    "Escreva aqui",
    "Escreva aqui",
    "Escreva aqui",
    "Escreva aqui",
    "Escreva aqui",
    "Escreva aqui"
  ),
  createData(
    "Escreva aqui",
    "Escreva aqui",
    "Escreva aqui",
    "Escreva aqui",
    "Escreva aqui",
    "Escreva aqui",
    "Escreva aqui",
    "Escreva aqui"
  ),
  createData(
    "Escreva aqui",
    "Escreva aqui",
    "Escreva aqui",
    "Escreva aqui",
    "Escreva aqui",
    "Escreva aqui",
    "Escreva aqui",
    "Escreva aqui"
  ),
  createData(
    "Escreva aqui",
    "Escreva aqui",
    "Escreva aqui",
    "Escreva aqui",
    "Escreva aqui",
    "Escreva aqui",
    "Escreva aqui",
    "Escreva aqui"
  ),
];

export default function Magics() {
  return (
    <Content>
      <Conditions>
        <TextAndInput width={"65%"}>
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
            <InputSkills width={"35%"} placeholder={"0"}></InputSkills>
          </TextAndInput>
          <ItensTitle>(10 + 1/2 nível + mod. atributo-chave)</ItensTitle>
        </TestResistance>
      </Conditions>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="normal" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Magias</TableCell>
              <TableCell align="right">Escola</TableCell>
              <TableCell align="right">Execução</TableCell>
              <TableCell align="right">Alcance</TableCell>
              <TableCell align="right">Área</TableCell>
              <TableCell align="right">Duração</TableCell>
              <TableCell align="right">Resistência</TableCell>
              <TableCell align="right">Efeito</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 1 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.Escola}</TableCell>
                <TableCell align="right">{row.Execucao}</TableCell>
                <TableCell align="right">{row.Alcance}</TableCell>
                <TableCell align="right">{row.Área}</TableCell>
                <TableCell align="right">{row.Duração}</TableCell>
                <TableCell align="right">{row.Resistência}</TableCell>
                <TableCell align="right">{row.Efeito}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Content>
  );
}
