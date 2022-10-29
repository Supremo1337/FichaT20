import {
  Content,
  StatusGroup,
  ButtonsAndInputs,
  ActualPoints,
  MaxPoints,
  GroupStates,
} from "./styles";
import { TextTitle } from "../../styles/global";
import { useState } from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Lifeandmane() {
  const [vidaAtual, setVidaAtual] = useState();
  const [vidaMaxima, setVidaMaxima] = useState();
  const [manaAtual, setManaAtual] = useState();
  const [manaMaxima, setManaMaxima] = useState();

  const decreaseLife = (life) => {
    setVidaAtual(vidaAtual - life);
  };

  const increaseLife = (life) => {
    setVidaAtual(vidaAtual + life);
  };

  const decreaseMane = (mane) => {
    setManaAtual(manaAtual - mane);
  };

  const increaseMane = (mane) => {
    setManaAtual(manaAtual + mane);
  };

  return (
    <Content>
      <StatusGroup>
        <TextTitle>Vida</TextTitle>
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
              <p>-5</p>
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
              <p>-1</p>
            </Button>
            <ActualPoints
              type="number"
              value={vidaAtual}
              onChange={({ target }) => setVidaAtual(Number(target.value))}
            ></ActualPoints>
            /
            <MaxPoints
              type="number"
              value={vidaMaxima}
              onChange={({ target }) => setVidaMaxima(Number(target.value))}
            ></MaxPoints>
            <Button
              style={{
                color: "black",
                height: "30px",
                minWidth: "42px",
              }}
              onClick={() => increaseLife(1)}
            >
              <p>+1</p>
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
              <p>+5</p>
              <KeyboardDoubleArrowRightIcon />
            </Button>
          </ButtonsAndInputs>
          <ProgressBar
            maxCompleted={Number(vidaMaxima)}
            bgColor="red"
            completed={Number(vidaAtual)}
            barContainerClassName="container"
            transitionDuration="0.5s"
          />
        </GroupStates>
      </StatusGroup>
      {/* Space */}
      <StatusGroup>
        <TextTitle>Mana</TextTitle>
        <GroupStates>
          <ButtonsAndInputs>
            <Button
              style={{
                color: "black",
                height: "30px",
                minWidth: "42px",
              }}
              onClick={() => decreaseMane(5)}
            >
              <KeyboardDoubleArrowLeftIcon />
              <p>-5</p>
            </Button>
            <Button
              style={{
                color: "black",
                height: "30px",
                minWidth: "42px",
              }}
              onClick={() => decreaseMane(1)}
            >
              <KeyboardArrowLeftIcon />
              <p>-1</p>
            </Button>
            <ActualPoints
              type="number"
              value={manaAtual}
              onChange={({ target }) => setManaAtual(Number(target.value))}
            ></ActualPoints>
            /
            <MaxPoints
              type="number"
              value={manaMaxima}
              onChange={({ target }) => setManaMaxima(Number(target.value))}
            ></MaxPoints>
            <Button
              style={{
                color: "black",
                height: "30px",
                minWidth: "42px",
              }}
              onClick={() => increaseMane(1)}
            >
              <p>+1</p>
              <KeyboardArrowRightIcon />
            </Button>
            <Button
              style={{
                color: "black",
                height: "30px",
                minWidth: "42px",
              }}
              onClick={() => increaseMane(5)}
            >
              <p>+5</p>
              <KeyboardDoubleArrowRightIcon />
            </Button>
          </ButtonsAndInputs>
          <ProgressBar
            maxCompleted={Number(manaMaxima)}
            bgColor="blue"
            completed={Number(manaAtual)}
            barContainerClassName="container"
            transitionDuration="0.5s"
          />
        </GroupStates>
      </StatusGroup>
    </Content>
  );
}
