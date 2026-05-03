import { SPRINTS } from "@external-lab-monorepo/constants";
import { NavLink, Outlet } from "react-router-dom";
import { useDevMenu } from "../contexts/DevMenuContext";
import StubPage from "../pages/stubs/StubPage";
import { ROUTES } from "../router/routes";
import "./AppLayout.css";

const AppLayout = () => {
  const { sprint } = useDevMenu();

  // Sprint 1: stub instead of entire app
  if (sprint === SPRINTS.SPRINT_1) {
    return <StubPage />;
  }

  return (
    <div className="app-layout">
      <nav className="app-nav">
        <NavLink to={ROUTES.TASKS} end className="app-nav-link">
          Tasks
        </NavLink>
        <NavLink to={ROUTES.PROFILE} className="app-nav-link">
          Profile
        </NavLink>
        {/* Sprint 1 & 2: no Common Tasks tab */}
        {sprint !== SPRINTS.SPRINT_2 && (
          <NavLink to={ROUTES.COMMON_TASKS} className="app-nav-link">
            Common Tasks
          </NavLink>
        )}
      </nav>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
