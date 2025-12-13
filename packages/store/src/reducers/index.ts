import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import commonTasksReducer from "./commonTasksReducer";
import currentUserReducer from "./currentUserReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  currentUser: currentUserReducer,
  commonTasks: commonTasksReducer,
});

export default rootReducer;
