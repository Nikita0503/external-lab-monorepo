import { actions, AppDispatch, RootState } from "@external-lab-monorepo/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();

  const accessToken = useSelector<RootState, string | undefined>(
    (state: RootState) => state.auth.accessToken
  );

  const loading = useSelector<RootState, boolean>(
    (state: RootState) => state.auth.loading
  );

  const signIn = React.useCallback(
    (
      email: string,
      password: string,
      onSuccess?: () => void,
      onError?: (error: any) => void
    ) => {
      dispatch(
        actions.auth.signInAsyncAction({
          email: email,
          password: password,
          onSuccess: onSuccess,
          onError: onError,
        })
      );
    },
    []
  );

  const signUp = React.useCallback(
    (
      email: string,
      name: string,
      password: string,
      repeatPassword: string,
      avatar: any,
      onSuccess?: () => void,
      onError?: (error: any) => void
    ) => {
      dispatch(
        actions.auth.signUpAsyncAction({
          email: email,
          name: name,
          password: password,
          repeatPassword: repeatPassword,
          avatar: avatar,
          onSuccess: onSuccess,
          onError: onError,
        })
      );
    },
    []
  );

  return {
    accessToken,
    loading,
    signIn,
    signUp,
  };
};
