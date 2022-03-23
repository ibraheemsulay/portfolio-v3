import styled from "styled-components";
import { INavbarStyle } from "../ts-types/styleTypes";

export const Navbar = styled.nav<INavbarStyle>`
  display: flex;
  position: fixed;
  z-index: 2;
  flex: 0 0;
  flex-direction: column;
  flex-basis: ${({ toggle }) => (toggle ? "100px" : "50px")};
  background: ${({ theme, darkMode }) =>
    darkMode ? theme.theme2.navBgCol : theme.theme1.navBgCol};
  color: ${({ theme, darkMode }) =>
    darkMode ? theme.theme2.navTextCol : theme.theme1.navTextCol};
  height: 100vh;
  max-height: 100vh;
  justify-content: space-between;
  padding: 1rem 0;
  overflow: hidden;
  transition: all 0.3s ease-in;

  div {
    margin: 0 auto;
  }
  ul {
    list-style-type: none;
    padding-inline-start: 0;
    li {
      a {
        color: ${({ theme, darkMode }) =>
          darkMode ? theme.theme2.navTextCol : theme.theme1.navTextCol};
        text-decoration: none;
        display: flex;
        padding: 10px 5px;
        text-align: center;
        cursor: pointer;
        margin-left: 5px;
        margin-right: 5px;
        align-items: center;
        font-size: small;

        &:hover {
          color: ${({ theme }) => theme.theme1.navHoverCol};
        }

        span {
          margin-left: 5px;
          font-size: ${({ toggle }) => (toggle ? "inherit" : "0")};
          transition: all 0.3s ease-in;
        }
      }
      button {
        color: ${({ theme, darkMode }) =>
          darkMode ? theme.theme2.navTextCol : theme.theme1.navTextCol};
        text-decoration: none;
        display: flex;
        background: none;
        outline: none;
        border: none;
        padding: 10px 5px;
        text-align: center;
        cursor: pointer;
        margin-left: 5px;
        margin-right: 5px;
        align-items: center;
        font-size: small;

        &:hover {
          color: ${({ theme }) => theme.theme1.navHoverCol};
        }

        span {
          margin-left: 5px;
          font-size: ${({ toggle }) => (toggle ? "inherit" : "0")};
          transition: all 0.3s ease-in;
        }
      }
      svg {
        height: auto;
        width: ${({ toggle }) => (toggle ? "15px" : "25px")};
        min-width: ${({ toggle }) => (toggle ? "15px" : "25px")};
        fill: hsla(207, 69%, 97%, 0.488);
        transition: all 0.3s ease-in;
      }
    }
  }
  ul:last-child {
    li {
      a {
        justify-content: center;
        svg {
          height: 25px;
          width: 25px;
          min-width: 25px;
        }

        &:hover {
          background: transparent;

          svg {
            fill: ${({ theme }) => theme.theme1.navHoverCol};
          }
        }
      }
    }
  }
`;
