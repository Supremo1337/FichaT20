import {
  Content,
  StatusGroup,
  ButtonsAndInputs,
  Buttons,
  ActualPoints,
  MaxPoints,
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
  const [vidaMaxima, setVidaMaxima] = useState(100);

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

  const calculateWidthLife = (vidaAtual) => {
    // setVidaMaxima((100 * vidaAtual) / vidaMaxima);
  };
  console.log("vidaAtual", vidaAtual);
  console.log("vidaMaxima", vidaMaxima);

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
              -5
            </Button>
            <Button
              style={{
                color: "black",
                height: "30px",
                minWidth: "42px",
              }}
              onClick={() => decreaseLife(1)}
            >
              <KeyboardArrowLeftIcon />
              -1
            </Button>
            <ActualPoints
              type="number"
              min={maxNum}
              max={maxNum}
              value={vidaAtual}
              onChange={({ target }) => calculateWidthLife(target.value)}
            ></ActualPoints>
            /
            <MaxPoints
              type="number"
              min={actualNum}
              max={actualNum}
              value={vidaMaxima}
              onChange={({ target }) => setVidaMaxima(target.value)}
            ></MaxPoints>
            <Button
              style={{
                color: "black",
                height: "30px",
                minWidth: "42px",
              }}
              onClick={() => increaseLife(1)}
            >
              +1
              <KeyboardArrowRightIcon />
            </Button>
            <Button
              style={{
                color: "black",
                height: "30px",
                minWidth: "42px",
              }}
              onClick={() => increaseLife(5)}
            >
              +5
              <KeyboardDoubleArrowRightIcon />
            </Button>
          </ButtonsAndInputs>
          <ProgressBar
            maxCompleted={10}
            bgColor="red"
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
              -5
            </Button>
            <Button
              style={{
                color: "black",
                height: "30px",
                minWidth: "42px",
              }}
              onClick={() => decreaseLife(1)}
            >
              <KeyboardArrowLeftIcon />
              -1
            </Button>
            <ActualPoints
              type="number"
              min={maxNum}
              max={maxNum}
              value={vidaAtual}
              onChange={({ target }) => calculateWidthLife(target.value)}
            ></ActualPoints>
            /
            <MaxPoints
              type="number"
              min={actualNum}
              max={actualNum}
              value={vidaMaxima}
              onChange={({ target }) => setVidaMaxima(target.value)}
            ></MaxPoints>
            <Button
              style={{
                color: "black",
                height: "30px",
                minWidth: "42px",
              }}
              onClick={() => increaseLife(1)}
            >
              +1
              <KeyboardArrowRightIcon />
            </Button>
            <Button
              style={{
                color: "black",
                height: "30px",
                minWidth: "42px",
              }}
              onClick={() => increaseLife(5)}
            >
              +5
              <KeyboardDoubleArrowRightIcon />
            </Button>
          </ButtonsAndInputs>
          <ProgressBar
            maxCompleted={10}
            completed={vidaAtual}
            barContainerClassName="container"
            bgColor="blue"
          />
        </GroupStates>
      </StatusGroup>
    </Content>
  );
}
