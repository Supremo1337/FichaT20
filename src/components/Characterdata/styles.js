import styled from "styled-components";

export const Content = styled.div`
  width: 49%;
  height: 200px;
  border: 2px solid;
  border-radius: 10px;
  display: flex;
  /* grid-template-columns: 1.3fr 1fr 0.4fr;
  grid-template-rows: 6vh 6vh 6vh; */
  align-content: center;
  padding-left: 10px;
  padding-top: 10px;
  box-sizing: border-box;
`;

export const TextTitle = styled.label`
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  position: relative;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;
