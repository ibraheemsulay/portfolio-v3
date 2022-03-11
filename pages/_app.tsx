import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/Global.styled";
import Layout from "../components/Layout";
import { Context } from "../assets/Context";
import { useState } from "react";

interface CustomAppProps extends AppProps {}

const MyApp: React.FC<CustomAppProps> = ({ Component, pageProps }) => {
  const [darkmode, setDarkmode] = useState(false);

  const toggleDarkmode = () => setDarkmode(val => !val);
  return (
    <ThemeProvider theme={theme}>
      <Context.Provider value={{ darkmode, toggleDarkmode }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyle darkMode={darkmode} />
      </Context.Provider>
    </ThemeProvider>
  );
};

export default MyApp;
