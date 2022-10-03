import styled from "styled-components";

export const Content = styled.div`
  width: 34.3%;
  height: 100%;
  border: 1px solid black;
  border-radius: 10px;
  margin-left: 10px;
  padding: 10px;
`;

export const DefenseGroup = styled.div`
  width: 100%;
  height: 50%;
  background: yellow;
  display: flex;
`;

export const DefenseSubGroup = styled.div`
  width: 30%;
  height: 60%;
  background: red;
  display: flex;
  align-items: center;
`;

export const Defense = styled.div`
  width: 60%;
  height: 100%;
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputDefense = styled.input`
  width: 35px;
  height: 35px;
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  position: relative;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  text-align: center;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ModBox = styled.div`
  width: 100%;
  height: 60%;
  background: purple;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const BoxRow = styled.div`
  width: ${(props) => props.width};
  height: 20%;
  display: flex;
  justify-content: space-between;
  background: #fff;
`;

export const RowLines = styled.div`
  width: 80%;
  height: 40%;
  display: flex;
  justify-content: space-between;
  background: red;
`;

{
  /* <reaprovoitei a div "CheckSkills", "SkillsText" e a "InputSkills" */
}
