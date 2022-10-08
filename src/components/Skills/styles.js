import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 955px;
  border: 2px solid;
  border-radius: 10px;
  margin-left: 10px;
  padding: 10px;
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
  height: 100%;
  font-size: ${(props) => props.fontSize};
  padding-top: ${(props) => props.paddingTop};
  display: flex;
  margin-left: ${(props) => props.marginLeft};
  position: relative;
  left: ${(props) => props.left};
  background: green;
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
`;

export const NameSkills = styled.label`
  font-size: 10px;
  padding-top: 7px;
  display: flex;
  text-align: top;
`;

export const InputSkillsGroup = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputSkillsTotal = styled.input`
  width: 25px;
  height: 15px;
  border: 2px solid;
  position: relative;
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
`;
