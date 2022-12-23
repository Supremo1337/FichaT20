import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 978px;
  border: 2px solid;
  border-radius: 10px;
  padding: 10px;
  display: grid;
  grid-template-columns: 20vw 14vw 9vw 10vw 6vw 8vw;
  gap: 15px;
  align-items: flex-end;
  @media (min-width: 1024px) {
    grid-template-columns: 6vw 3vw 2vw 2vw 2vw 2vw;
    grid-column: 5/6;
    grid-row: 1/4;
  }
`;

// Reaprovei a label e "Text"

export const SkillsText = styled.label`
  height: 16px;
  font-size: ${(props) => props.fontSize};
  background: yellow;
  position: relative;
  left: ${(props) => props.left};
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
  @media (min-width: 1024px) {
    margin-left: ${(props) => props.marginLeft};
    padding-top: ${(props) => props.paddingTop};
    grid-column: ${(props) => props.gridColumn};
    grid-row: ${(props) => props.gridRow};
    text-align: ${(props) => props.textAling};
  }
`;

export const CheckSkills = styled.input`
  width: 15px;
  height: 15px;
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
  font-size: 1.6rem;
`;

export const NameSkills = styled.label`
  font-size: 1rem;
  padding-top: 7px;
  display: flex;
`;

export const InputSkillsTotal = styled.input`
  width: 75%;
  height: 20px;
  border: 2px solid;
  position: relative;
  border-radius: 5px;
  // left: ${(props) => props.left};
  // right: ${(props) => props.right};
  font-size: 1.6rem;
`;

export const InputSkills = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: none;
  border: 0px;
  border-bottom: 2px solid;
  position: relative;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  text-align: center;
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
  outline: none;
  font-size: 1.6rem;
`;

export const Column = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  grid-column: ${(props) => props.gridColumn};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${(props) => props.gap};
`;

export const GroupInputAndOperator = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  label {
    font-size: 1rem;
  }
`;
