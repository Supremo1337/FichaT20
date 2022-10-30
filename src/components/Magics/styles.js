import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: auto;
  background: red;
  display: flex;
  border: 2px solid;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  grid-column: 1/6;
  grid-row: 5/6;
`;

export const Group = styled.div`
  width: 100%;
  height: 48vh;
  background: green;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const ConditionAndInputsDiv = styled.div`
  width: 100%;
  height: 50%;
  background: purple;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Conditions = styled.div`
  width: 20%;
  height: 50%;
  background: blue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid;
  border-radius: 10px;
`;

export const TextAndInput = styled.div`
  width: ${(props) => props.width};
  height: auto;
  background: pink;
  display: flex;
  justify-content: space-between;
`;

export const TestResistance = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputsDiv = styled.div`
  width: 79%;
  height: 100%;
  background: orange;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`;

export const InputMagics = styled.input`
  height: 50%;
  border: 1px solid;
  border-radius: 5px;
  outline: 0;
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
`;

export const Description = styled.div`
  height: 49%;
  border: 1px solid;
  border-radius: 5px;
`;

export const ModalDiv = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputModal = styled.input`
  width: 100%;
  height: 5%;
  border: 1px solid;
  border-radius: 5px;
  outline: 0;
`;
