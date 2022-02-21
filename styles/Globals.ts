import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

interface GlobalProps {
  theme: ThemeType;
}
const GlobalStyle = createGlobalStyle<GlobalProps>`
 *, *:before, *:after {
     box-sizing: border-box;
     margin: 0;
     padding: 0;
 }`;

export default GlobalStyle;
