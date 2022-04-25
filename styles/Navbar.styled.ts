import styled from "styled-components";
import { INavbarStyle } from "../ts-types/styleTypes";

export const Navbar = styled.nav<INavbarStyle>`
  display: flex;
  position: relative;
  overflow: initial !important;
  flex: 0 0;
  flex-direction: row;
  background: ${({ theme, darkMode }) =>
    darkMode ? theme.theme2.navBgCol : theme.theme1.navBgCol};
  color: ${({ theme, darkMode }) =>
    darkMode ? theme.theme2.navTextCol : theme.theme1.navTextCol};
  justify-content: space-between;
  padding: 1rem 0;
  overflow: hidden;
  transition: all 0.3s ease-in;

  .logo {
    margin: 0;
    z-index: 2;

    svg {
      height: 40px;
    }
  }

  section {
    position: absolute;
    z-index: 1;
    top: 100%;
    width: 100%;
    padding-bottom: 1rem;
    background: ${({ theme, darkMode }) =>
      darkMode ? theme.theme2.navBgCol : theme.theme1.navBgCol};
    border-radius: 0 0 20px 0;
    ul {
      list-style-type: none;
      padding-inline-start: 0;
      li {
        display: flex;
        justify-content: center;
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
            font-size: inherit;
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
            font-size: inherit;
            transition: all 0.3s ease-in;
          }
        }
        svg {
          height: auto;
          width: 25px;
          fill: hsla(207, 69%, 97%, 0.488);
          transition: all 0.3s ease-in;
        }
      }
    }
    ul:nth-of-type(2) {
      display: flex;
      margin-bottom: 20px;
      justify-content: center;
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
  }

  .hamburger {
    background: transparent;
    margin: 0 1rem;
    outline: none;
    border: none;
    align-self: center;

    span {
      display: block;
      width: 30px;
      height: 3px;
      margin-top: 7px;
      background: ${({ theme }) => theme.theme1.navHoverCol};
      transition: all 0.2s ease-in;
    }

    .first {
      margin-top: 0;
    }

    &:hover {
      padding-right: 0.1rem;
      .first {
        width: 42.4px;
        transform: rotateZ(45deg) translate(10%, 300%);
      }
      .second {
        opacity: 0;
        background: red;
      }
      .third {
        width: 42.4px;
        transform: rotateZ(-45deg) translate(10%, -300%);
      }
    }
  }

  @media (min-width: 576px) {
    position: fixed;
    height: 100vh;
    max-height: 100vh;
    flex-direction: column;
    flex-basis: ${({ toggle }) => (toggle ? "100px" : "50px")};

    .logo {
      svg {
        height: 50px;
      }
    }

    .list {
      flex-grow: 1;
      display: flex;
      position: static;
      flex-direction: column;

      padding: 20vh 0 0;

      justify-content: space-between;

      li {
        display: block;
        a,
        button {
          span {
            font-size: ${({ toggle }) => (toggle ? "inherit" : "0")};
          }
        }

        svg {
          width: ${({ toggle }) => (toggle ? "15px" : "25px")};
          min-width: ${({ toggle }) => (toggle ? "15px" : "25px")};
        }
      }

      ul:nth-of-type(2) {
        display: block;
      }
    }

    .hamburger {
      display: none;
    }
  }
`;
