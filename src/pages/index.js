import CharacterData from "../components/CharacterData";
import Top from "../components/Top";
import Attribute from "../components/Attribute";
import styled from "styled-components";
import Lifeandmane from "../components/LifeAndMane";
import Skills from "../components/Skills";
import Attack from "../components/Attack";
import DefenseMultipliers from "../components/DefenseMultipliers";
import Notes from "../components/Notes";
import Invetory from "../components/Inventory";
// import FontStyles from "../fonts/fontStyles";

const Global = styled.div`
  width: 100%;
  height: 1485px;
  background: gray;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const GlobalRow = styled.div`
  width: 77%;
  height: 960px;
  background: darkgray;
  display: flex;
  flex-direction: column;
`;

const RowGroup = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-bottom: 10px;
  // background: purple;
`;

const GlobalColumn = styled.div`
  width: 23%;
  height: 960px;
  display: flex;
  background: purple;
`;

// ReactDOM.render(
//   <React.StrictMode>
//     <FontStyles />
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

export default function Home() {
  return (
    <>
      {/* <Top /> */}
      <Global>
        <GlobalRow>
          <RowGroup>
            <CharacterData />
            <Lifeandmane />
            <Attribute />
          </RowGroup>
          <RowGroup>
            <Attack />
            <DefenseMultipliers />
          </RowGroup>
          <Notes />
        </GlobalRow>
        <GlobalColumn>
          <Skills></Skills>
        </GlobalColumn>
        <Invetory />
      </Global>
    </>
  );
}
