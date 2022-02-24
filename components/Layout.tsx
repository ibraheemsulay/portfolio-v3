import { LayoutStyle } from "../styles/LayoutStyle.styled";
import Nav from "./Navbar";
import { ReactElement } from "react";
import Head from "next/head";

interface ILayout {
  children: ReactElement;
}

const Layout: React.FC<ILayout> = ({ children }) => {
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
      <LayoutStyle>
        <Nav />
        <div>{children}</div>
      </LayoutStyle>
    </>
  );
};

export default Layout;
