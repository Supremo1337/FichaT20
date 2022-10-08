import styled from "styled-components";

export const Content = styled.div`
  width: 29%;
  height: 190px;
  // background: pink;
  border: 2px solid;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const StatusGroup = styled.div`
  width: 100%;
  height: 50%;
  // background: purple;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ButtonsAndInputs = styled.div`
  width: 100%;
  height: 30px;
  // background: green;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Buttons = styled.div`
  width: 35px;
  height: 25px;
  background: #000;
`;

export const LMInput = styled.input`
  width: 30%;
  height: 70%;
  background: #fff;
  border: 0.1px solid black;
  text-align: right;
`;

export const PointsLM = styled.input`
  width: 30%;
  height: 70%;
  background: #fff;
  border: 0.1px solid black;
`;

export const GroupStates = styled.div`
  width: 100%;
  height: 52.5%;
  // background: yellow;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 30%;
  background: ${(props) =>props.background};
  border-radius: 5px;
`;