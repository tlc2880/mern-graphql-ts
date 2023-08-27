export type ProjectType = {
  id: number;
  name: string;
  status: string;
  description: string;
};

export type ProjectProps = {
  project: ProjectType;
};