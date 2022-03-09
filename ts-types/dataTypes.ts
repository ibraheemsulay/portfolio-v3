export interface IProject {
  fields: {
    link: string;
    photo: string;
    summary: string;
    title: string;
    tool: string[];
  };
  metadata: {
    [key: string]: any;
  };
  sys: {
    id: string;
    [key: string]: any;
  };
}

export interface Paginate {
  arr: IProject[];
  pageSize: number;
  pageNumber: number;
}
