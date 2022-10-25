import styled from "styled-components";

export const Content = styled.div`
  width: 29%;
  height: 200px;
  // background: pink;
  border: 2px solid;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-around;
`;

export const StatusGroup = styled.div`
  width: 100%;
  height: 70px;
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

export const ActualPoints = styled.input`
  width: 30%;
  height: 70%;
  border: 0.1px solid;
  text-align: right;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const MaxPoints = styled.input`
  width: 30%;
  height: 70%;
  border: 0.1px solid;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const GroupStates = styled.div`
  width: 100%;
  height: 52.5%;
  // background: yellow;
`;

export const ProgressBar = styled.progress`
  width: 100%;
  max-width: 100%;
  height: 30%;
  background: ${(props) => props.background};
  border-radius: 5px;
`;
