import styled from "styled-components";
import { HeroImgStyle } from "./HeroImgStyle.styled";

export const ProjectsImgStyle = styled(HeroImgStyle)`
  display: flex;
  align-items: center;
  padding-bottom: 0;
  margin-top: 0;
  flex-basis: 100%;
  margin-bottom: -50px;

  @media (min-width: 768px) {
    align-items: start;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 0;
    flex-basis: 50%;
  }

  ${
    "" /* @media (min-width: 1024px) {
    padding: 0 150px 0 0px;
  } */
  }

  div {
    border-radius: 10px;
    background: ${({ theme }) => theme.theme1.navBgCol};
    position: relative;
    overflow: hidden;
    padding-top: 50%;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 1;
      object-fit: cover;
      object-position: 0% 0%;
      filter: grayscale(0);
    }
  }
`;
