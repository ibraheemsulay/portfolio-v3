import { ReactElement } from "react";
import { IProject, IAbout } from "./dataTypes";
import { Dispatch, SetStateAction } from "react";

export interface IProjectsProps {
  title: string;
  image: string;
  summary: string;
  tools: string;
  index: number;
  link: string;
}

export interface ILayout {
  children: ReactElement;
  darkMode?: boolean;
}

export interface IAllProjectsProps {
  projects: IProject[];
  darkMode?: boolean;
}

export interface IIndexPageProps {
  projects: IProject[];
  darkMode?: boolean;
  about: any;
  el: string;
  setEl: Dispatch<SetStateAction<string>>;
}

export interface IPaginationProps {
  number: number;
  numOfPages: number;
  setNumber: Dispatch<SetStateAction<number>>;
}

export interface IAboutProps {
  about: IAbout[];
  darkMode?: boolean;
}

export interface ISkillsProps {
  darkMode?: boolean;
}
export interface IHeroProps {
  darkMode?: boolean;
}

export interface INavProps {
  el: string;
  setEl: Dispatch<SetStateAction<string>>;
}
