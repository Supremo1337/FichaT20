import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 190px;
  //   background: red;
  display: flex;
`;

export const GroupDates = styled.div`
  width: 40%;
  height: auto;
  display: flex;
  border: 2px solid black;
  border-radius: 10px;
  padding-left: 30px;
  box-sizing: border-box;
`;

export const Group = styled.div`
  width: 100%;
  height: auto;
  //   background: green;
  flex-direction: row;
`;

export const BoxPerso = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const TextDiv = styled.label`
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  //   background: gray;
`;

export const NamePerso = styled.input`
  width: 90%;
  height: 40px;
  background: #fff;
  border: 2px solid black;
`;

export const Logo = styled.div`
  width: 38%;
  height: 60px;
  //   background: red;
`;

export const Attribute = styled.div`
  width: 15%;
  height: 100%;
  //   background: yellow;
  border: 2px solid black;
  border-radius: 10px;
  margin-left: 10px;
  padding: 0px 5px;
`;

export const BoxRow = styled.div`
  width: 100%;
  height: 93px;
  //   background: red;
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
`;

export const Box = styled.div`
  width: 60px;
  height: 70px;
  //   background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid black;
`;

export const AttributeTitle = styled.label`
  width: 40px;
  margin-left: 10px;
  border: 2px solid black;
  text-align: center;
`;

export const AttributeInput = styled.input`
  width: 35px;
  height: 30px;
  margin-left: 11px;
  background: #fff;
  border-radius: 50%;
  text-align: center;
  border: 2px solid black;
  position: relative;
  top: 12px;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ModNumber = styled.label`
  width: 35px;
  margin-left: 25px;
`;

export const StatusLM = styled.div`
  width: 25%;
  height: 100%;
  background: pink;
  border: 2px solid black;
  margin-left: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const StatusGroup = styled.div`
  width: 100%;
  height: 50%;
  background: purple;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ButtonsAndInputs = styled.div`
  width: 100%;
  height: 30px;
  background: green;
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
  background: blue;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 30%;
  background: red;
  border-radius: 5px;
`;
