export interface IProps {
  signUp: (
    email: string,
    name: string,
    password: string,
    repeatPassword: string,
    avatar: any,
    onSuccess?: () => void,
    onError?: (error: any) => void,
  ) => void;
}
