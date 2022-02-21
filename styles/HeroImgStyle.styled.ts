import styled from "styled-components";

export const HeroImgStyle = styled.div`
  flex-basis: 100%;
  aspect-ratio: 7/6;

  @media (min-width: 576px) {
    flex-basis: 70%;
    margin: auto;
  }
  @media (min-width: 768px) {
    flex-basis: 50%;
    padding: 30px;
  }

  @media (min-width: 1340px) {
    padding: 150px;
  }

  div {
    padding-top: 100%;
    border-radius: 100%;
    background: ${({ theme }) => theme.theme1.navBgCol};
    position: relative;
    width: 100%;

    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.6;
      object-fit: contain;
      filter: grayscale(100%);
      background: white;
    }
  }
`;
