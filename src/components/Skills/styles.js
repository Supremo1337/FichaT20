import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 960px;
  border: 2px solid;
  border-radius: 10px;
  margin-left: 10px;
  padding: 10px;
  display: grid;
  grid-template-columns: 6vw 3vw 2vw 2vw 2vw 2vw;
  gap: 15px;
  align-items: flex-end;
`;

export const SkillsTitleandValue = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
`;

// Reaprovei a label e "Text"

export const SkillsText = styled.label`
  width: ${(props) => props.width};
  height: 30px;
  font-size: ${(props) => props.fontSize};
  padding-top: ${(props) => props.paddingTop};
  margin-left: ${(props) => props.marginLeft};
  position: relative;
  left: ${(props) => props.left};
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
  text-align: ${(props) => props.textAling};
  // background: yellow;
`;

export const SkillsRow = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NameCheckGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckSkills = styled.input`
  width: 15px;
  height: 15px;
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
`;

export const NameSkills = styled.label`
  font-size: 12px;
  padding-top: 7px;
  display: flex;
`;

export const InputSkillsGroup = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputSkillsTotal = styled.input`
  width: 75%;
  height: 20px;
  border: 2px solid;
  position: relative;
  border-radius: 5px;
  // left: ${(props) => props.left};
  // right: ${(props) => props.right};
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
`;
