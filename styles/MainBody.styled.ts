import styled from "styled-components";
import { IStyle } from "../ts-types/styleTypes";

export const MainBodyStyle = styled.main<IStyle>`
  margin-left: 50px;
  background: ${({ theme }) => theme.theme1.bgCol};
  color: hsl(233, 71%, 22%);
  flex: 1 1;
  overflow-y: scroll;
`;
