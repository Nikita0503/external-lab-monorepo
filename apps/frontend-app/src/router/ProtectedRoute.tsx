import { useAuth } from "@external-lab-monorepo/hooks";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "./routes";

const ProtectedRoute = () => {
  const { accessToken } = useAuth();

  if (!accessToken) {
    return <Navigate to={ROUTES.SIGN_IN} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
