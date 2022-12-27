import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 1024px) {
    grid-column: 2/4;
    grid-row: 4/5;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 1366px) {
    grid-column: 3/5;
    grid-row: 2/3;
  }
`;

export const DefenseGroup = styled.div`
  width: 100%;
  height: 202px;
  // background: yellow;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 1024px) {
    height: 205px;
  }
`;

export const PartsRow = styled.div`
  width: 100%;
  height: 48%;
  display: flex;
`;

export const Defense = styled.div`
  width: 72px;
  height: 84px;
  /* background: red; */
  display: flex;
  align-items: center;
  @media (min-width: 1024px) {
    width: 92px;
    width: 25%;
    height: 100px;
  }
`;

export const DefenseCard = styled.div`
  width: 57px;
  height: 81px;
  border: 1px solid;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    width: 60%;
    height: 100px;
  }
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
  font-size: 1.6rem;
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
  height: 100%;
  border: 2px solid;
  border-radius: 10px;
  padding: 5px;
  display: grid;
  grid-template-columns: 5vw 10vw 4vw 11vw 4vw 11vw 4vw 8vw;
  grid-template-rows: 3vh 4vh 2vh;
  align-items: center;
  column-gap: 5px;
  @media (min-width: 1024px) {
    width: 75%;
    grid-template-columns: 2vw 6vw 2vw 10vw 1vw 9vw 2vw 10vw;
  }
  @media (min-width: 1366px) {
    grid-template-columns: 2vw 3vw 1vw 3vw 1vw 3vw 1vw 3vw;
  }
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
  grid-template-columns: 40vw 16vw 23vw;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px;
  padding: 10px;
  @media (min-width: 1024px) {
    grid-template-columns: 11vw 5vw 6.5vw;
    grid-template-rows: 1fr 1fr 1fr;
  }
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
  font-size: 1.6rem;
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
  font-size: 1.6rem;
`;
