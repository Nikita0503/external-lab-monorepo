export interface IProps {
  error: any;
  loading: boolean;
  createTask: (
    title: string,
    description: string,
    files: any[],
    onSuccess?: () => void,
    onError?: (error: any) => void,
  ) => void;
}
