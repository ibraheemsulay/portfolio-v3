import styled from "styled-components";
import { IStyle } from "../ts-types/styleTypes";

export default styled.section<IStyle>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 100px;
  overflow-x: clip;
  background: hsla(210, 83%, 98%, 1);
  margin-bottom: -20px;

  @media (min-width: 768px) {
    padding-top: 50px;
  }

  h3 {
    margin: auto;
    text-align: center;
    z-index: 1;
  }

  div {
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .icon {
    flex-direction: column;
    flex-basis: 150px;
    text-align: center;
    justify-content: space-between;
    z-index: 1;

    @media (min-width: 500px) {
      flex-basis: 200px;
    }

    @media (min-width: 500px) {
      flex-basis: 200px;
    }
    @media (min-width: 850px) {
      flex-basis: 25%;
    }

    h5 {
      margin: auto;
      margin-top: 5px;
    }

    svg {
      width: 50px;
      height: auto;
    }
  }

  .background-img {
    position: absolute;
    width: 120%;
    height: 100%;
    bottom: -13%;
    left: -10%;
    color: ${({ theme }) => theme.theme1.aboutBgCol};
    transform: rotateX(180deg);
    transform: rotateZ(180deg);

    @media (min-width: 768px) {
      bottom: -20%;
    }
  }
`;
