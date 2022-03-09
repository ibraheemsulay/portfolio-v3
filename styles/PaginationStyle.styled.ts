import styled from "styled-components";
import { Container } from "./Container.styled";

export const PaginationStyle = styled(Container)`

    margin-top: 40px;
    display: flex;
    justify-content: center;
    font-size: 1rem;

    button {
    margin-right: 10px;
    margin-left: 10px;
      border: none;
      outline: none;
      background: none;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.2s ease-in;

      &:hover {
        color: rgba(128, 128, 128, 0.733);
      }

      &:disabled {
        color: rgba(128, 128, 128, 0.253);
        cursor: not-allowed;
      }
    }

    span {
      border: 2px solid black;
      border-radius: 5px;
      padding: 0.2rem 0.6rem;
    }
  }
`;
