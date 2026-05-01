import { NavLink, Outlet } from "react-router-dom";
import { ROUTES } from "../router/routes";
import "./AppLayout.css";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <nav className="app-nav">
        <NavLink to={ROUTES.TASKS} end className="app-nav-link">
          Tasks
        </NavLink>
        <NavLink to={ROUTES.PROFILE} className="app-nav-link">
          Profile
        </NavLink>
        <NavLink to={ROUTES.COMMON_TASKS} className="app-nav-link">
          Common Tasks
        </NavLink>
      </nav>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
