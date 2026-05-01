import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import AuthLayout from "../layouts/AuthLayout";
import AddTaskContainer from "../pages/app/add-task";
import CommonTasksContainer from "../pages/app/common-tasks";
import EditTaskContainer from "../pages/app/edit-task";
import ProfileContainer from "../pages/app/profile";
import TaskDetailsContainer from "../pages/app/task-details";
import TasksContainer from "../pages/app/tasks";
import SignInContainer from "../pages/auth/sign-in";
import SignUpContainer from "../pages/auth/sign-up";
import StubPage from "../pages/stubs/StubPage";
import GuestRoute from "./GuestRoute";
import ProtectedRoute from "./ProtectedRoute";
import { ROUTES } from "./routes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth routes — only for guests */}
        <Route element={<GuestRoute />}>
          <Route element={<AuthLayout />}>
            <Route path={ROUTES.SIGN_IN} element={<SignInContainer />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUpContainer />} />
          </Route>
        </Route>

        {/* App routes — only for authenticated */}
        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route path={ROUTES.TASKS} element={<TasksContainer />} />
            <Route path={ROUTES.PROFILE} element={<ProfileContainer />} />
            <Route path={ROUTES.COMMON_TASKS} element={<CommonTasksContainer />} />
            <Route path={ROUTES.TASK_DETAILS} element={<TaskDetailsContainer />} />
            <Route path={ROUTES.ADD_TASK} element={<AddTaskContainer />} />
            <Route path={ROUTES.EDIT_TASK} element={<EditTaskContainer />} />
          </Route>
        </Route>

        {/* Fallback */}
        <Route path="/stub" element={<StubPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
