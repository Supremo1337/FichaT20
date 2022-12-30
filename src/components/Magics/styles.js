import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: auto;
  /* background: red; */
  display: flex;
  border: 2px solid;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  /* grid-column: 1/6;
  grid-row: 5/6; */
  padding: 5px 5px;
  @media (min-width: 1024px) {
    grid-column: 1/4;
    grid-row: 7/8;
    padding: 10px 10px;
  }
  @media (min-width: 1366px) {
    grid-column: 1/6;
    grid-row: 5/6;
  }
`;

export const Group = styled.div`
  width: 100%;
  height: auto;
  /* background: green; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 10px;
  @media (min-width: 1024px) {
    padding-bottom: 0;
  }
`;

export const ConditionAndInputsDiv = styled.div`
  width: 100%;
  height: 500px;
  /* background: purple; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1024px) {
    width: 100%;
    height: 280px;
    flex-direction: row;
  }
`;

export const Conditions = styled.div`
  width: 100%;
  height: 120px;
  /* background: blue; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid;
  border-radius: 10px;
  padding-left: 6px;
  @media (min-width: 1024px) {
    width: 30%;
    height: 50%;
  }
`;

export const TextAndInput = styled.div`
  max-width: 347px;
  width: ${(props) => props.width};
  height: auto;
  /* background: pink; */
  display: flex;
  justify-content: space-between;
  @media (min-width: 1024px) {
    width: ${(props) => props.widthDesktop};
  }
`;

export const TestResistance = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
`;

export const InputsDiv = styled.div`
  width: 100%;
  height: 350px;
  /* background: orange; */
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  @media (min-width: 1024px) {
    width: 68%;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    column-gap: 10px;
  }
`;

export const InputMagics = styled.input`
  height: 50%;
  border: 1px solid;
  border-radius: 5px;
  outline: 0;
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
  font-size: 1.6rem;
`;

export const Description = styled.div`
  height: 49%;
  border: 1px solid;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const ModalDiv = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputModal = styled.input`
  width: 100%;
  height: 5%;
  border: 1px solid;
  border-radius: 5px;
  outline: 0;
  font-size: 1.6rem;
`;
