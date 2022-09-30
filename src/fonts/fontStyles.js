import { createGlobalStyle } from "styled-components";
import Tormenta from "../fonts/Tormenta.ttf";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Tormenta';
  src: url(${fonts/Tormenta.ttf}) formate('truetype');
  font-weight: normal;
  font-style: normal
}
`;

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Tormenta', Times;
}
`;

export default FontStyles;
