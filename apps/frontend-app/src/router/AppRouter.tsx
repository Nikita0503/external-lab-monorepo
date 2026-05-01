import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import AuthLayout from "../layouts/AuthLayout";
import AddTaskPage from "../pages/app/add-task/AddTaskPage";
import CommonTasksPage from "../pages/app/common-tasks/CommonTasksPage";
import EditTaskPage from "../pages/app/edit-task/EditTaskPage";
import ProfilePage from "../pages/app/profile/ProfilePage";
import TaskDetailsPage from "../pages/app/task-details/TaskDetailsPage";
import TasksPage from "../pages/app/tasks/TasksPage";
import SignInPage from "../pages/auth/sign-in/SignInPage";
import SignUpPage from "../pages/auth/sign-up/SignUpPage";
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
            <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
          </Route>
        </Route>

        {/* App routes — only for authenticated */}
        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route path={ROUTES.TASKS} element={<TasksPage />} />
            <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
            <Route path={ROUTES.COMMON_TASKS} element={<CommonTasksPage />} />
            <Route path={ROUTES.TASK_DETAILS} element={<TaskDetailsPage />} />
            <Route path={ROUTES.ADD_TASK} element={<AddTaskPage />} />
            <Route path={ROUTES.EDIT_TASK} element={<EditTaskPage />} />
          </Route>
        </Route>

        {/* Fallback */}
        <Route path="/stub" element={<StubPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
