import Characterdata from "../src/components/Characterdata";
import Attribute from "../src/components/Attribute";
import styled from "styled-components";
import Lifeandmane from "../src/components/LifeAndMane";
import Skills from "../src/components/Skills";
// import FontStyles from "../src/fonts/fontStyles";

const Global = styled.div`
  width: 100%;
  height: 900px;
  background: gray;
  display: flex;
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
      <Global>
        <Characterdata />
        <Attribute />
        <Lifeandmane></Lifeandmane>
        <Skills></Skills>
      </Global>
    </>
  );
}
