export interface IProps {
  signIn: (
    email: string,
    password: string,
    onSuccess?: () => void,
    onError?: (error: any) => void,
  ) => void;
}
