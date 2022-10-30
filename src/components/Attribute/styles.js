import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 200px;
  border: 2px solid;
  border-radius: 10px;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-items: center;
  gap: 10px 0;
  grid-column: 4/5;
  grid-row: 1/2;
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
  font-size: 16px;
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
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ModNumber = styled.label``;
