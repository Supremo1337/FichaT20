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

export default function LifeAndManeCopy() {
  const [actualLife, setActualLife] = useState();
  const [maxLife, setMaxLife] = useState();
  const [actualMane, setActualMane] = useState();
  const [maxMane, setMaxMane] = useState();

  const decreaseLife = (life) => {
    setActualLife(actualLife - life);
  };

  const increaseLife = (life) => {
    setActualLife(actualLife + life);
  };

  const decreaseMane = (mane) => {
    setActualMane(actualMane - mane);
  };

  const increaseMane = (mane) => {
    setActualMane(actualMane + mane);
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
              value={actualLife}
              onChange={({ target }) => setActualLife(Number(target.value))}
            ></ActualPoints>
            /
            <MaxPoints
              type="number"
              value={maxLife}
              onChange={({ target }) => setMaxLife(Number(target.value))}
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
            maxCompleted={Number(maxLife)}
            bgColor="red"
            completed={Number(actualLife)}
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
              value={actualMane}
              onChange={({ target }) => setActualMane(Number(target.value))}
            ></ActualPoints>
            /
            <MaxPoints
              type="number"
              value={maxMane}
              onChange={({ target }) => setMaxMane(Number(target.value))}
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
            maxCompleted={Number(maxMane)}
            bgColor="blue"
            completed={Number(actualMane)}
            barContainerClassName="container"
            transitionDuration="0.5s"
          />
        </GroupStates>
      </StatusGroup>
    </Content>
  );
}
