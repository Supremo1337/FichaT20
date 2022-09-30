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
import { TextDiv } from "../Characterdata/styles";
import { useState } from "react";

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
  return (
    <Content>
      <StatusGroup>
        <TextDiv color={"#ff0000"}>Vida</TextDiv>
        <GroupStates>
          <ButtonsAndInputs>
            <Buttons></Buttons>
            <Buttons></Buttons>
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
            <Buttons></Buttons>
            <Buttons></Buttons>
          </ButtonsAndInputs>
          <ProgressBar></ProgressBar>
        </GroupStates>
      </StatusGroup>
    </Content>
  );
}
