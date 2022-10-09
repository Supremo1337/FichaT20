import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 32vh;
  background: red;
  display: flex;
`;

export const Conditions = styled.div`
  width: 20%;
  height: 100%;
  background: green;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextAndInput = styled.div`
  width: ${(props) => props.width};
  height: auto;
  background: pink;
  display: flex;
  justify-content: space-between;
`;

export const TestResistance = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Table = styled.table`

`;
