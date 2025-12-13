import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import commonTasksReducer from "./commonTasksReducer";
import currentUserReducer from "./currentUserReducer";
import tasksReducer from "./tasksReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  currentUser: currentUserReducer,
  commonTasks: commonTasksReducer,
  tasks: tasksReducer,
});

export default rootReducer;
