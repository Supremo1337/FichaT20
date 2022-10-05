import styled from "styled-components";

export const Content = styled.div`
  width: 65%;
  height: 100%;
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: flex-end;
`;
export const TextGroup = styled.div`
  width: 100%;
  height: auto;
  background: cyan;
  display: flex;
  justify-content: space-between;
`;

export const RulesInputsGroup = styled.div`
  width: 100%;
  height: 100%;
  background: red;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 5vh 5vh 5vh 5vh 5vh 5vh;
`;

export const RulesInputs = styled.input`
  width: 90%;
  height: 35px;
  border: 0px;
  background: none;
  border-bottom: 2px solid black;
  box-shadow: 0 0 0 0;
  outline: 0;
  text-align: center;
`;

{
  /* < Reaproveitei o "SkillsText"> */
}
