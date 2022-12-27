import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  border: 2px solid;
  border-radius: 10px;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  /* grid-column: 1/6; */
  /* grid-row: 4/5; */
  @media (min-width: 1024px) {
    height: 455px;
    grid-column: 1/4;
    grid-row: 6/7;
  }
  @media (min-width: 1366px) {
    grid-column: 1/6;
    grid-row: 4/5;
  }
`;

// Reaproveite o Title "EQUIPAMENTO"

export const Group = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* background-color: pink; */
  justify-content: center;
  justify-content: space-between;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

// Fiz um map

export const ItensBox = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  /* background: blue; */
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
`;

export const ColumnItens = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  display: flex;
  /* background-color: red; */
  justify-content: space-between;
  flex-direction: column;
`;

export const ItensTitle = styled.label`
  font-size: 14px;
  display: ${(props) => props.display};
  @media (min-width: 1024px) {
    display: block;
  }
`;

// Fiz um map
// Reaproveite o InputSkills

// Reaproveite o "ColumnItens"
// Reaproveite o "ItensTitle"
// Fiz um map
// Reaproveite o "InputSkills"

export const ThreeColumn = styled.div`
  width: 100%;
  height: 100%;
  // background: yellow;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

// Reaproveite o ItensBox
// Reaproveite o "ColumnItens"
// Reaproveite o "ItensTitle"
// Fiz um map
// Reaproveite o "InputSkills"

// Reaproveite o "ColumnItens"
// Reaproveite o "ItensTitle"
// Fiz um map
// Reaproveite o "InputSkills"

export const MoreContent = styled.div`
  width: 100%;
  height: 30%;
  /* background: pink; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  @media (min-width: 1024px) {
    height: 42%;
  }
`;
// Reaproveite o "ItensTitle"

export const LoadAndStrenght = styled.div`
  width: 100%;
  height: 50%;
  // background: orange;
  display: flex;
  justify-content: space-between;
`;

export const Info = styled.div`
  width: 32%;
  height: 100%;
  // background: green;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const InputsLoadGroup = styled.div`
  width: 100%;
  height: 50%;
  /* background: cyan; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Reaproveite o "InputSkills"
// Reaproveite o "ItensTitle"
// Reaproveite o "InputSkills"
// Reaproveite o "ItensTitle"

// Reaproveite o "Info"
// Reaproveite o "InputsLoadGrou"
// Reaproveite o "InputSkills"
// Reaproveite o "ItensTitle"

export const TSTO = styled.div`
  width: 32%;
  height: 100%;
  // background: magenta;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
// Fiz um map

export const Tibar = styled.div`
  width: 100%;
  height: 100%;
  // background: purple;
  display: flex;
  justify-content: space-between;
`;

// Reaproveite o Title
// Reaproveite o InputSkills
