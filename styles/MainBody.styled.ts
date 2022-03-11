import styled from "styled-components";
import { IStyle } from "../ts-types/styleTypes";

export const MainBodyStyle = styled.main<IStyle>`
  margin-left: 50px;
  background: ${({ theme, darkMode }) =>
    darkMode ? theme.theme2.bgCol : theme.theme1.bgCol};
  color: ${({ theme, darkMode }) =>
    darkMode ? theme.theme2.titleCol : theme.theme1.titleCol};
  flex: 1 1;
  overflow-y: scroll;
`;
