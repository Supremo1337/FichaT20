import styled from "styled-components";

export const Content = styled.div`
  width: 35%;
  height: 100%;
  border: 2px solid;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

export const DefenseGroup = styled.div`
  width: 100%;
  height: 30vh;
  // background: yellow;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PartsRow = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  // background: pink;
`;

export const Defense = styled.div`
  width: 30%;
  height: 100%;
  // background: red;
  display: flex;
  align-items: center;
`;

export const DefenseCard = styled.div`
  width: 7vh;
  height: 100%;
  border: 1px solid;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputDefense = styled.input`
  width: 35px;
  height: 35px;
  border: 1px solid;
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

export const ModBoxGroup = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  // background: cyan;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ModBox = styled.div`
  width: 100%;
  height: 100%;
  // background: purple;
  border: 2px solid;
  border-radius: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

export const BoxRow = styled.div`
  width: ${(props) => props.width};
  height: auto;
  display: flex;
  justify-content: space-between;
`;

export const RowLines = styled.div`
  width: 80%;
  height: 40%;
  display: flex;
  justify-content: space-between;
  // background: red;
`;

{
  /* <reaprovoitei a div "CheckSkills", "SkillsText" e a "InputSkills" */
}

export const GropuArmorAndPenalty = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  // background: aqua;
  border: 2px solid;
  border-radius: 10px;
`;

export const PenaltyAndArmor = styled.div`
  width: ${(props) => props.width};
  height: 95%;
  // background: pink;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: none;
`;

export const PenaltyAndArmorText = styled.div`
  width: 90%;
  height: 25%;
  // background: red;
  display: flex;
  justify-content: space-between;
`;

export const Stats = styled.div`
  width: 100%;
  height: 75%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: end;
`;

export const EXP = styled.div`
  width: 100%;
  height: 20%;
  border: 2px solid;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EXPInput = styled.input`
  width: 50%;
  height: 50%;
  border: 0;
  box-shadow: 0 0 0 0;
  outline: 0;
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