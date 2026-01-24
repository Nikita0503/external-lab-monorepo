export interface IProps {
  createTask: (
    title: string,
    description: string,
    files: any[],
    onSuccess?: () => void,
    onError?: (error: any) => void,
  ) => void;
}
