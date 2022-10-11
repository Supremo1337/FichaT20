import {
  Content,
  StatusGroup,
  ButtonsAndInputs,
  Buttons,
  LMInput,
  PointsLM,
  GroupStates,
} from "./styles";
import { Text } from "../CharacterData/styles";
import { useEffect, useState } from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Lifeandmane() {
  const [actualNum, setActualNum] = useState("");
  const [maxNum, setMaxNum] = useState("");
  const [vidaAtual, setVidaAtual] = useState(0);
  const [vidaMaxima, setVidaMaxima] = useState();

  const Max = (event) => {
    const limit = 3;
    setMaxNum(event.target.value.slice(0, limit));
  };

  const actual = (event) => {
    const limit = 3;
    setActualNum(event.target.value.slice(0, limit));
  };

  var barraDeVida = 0;

  const decreaseLife = (life) => {
    setVidaAtual(vidaAtual - life);
  };

  const increaseLife = (life) => {
    setVidaAtual(vidaAtual + life);
    barraDeVida = vidaAtual;
  };

  useEffect(() => {
    barraDeVida = vidaAtual;
  });

  const calculateWidthLife = (vidaAtual, vidaMaxima) => {
    setVidaMaxima((100 * vidaAtual) / vidaMaxima);
  };

  return (
    <Content>
      <StatusGroup>
        <Text color={"#ff0000"}>Vida</Text>
        <GroupStates>
          <ButtonsAndInputs>
            <Button
              style={{
                color: "black",
                height: "30px",
                minWidth: "42px",
              }}
              onClick={() => decreaseLife(5)}
            >
              <KeyboardDoubleArrowLeftIcon />
            </Button>
            -5
            <Button
              style={{
                color: "black",
                height: "30px",
                minWidth: "42px",
              }}
              onClick={() => decreaseLife(1)}
            >
              <KeyboardArrowLeftIcon />
            </Button>
            -1
            <LMInput
              type="number"
              min={maxNum}
              max={maxNum}
              value={vidaAtual}
              className="slider"
              onChange={Max}
            ></LMInput>
            /
            <PointsLM
              type="number"
              value={vidaMaxima}
              className="slider"
            ></PointsLM>
            +1
            <Button
              style={{
                color: "black",
                height: "30px",
                minWidth: "42px",
              }}
              onClick={() => increaseLife(1)}
            >
              <KeyboardArrowRightIcon />
            </Button>
            +5
            <Button
              style={{
                color: "black",
                height: "30px",
                minWidth: "42px",
              }}
              onClick={() => increaseLife(5)}
            >
              <KeyboardDoubleArrowRightIcon />
            </Button>
          </ButtonsAndInputs>
          <ProgressBar
            completed={vidaAtual}
            barContainerClassName="container"
          />
        </GroupStates>
      </StatusGroup>
      {/* Space */}
      <StatusGroup>
        <Text color={"#0000ff"}>Mana</Text>
        <GroupStates>
          <ButtonsAndInputs>
            <Button
              style={{
                color: "black",
                height: "30px",
                minWidth: "42px",
              }}
              onClick={() => decreaseLife(5)}
            >
              <KeyboardDoubleArrowLeftIcon />
            </Button>
            -5
            <Button
              style={{
                color: "black",
                height: "30px",
                minWidth: "42px",
              }}
              onClick={() => decreaseLife(1)}
            >
              <KeyboardArrowLeftIcon />
            </Button>
            -1
            <LMInput
              id="vidaAtual"
              type="number"
              min={maxNum}
              max={maxNum}
              value={vidaAtual}
              className="slider"
              onChange={Max}
            ></LMInput>
            /
            <PointsLM
              id="vidaMaxima"
              type="number"
              min={actualNum}
              max={actualNum}
              value={vidaMaxima}
              className="slider"
              onChange={actual}
            ></PointsLM>
            +1
            <Button
              style={{
                color: "black",
                height: "30px",
                minWidth: "42px",
              }}
              onClick={() => increaseLife(1)}
            >
              <KeyboardArrowRightIcon />
            </Button>
            +5
            <Button
              style={{
                color: "black",
                height: "30px",
                minWidth: "42px",
              }}
              onClick={() => increaseLife(5)}
            >
              <KeyboardDoubleArrowRightIcon />
            </Button>
          </ButtonsAndInputs>
          <ProgressBar
            completed={vidaAtual}
            barContainerClassName="container"
          />
        </GroupStates>
      </StatusGroup>
    </Content>
  );
}
