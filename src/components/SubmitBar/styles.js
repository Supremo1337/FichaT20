import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
`;

export const ButtonSubmit = styled.input`
  width: 100%;
  height: 40px;
  background: #ff7215;
  border-radius: 10px;
  border: none;
  font-size: 2rem;
  cursor: pointer;

`;
