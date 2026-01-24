export interface IFile {
  id: number;
  taskId?: number;
  name: string;
}

export interface INewFile {
  name: string;
  type: string;
  uri: string;
}
