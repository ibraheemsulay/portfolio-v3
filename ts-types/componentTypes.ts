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

export interface IAllProjectsProps extends ILayout {
  projects: IProject[];
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

export interface IAboutProps extends ILayout {
  about: IAbout[];
}

export interface ISkillsProps extends ILayout {}
export interface IHeroProps extends ILayout {}

export interface INavProps {
  el: string;
  setEl: Dispatch<SetStateAction<string>>;
}
