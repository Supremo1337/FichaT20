import {
  Content,
  StatusGroup,
  ButtonsAndInputs,
  ActualPoints,
  MaxPoints,
  GroupStates,
  Buttons,
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
import SubmitBar from "../SubmitBar";

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
        <TextTitle fontSize="1.6rem">Vida</TextTitle>
        <GroupStates>
          <ButtonsAndInputs>
            <Buttons onClick={() => decreaseLife(5)}>
              <KeyboardDoubleArrowLeftIcon />
              <p>-5</p>
            </Buttons>
            <Buttons onClick={() => decreaseLife(1)}>
              <KeyboardArrowLeftIcon />
              <p>-1</p>
            </Buttons>
            <ActualPoints
              type="number"
              value={actualLife}
              onChange={({ target }) => setActualLife(Number(target.value))}
            ></ActualPoints>
            <p>/</p>
            <MaxPoints
              type="number"
              value={maxLife}
              onChange={({ target }) => setMaxLife(Number(target.value))}
            ></MaxPoints>
            <Buttons onClick={() => increaseLife(1)}>
              <p>+1</p>
              <KeyboardArrowRightIcon />
            </Buttons>
            <Buttons onClick={() => increaseLife(5)}>
              <p>+5</p>
              <KeyboardDoubleArrowRightIcon />
            </Buttons>
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
        <TextTitle fontSize="1.6rem">Mana</TextTitle>
        <GroupStates>
          <ButtonsAndInputs>
            <Buttons onClick={() => decreaseMane(5)}>
              <KeyboardDoubleArrowLeftIcon />
              <p>-5</p>
            </Buttons>
            <Buttons onClick={() => decreaseMane(1)}>
              <KeyboardArrowLeftIcon />
              <p>-1</p>
            </Buttons>
            <ActualPoints
              type="number"
              value={actualMane}
              onChange={({ target }) => setActualMane(Number(target.value))}
            ></ActualPoints>
            <p>/</p>
            <MaxPoints
              type="number"
              value={maxMane}
              onChange={({ target }) => setMaxMane(Number(target.value))}
            ></MaxPoints>
            <Buttons onClick={() => increaseMane(1)}>
              <p>+1</p>
              <KeyboardArrowRightIcon />
            </Buttons>
            <Buttons onClick={() => increaseMane(5)}>
              <p>+5</p>
              <KeyboardDoubleArrowRightIcon />
            </Buttons>
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
      <SubmitBar />
    </Content>
  );
}
