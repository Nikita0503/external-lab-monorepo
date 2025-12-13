import {
  deleteCurrentUserAvatarApi,
  fetchCurrentUserApi,
  updateCurrentUserApi,
} from "@external-lab-monorepo/api";
import {
  IFetchCurrentUserAsyncAction,
  ISetCurrentUserAction,
  ISetError,
  ISetLoadingAction,
  IUpdateCurrentUserAsyncAction,
} from "../interfaces/actions/currentUserActions";

import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const setCurrentUserAction = createAction<ISetCurrentUserAction>(
  "currentUser/setCurrentUserAction"
);

export const setErrorAction = createAction<ISetError>(
  "currentUser/setErrorAction"
);

export const setLoadingAction = createAction<ISetLoadingAction>(
  "currentUser/setLoadingAction"
);

export const fetchCurrentUserAsyncAction = createAsyncThunk<
  void,
  IFetchCurrentUserAsyncAction
>(
  "currentUser/fetchCurrentUserAsyncAction",
  async ({ onSuccess, onError }, { dispatch }) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await fetchCurrentUserApi();
      const currentUser = res.data;
      dispatch(setCurrentUserAction({ currentUser: currentUser }));
      dispatch(setErrorAction({ error: undefined }));
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      dispatch(setErrorAction({ error: e }));
      console.log(
        "🔴 currentUserActions::fetchCurrentUserAsyncAction error:",
        e
      );
      if (onError) {
        onError(e);
      }
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);

export const updateCurrentUserAsyncAction = createAsyncThunk<
  void,
  IUpdateCurrentUserAsyncAction
>(
  "currentUser/updateCurrentUserAsyncAction",
  async (
    { name, avatar, onSuccess, onError }: IUpdateCurrentUserAsyncAction,
    { dispatch }
  ) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      let newAvatar: any;
      if (avatar === undefined) {
        await deleteCurrentUserAvatarApi();
      } else if (
        avatar !== null &&
        typeof avatar !== "string" &&
        "type" in avatar &&
        "uri" in avatar
      ) {
        newAvatar = avatar;
      }
      const res = await updateCurrentUserApi(name, newAvatar);
      console.log("Updated User: ", res);
      dispatch(fetchCurrentUserAsyncAction({}));
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log(
        "🔴 currentUserActions::updateCurrentUserAsyncAction error:",
        e
      );
      if (onError) {
        onError(e);
      }
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);
