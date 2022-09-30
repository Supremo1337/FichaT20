import Characterdata from "../src/components/Characterdata";
import Attribute from "../src/components/Attribute";
import styled from "styled-components";
import Lifeandmane from "../src/components/LifeAndMane";
import Skills from "../src/components/Skills";

const Global = styled.div`
  width: 100%;
  height: 900px;
  background: green;
  display: flex;
`;

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
