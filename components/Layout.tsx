import { LayoutStyle } from "../styles/LayoutStyle.styled";
import Nav from "./Navbar";
import { ILayout } from "../ts-types/componentTypes";
import Head from "next/head";
import { useContext } from "react";
import { Context } from "../assets/Context";

const Layout: React.FC<ILayout> = ({ children }) => {
  const { darkmode, toggleDarkmode } = useContext(Context);
  return (
    <>
      <Head>
        <title>Ibrahim Sule Portfolio</title>
        <meta name="description" content="Frontend Developer Portfolio" />
        <meta
          name="keywords"
          content="frontend, front-end, Front-End, developer, ibrahim, ibraheem, ibraheemsulay, ibraheem sule, ibrahim sule, nextjs, next, vue, nuxt"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutStyle darkMode={darkmode}>
        <button className="darkmode" onClick={() => toggleDarkmode()}>
          <span className="light">Light</span>
          <span className="dark">Dark</span>
        </button>
        <Nav />
        <div>{children}</div>
      </LayoutStyle>
    </>
  );
};

export default Layout;
