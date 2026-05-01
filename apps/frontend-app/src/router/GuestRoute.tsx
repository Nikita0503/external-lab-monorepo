import { useAuth } from "@external-lab-monorepo/hooks";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "./routes";

const GuestRoute = () => {
  const { accessToken } = useAuth();

  if (accessToken) {
    return <Navigate to={ROUTES.TASKS} replace />;
  }

  return <Outlet />;
};

export default GuestRoute;
