import styled from "styled-components";
import { IStyle } from "../ts-types/styleTypes";

export const Row = styled.div<IStyle>`
  display: flex;
  padding: 0 -15px;
  overflow-x: hidden;
  width: 100%;
`;
