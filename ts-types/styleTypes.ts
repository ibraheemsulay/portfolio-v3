import { ThemeType } from "../styles/theme";

export interface IStyle {
  theme: ThemeType;
}

export interface IProjectsStyle extends IStyle {
  i?: number;
}

export interface INavbarStyle extends IStyle {
  toggle: boolean;
}
