import { ReactElement } from "react";
import { IProject } from "./dataTypes";
import { Dispatch, SetStateAction } from "react";

export interface IProjectsProps {
  title: string;
  image: string;
  summary: string;
  tools: string;
  index: number;
}

export interface ILayout {
  children?: ReactElement;
}

export interface IAllProjectsProps extends ILayout {
  projects: IProject[];
}

export interface IIndexPageProps extends ILayout {
  projects: IProject[];
}

export interface IPaginationProps {
  number: number;
  numOfPages: number;
  setNumber: Dispatch<SetStateAction<number>>;
}
