import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  @media (min-width: 1024px) {
    grid-column: 1/6;
    grid-row: 6/7;
  }
`;

export const ButtonSubmit = styled.input`
  width: 100%;
  height: 40px;
  background: #ff7215;
  border-radius: 10px;
  border: none;
  font-size: 2rem;
  @media (min-width: 1024px) {
  }
`;
