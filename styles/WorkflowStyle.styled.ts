import styled from "styled-components";
import { IStyle } from "../ts-types/styleTypes";

export const WorkflowStyle = styled.section<IStyle>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  z-index: 111;
  padding: 0 15px;

  @media (min-width: 768px){
    margin-top: 150px;
      padding: 0 50px;
  }

  @media (min-width: 1024px){
      padding: 0 100px;
  }

  h3 {
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 5px;
      background: green;
    }
  }

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
    margin-top: 30px;

    & > div {
      margin-top: 30px;
      background: ${({ theme }) => theme.theme1.aboutBgCol}
      border-radius: 10px;
      box-shadow: 1px -1px 3px hsla(0, 0%, 0%, 0.363), -1px -1px 3px hsla(0, 0%, 0%, 0.063);
      border-bottom: 5px solid hsla(240, 100%, 50%, 0.308);
      padding: 2rem 1rem;
      padding-bottom: 2rem;
      width: 70%;

      @media (min-width: 576px){
          width: 40%;
      }

      @media (min-width: 1240px){
          width: 20%;
      }

      div {
        width: 60px;
        height: 60px;

        border-radius: 100%;
        text-align: center;

        svg {
          width: 60%;
          height: 60%;

          margin-top: 50%;
          transform: translateY(-50%);
        }
      }

      h4 {
        margin-top: 20px;
      }

      p {
        word-break: break-word;
        margin-top: 10px;
      }
    }

      .first-card {
        div {
            background: hsla(120, 95%, 15%, 0.229);
        }
        border-bottom: 5px solid hsla(120, 95%, 15%, 0.329);
      }  

      .second-card {
        div {
            background:hsla(60, 85%, 47%, 0.321); 
        }
        border-bottom: 5px solid hsla(60, 85%, 47%, 0.521); 
      }

      .third-card {
        div {
            background: hsla(0, 95%, 38%, 0.227);
        }
        border-bottom: 5px solid hsla(0, 95%, 38%, 0.227);
      }

    .fourth-card {
      div {
          background: hsla(240, 100%, 50%, 0.208);
      }
      border-bottom: 5px solid hsla(240, 100%, 50%, 0.308);
    }
  }
`;
