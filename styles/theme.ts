const defaultTheme = {
  theme1: {
    navTextCol: "hsla(207, 69%, 97%, 0.488)",
    navHoverCol: " hsla(207, 69%, 97%, 0.888)",
    navBgCol: "hsla(232, 72%, 22%, 0.859)",
    bgCol: "hsla(207, 56%, 91%, 0.5)",
    textCol: "hsla(232, 72%, 22%, 0.859)",
    aboutBgCol: "hsla(210, 83%, 98%, 1)",
    lineCol: "hsla(230, 17%, 67%, 1)",
  },
  theme2: {
    navTextCol: "#E4F0FF",
    navHoverCol: " hsla(207, 69%, 97%, 0.888)",
    navBgCol: "rgba(211, 211, 211, 0.8)",
    bgCol: "rgba(52, 53, 52, 1)",
    textCol: "rgba(211, 211, 211, 0.8)",
    aboutBgCol: "#2C344A",
    lineCol: "hsla(230, 17%, 67%, 0.8)",
  },
};

export type ThemeType = typeof defaultTheme;
export default defaultTheme;
