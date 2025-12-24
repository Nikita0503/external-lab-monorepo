import { configureStore } from "@reduxjs/toolkit";
import * as actions from "./actions";
import rootReducer from "./reducers";
import * as selectors from "./selectors";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { actions, selectors };
export default store;
