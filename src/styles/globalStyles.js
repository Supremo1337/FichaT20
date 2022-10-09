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
    box-sizing: border-box;
  }
  .css-8je8zh-MuiTouchRipple-root {
    position: relative;
  }
  `;
