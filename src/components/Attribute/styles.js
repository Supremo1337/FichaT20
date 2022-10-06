import styled from "styled-components";

export const Content = styled.div`
  width: 20%;
  height: 190px;
  border: 2px solid black;
  border-radius: 10px;
  margin-left: 10px;
  padding: 10px;
`;

export const BoxRow = styled.div`
  width: 100%;
  height: 100%;
  background: red;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
`;

export const Box = styled.div`
  width: 60px;
  height: 70px;
  //   background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid black;
`;

export const AttributeTitle = styled.label`
  font-size: 16px;
  font-weight: bold;
  border: 1px solid black;
  border-left: none;
  border-top: none;
  border-right: none;
  text-align: center;
`;

export const AttributeInput = styled.input`
  width: 35px;
  height: 30px;
  margin-left: 11px;
  background: #fff;
  border-radius: 50%;
  text-align: center;
  border: 2px solid black;
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

export const ModNumber = styled.label`
  width: 35px;
  margin-left: 25px;
`;
