import styled from "styled-components";

export const Content = styled.div`
  width: 25%;
  height: 900px;
  border: 2px solid black;
  border-radius: 10px;
  margin-left: 10px;
  padding: 10px;
`;

export const SkillsTitleandValue = styled.div`
  width: 100%;
  height: 30px;
  background: red;
  display: flex;
  justify-content: space-between;
`;

// Reaprovei a label "AttributeTitle" e "TextDiv"

export const SkillsText = styled.label`
  width: 40px;
  height: 30px;
  font-size: ${(props) => props.fontSize};
  background: purple;
`;

export const SkillsRow = styled.div`
  width: 100%;
  height: 30px;
  background: purple;
`;

// Reaprovei a label "SkillsText"
