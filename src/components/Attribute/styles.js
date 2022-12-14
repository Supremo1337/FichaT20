import styled from "styled-components";

export const Content = styled.div`
  width: 280px;
  height: 100%;
  border: 2px solid;
  border-radius: 10px;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  gap: 10px 0;
  @media (min-width: 1024px) {
    width: 100%;
    grid-column: 3/4;
    grid-row: 1/2;
  }
  @media (min-width: 1366px) {
    grid-column: 4/5;
    grid-row: 1/2;
    width: 100%;
  }
`;

export const Box = styled.div`
  width: 60px;
  height: 70px;
  // background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid;
  align-items: center;
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
`;

export const AttributeTitle = styled.label`
  width: 100%;
  font-size: 1.6rem;
  font-weight: bold;
  border: 1px solid;
  border-left: none;
  border-top: none;
  border-right: none;
  text-align: center;
`;

export const AttributeInput = styled.input`
  width: 35px;
  height: 30px;
  border-radius: 50%;
  text-align: center;
  border: 2px solid;
  position: relative;
  top: 12px;
  font-size: 1.6rem;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ModNumber = styled.label`
  font-size: 1.6rem;
`;
