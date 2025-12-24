import { actions, AppDispatch, RootState } from "@external-lab-monorepo/store";
import { User } from "@external-lab-monorepo/types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const useCurrentUser = () => {
  const dispatch = useDispatch<AppDispatch>();

  const currentUser = useSelector<RootState, User | undefined>(
    (state: RootState) => state.currentUser.currentUser
  );

  const error = useSelector<RootState, any>(
    (state: RootState) => state.currentUser.error
  );

  const loading = useSelector<RootState, boolean>(
    (state: RootState) => state.currentUser.loading
  );

  const fetchCurrentUser = React.useCallback(
    async (onSuccess: () => void, onError?: (error: any) => void) => {
      dispatch(
        actions.currentUser.fetchCurrentUserAsyncAction({
          onSuccess: onSuccess,
          onError: onError,
        })
      );
    },
    []
  );

  const updateCurrentUser = React.useCallback(
    async (
      name: string,
      avatar: any,
      onSuccess: () => void,
      onError?: (error: any) => void
    ) => {
      dispatch(
        actions.currentUser.updateCurrentUserAsyncAction({
          name: name,
          avatar: avatar,
          onSuccess: onSuccess,
          onError: onError,
        })
      );
    },
    []
  );

  return {
    currentUser,
    error,
    loading,
    fetchCurrentUser,
    updateCurrentUser,
  };
};
