import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: flex-end;
  grid-column: 1/3;
  grid-row: 2/3;
`;
export const TextGroup = styled.div`
  width: 100%;
  height: auto;
  // background: cyan;
  display: flex;
  justify-content: space-between;
`;

export const RulesInputsGroup = styled.div`
  width: 100%;
  height: 45px;
  // background: red;
  display: flex;
  justify-content: space-between;
`;

export const RulesInputs = styled.input`
  width: 15%;
  height: 35px;
  border: 0px;
  background: none;
  border-bottom: 2px solid;
  box-shadow: 0 0 0 0;
  outline: 0;
  text-align: center;
`;

{
  /* < Reaproveitei o "SkillsText"> */
}
