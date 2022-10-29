import styled from "styled-components";

export const Title = styled.label`
  font-size: 16px;
  font-weight: bold;
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
`;

export const Option = styled.option``;

export const TextTitle = styled.label`
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  position: relative;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;
