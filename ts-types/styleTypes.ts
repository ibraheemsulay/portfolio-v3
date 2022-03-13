import { ThemeType } from "../styles/theme";

export interface IStyle {
  theme: ThemeType;
  darkMode?: boolean;
}

export interface IProjectsStyle extends IStyle {
  i?: number;
}

export interface INavbarStyle extends IStyle {
  toggle: boolean;
}

export type Event =
  | React.MouseEvent<HTMLAnchorElement, MouseEvent>
  | React.MouseEvent<HTMLButtonElement, MouseEvent>
  | React.MouseEvent<HTMLElement, MouseEvent>;
