import { LayoutStyle } from "../styles/LayoutStyle.styled";
import Nav from "./Navbar";
import { ILayout } from "../ts-types/componentTypes";
import Head from "next/head";
import { useContext } from "react";
import { Context } from "../assets/Context";

const Layout: React.FC<ILayout> = ({ children }) => {
  const { darkmode, toggleDarkmode } = useContext(Context);
  return (
    <LayoutStyle darkMode={darkmode}>
      <button className="darkmode" onClick={() => toggleDarkmode()}>
        <span className="light">Light</span>
        <span className="dark">Dark</span>
      </button>
      <Nav />
      <div>{children}</div>
    </LayoutStyle>
  );
};

export default Layout;
