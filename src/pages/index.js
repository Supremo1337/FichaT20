import Characterdata from "../components/Characterdata";
import Attribute from "../components/Attribute";
import styled from "styled-components";
import Lifeandmane from "../components/LifeAndMane";
import Skills from "../components/Skills";
// import FontStyles from "../fonts/fontStyles";

const Global = styled.div`
  width: 100%;
  height: 1200px;
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
