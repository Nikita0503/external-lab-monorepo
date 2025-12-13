import { loginApi, registrationApi } from "@external-lab-monorepo/api";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  ISetAccessTokenAction,
  ISetLoadingAction,
  ISignInAsyncAction,
  ISignUpAsyncAction,
} from "../interfaces/actions/authActions";

export const setAccessTokenAction = createAction<ISetAccessTokenAction>(
  "auth/setAccessTokenAction"
);

export const setLoadingAction = createAction<ISetLoadingAction>(
  "auth/setLoadingAction"
);

export const signInAsyncAction = createAsyncThunk<void, ISignInAsyncAction>(
  "auth/signInAsyncAction",
  async (
    { email, password, onSuccess, onError }: ISignInAsyncAction,
    { dispatch }
  ) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await loginApi(email.toLowerCase(), password);
      if (res.data.access_token) {
        dispatch(setAccessTokenAction({ accessToken: res.data.access_token }));
      }
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log("🔴 authActions::signInAsyncAction error:", e);
      if (onError) {
        onError(e);
      }
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);

export const signUpAsyncAction = createAsyncThunk<void, ISignUpAsyncAction>(
  "auth/signUpAsyncAction",
  async (
    {
      email,
      name,
      password,
      repeatPassword,
      avatar,
      onSuccess,
      onError,
    }: ISignUpAsyncAction,
    { dispatch }
  ) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      if (password !== repeatPassword) {
        return;
      }
      const res = await registrationApi(
        email.toLowerCase(),
        name,
        password,
        avatar
      );
      if (res.data.access_token) {
        dispatch(setAccessTokenAction({ accessToken: res.data.access_token }));
      }
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log("🔴 authActions::signUpAsyncAction error:", e);
      if (onError) {
        onError(e);
      }
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);
