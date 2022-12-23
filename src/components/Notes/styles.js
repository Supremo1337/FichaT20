import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  min-height: 376px;
  height: auto;
  display: flex;
  border: 2px solid;
  border-radius: 10px;
  padding: 10px;
  display: inline-block;
  outline: none;
  justify-content: space-between;
  grid-column: 1/5;
  grid-row: 3/4;
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 10%;
  height: auto;
  resize: vertical;
  overflow: hidden;
  outline: none;
  border: none;
  font-size: 1.6rem;
`;
