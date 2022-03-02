import styled from "styled-components";
import { HeroStyle } from "./Hero.styled";
import { IStyle } from "../ts-types/styleTypes";

export const AboutStyle = styled(HeroStyle)<IStyle>`
  position: relative;
  width: 100%;
  margin-top: 200px;
  overflow-x: clip;
  background: ${({ theme }) => theme.theme1.aboutBgCol};

  @media (min-width: 768px) {
    margin-top: 200px;
  }

  @media (min-width: 1240px) {
    margin-top: 100px;
  }

  section {
    z-index: 1;
    padding-right: 15px;
    padding-left: 15px;
    margin-top: 0;
  }
  div {
    z-index: 1;
    h3 {
      text-align: center;
      margin: auto;
    }
  }
  div.title {
    align-items: flex-start;
    padding: 0 15px 0 15px;
    display: flex;
    align-self: stretch;
    flex-direction: column;

    @media (min-width: 768px) {
      padding: 50px;
    }

    @media (min-width: 1024px) {
      padding: 100px 150px 50px 50px;
    }
  }
  svg {
    position: absolute;
    width: 120%;
    height: 100%;
    top: -20%;
    left: -10%;
    color: ${({ theme }) => theme.theme1.aboutBgCol};
  }
`;
