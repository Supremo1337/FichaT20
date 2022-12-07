import styled from "styled-components";

export const Content = styled.form`
  width: 100%;
  height: 402px;
  border: 2px solid;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
  @media (min-width: 1024px) {
    width: 100%;
    height: 250px;
    display: grid;
    grid-template-columns: 1.3fr 1fr 0.4fr;
    grid-template-rows: 6vh 6vh 6vh;
    padding-left: 10px;
    padding-top: 10px;
    align-content: center;
  }
  /* @media (max-width: 1440px) {
    gap: 10px;
    height: 500px;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 890px) {
    gap: 10px;
  } */
`;
