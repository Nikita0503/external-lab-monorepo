import { createAction } from "@reduxjs/toolkit";
import {
  ISetAccessTokenAction,
  ISetLoadingAction,
} from "../interfaces/actions/authActions";

export const setAccessTokenAction = createAction<ISetAccessTokenAction>(
  "auth/setAccessTokenAction"
);

export const setLoadingAction = createAction<ISetLoadingAction>(
  "auth/setLoadingAction"
);
