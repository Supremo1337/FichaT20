import {
  Content,
  StatusGroup,
  ButtonsAndInputs,
  Buttons,
  LMInput,
  PointsLM,
  GroupStates,
  ProgressBar,
} from "./styles";
import { Text } from "../CharacterData/styles";
import { useState } from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";

export default function Lifeandmane() {
  const [maxNum, setMaxNum] = useState("");

  const Max = (event) => {
    const limit = 3;
    setMaxNum(event.target.value.slice(0, limit));
  };

  const [actualNum, setActualNum] = useState("");

  const actual = (event) => {
    const limit = 3;
    setActualNum(event.target.value.slice(0, limit));
  };

  function down5Progress() {
    (100 * vidaAtual) / vidaMaxima;
  }

  return (
    <Content>
      <StatusGroup>
        <Text color={"#ff0000"}>Vida</Text>
        <GroupStates>
          <ButtonsAndInputs>
            <Button
              style={{
                color: "black",
                border: "1px solid",
                height: "30px",
                minWidth: "42px",
              }}
              onClick={down5Progress}
            >
              <KeyboardDoubleArrowLeftIcon />
            </Button>
            -5
            <KeyboardArrowLeftIcon /> -1
            <LMInput
              type="number"
              min={maxNum}
              max={maxNum}
              value={maxNum}
              className="slider"
              onChange={Max}
            ></LMInput>
            /
            <PointsLM
              type="number"
              min={actualNum}
              max={actualNum}
              value={actualNum}
              className="slider"
              onChange={actual}
            ></PointsLM>
            +1
            <KeyboardArrowRightIcon />
            +5
            <KeyboardDoubleArrowRightIcon />
          </ButtonsAndInputs>
          <ProgressBar
            background={"red"}
            style={{ width: "30%" }}
          ></ProgressBar>
        </GroupStates>
      </StatusGroup>
      {/* Space */}
      {/* <StatusGroup>
        <Text color={"#0000ff"}>Mana</Text>
        <GroupStates>
          <ButtonsAndInputs>
            <KeyboardDoubleArrowLeftIcon /> -5
            <KeyboardArrowLeftIcon /> -1
            <LMInput
              type="number"
              min={maxNum}
              max={maxNum}
              value={maxNum}
              className="slider"
              onChange={Max}
            ></LMInput>
            /
            <PointsLM
              type="number"
              min={actualNum}
              max={actualNum}
              value={actualNum}
              className="slider"
              onChange={actual}
            ></PointsLM>
            +1
            <KeyboardArrowRightIcon />
            +5
            <KeyboardDoubleArrowRightIcon />
          </ButtonsAndInputs>
          <ProgressBar background={"blue"}></ProgressBar>
        </GroupStates>
      </StatusGroup> */}
    </Content>
  );
}
