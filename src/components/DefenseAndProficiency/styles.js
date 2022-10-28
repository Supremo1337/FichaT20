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
`;

export const Defense = styled.div`
  width: 25%;
  height: 100px;
  display: flex;
  align-items: center;
`;

export const DefenseCard = styled.div`
  width: 60%;
  height: 100px;
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

export const ModBox = styled.div`
  width: 75%;
  height: 100%;
  border: 2px solid;
  border-radius: 10px;
  padding: 5px;
  display: grid;
  grid-template-columns: 1vw 4vw 1vw 3vw 1vw 3vw 1vw 2vw;
  grid-template-rows: 3vh 4vh 2vh;
  align-items: center;
  column-gap: 5px;
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
  height: 100px;
  border: 2px solid;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 11vw 5vw 6.5vw;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px;
  padding: 10px;
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

export const P = styled.p`
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
  margin: 0px;
  margin-left: 5px;
`;
