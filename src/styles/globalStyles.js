import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  * {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border-color:${({ theme}) => theme.borderColor}; 
  }
  `;
