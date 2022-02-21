import styled from "styled-components";
import { Container } from "./Container.styled";

export const ContactStyles = styled(Container)`
  margin-top: 100px;

  @media (min-width: 576px) {
    margin-top: 150px;
  }

  h3 {
    width: max-content;
    margin: auto;
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 5px;
      background: green;
    }
  }

  footer {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 50px 0;

    div {
      width: 100%;

      @media (min-width: 768px) {
        width: 40%;
      }

      img {
        max-width: 100%;
        height: auto;
      }

      h4 {
        margin-top: 15px;
      }
    }
  }

  p {
    color: black;
    margin-top: 30px;
  }
  span {
    display: block;
    font-size: small;
    text-align: center;
    padding: 20px;
  }
`;
