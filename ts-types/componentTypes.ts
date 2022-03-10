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
  children?: ReactElement;
}

export interface IAllProjectsProps extends ILayout {
  projects: IProject[];
}

export interface IIndexPageProps extends ILayout {
  projects: IProject[];
  about: any;
}

export interface IPaginationProps {
  number: number;
  numOfPages: number;
  setNumber: Dispatch<SetStateAction<number>>;
}

export interface IAboutProps extends ILayout {
  about: IAbout[];
}
