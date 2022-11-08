import styled from "styled-components";
export const CheckboxContainer = styled.div``;
export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
 overflow: hidden;
   white-space: nowrap;width: 1px;
   height: 1px;
   margin: -1px;
   padding: 0;`;
export const Text = styled.label``;
export const StyledCheckbox = styled.label`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  margin-right: 6px;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
