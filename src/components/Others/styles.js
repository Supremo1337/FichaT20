import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 30vh;
  /* background: purple; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const Proficiency = styled.div`
  width: 100%;
  height: 15vh;
  /* background: red; */
  display: flex;
  flex-direction: column;
  border: 2px solid;
  border-radius: 10px;
  align-items: center;
`;

export const TextAreaProfieciency = styled.textarea`
  width: 100%;
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  resize: none;
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  outline: none;
  font-size: 1.6rem;
`;

export const Size = styled.div`
  width: 100%;
  height: 5vh;
  /* background: green; */
  display: flex;
  border: 2px solid;
  border-radius: 10px;
  padding: 10px;
`;

export const Select = styled.select`
  /* background: red; */
  grid-column: ${(props) =>props.gridColumn};
  grid-row: ${(props) =>props.gridRow};
  position: ${(props) =>props.position};
  top: ${(props) => props.top};
  font-size: 1.2rem;
`;

export const Numbers = styled.label`
  width: ${(props) => props.width};
  /* background: none; */
  border: 2px solid;
  border-radius: 10px;
  text-align: center;
  margin-left: 10px;
  font-size: 1.6rem;
`;

export const Displacement = styled.div`
  width: 100%;
  height: 5vh;
  /* background: blue; */
  display: flex;
  justify-content: space-between;
  border: 2px solid;
  border-radius: 10px;
  padding: 10px;
`;

export const Move = styled.input`
  width: ${(props) => props.width};
  /* background: none; */
  border: 2px solid;
  border-radius: 10px;
  text-align: center;
  margin-left: 10px;
  outline: none;
  font-size: 1.6rem;
`;
