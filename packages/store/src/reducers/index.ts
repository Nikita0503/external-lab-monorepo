import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import currentUserReducer from "./currentUserReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  currentUser: currentUserReducer,
});

export default rootReducer;
