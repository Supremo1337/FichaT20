import styled from "styled-components";

export const Content = styled.div`
  width: 49%;
  height: 190px;
  display: flex;
`;

export const GroupDates = styled.div`
  width: 100%;
  height: auto;
  border: 2px solid;
  border-radius: 10px;
  padding-left: 30px;
  box-sizing: border-box;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 6vh 6vh 6vh;
`;

export const Group = styled.div`
  width: 100%;
  height: auto;
  // background: green;
  flex-direction: row;
`;

export const BoxPerso = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
`;
export const Text = styled.label`
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  background: #fff;
  position: relative;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

export const NamePerso = styled.input`
  width: 90%;
  height: 40px;
  background: #fff;
  border: 2px solid black;
`;

export const Logo = styled.div`
  width: 38%;
  height: 60px;
  //   background: red;
`;
