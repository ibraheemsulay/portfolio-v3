const defaultTheme = {
  theme1: {
    navTextCol: "hsla(207, 69%, 97%, 0.488)",
    navHoverCol: " hsla(207, 69%, 97%, 0.888)",
    navBgCol: "hsla(232, 72%, 22%, 0.859)",
    bgCol: "hsla(207, 56%, 91%, 0.5)",
    textCol: "hsla(232, 72%, 22%, 0.859)",
    aboutBgCol: "hsla(210, 83%, 98%, 1);",
  },
};

export type ThemeType = typeof defaultTheme;
export default defaultTheme;
