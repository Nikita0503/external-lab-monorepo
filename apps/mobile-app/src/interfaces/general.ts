export interface IFile {
  id: number;
  taskId?: number;
  image: string;
}

export interface INewFile {
  name: string;
  type: string;
  uri: string;
}
