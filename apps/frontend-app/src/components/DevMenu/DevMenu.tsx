import { SPRINTS } from "@external-lab-monorepo/constants";
import { useDevMenu } from "../../contexts/DevMenuContext";
import "./DevMenu.css";

const DevMenu = () => {
  const { sprint, setSprint, showDevMenu, setShowDevMenu } = useDevMenu();

  if (!showDevMenu) {
    return null;
  }

  return (
    <div className="devmenu-overlay">
      <div className="devmenu-container">
        <h3 className="devmenu-title">Dev Menu</h3>
        <p className="devmenu-subtitle">Selected Sprint: {sprint}</p>
        <button
          className="devmenu-button"
          onClick={() => setSprint(SPRINTS.SPRINT_1)}
        >
          Sprint 1
        </button>
        <button
          className="devmenu-button"
          onClick={() => setSprint(SPRINTS.SPRINT_2)}
        >
          Sprint 2
        </button>
        <button
          className="devmenu-button"
          onClick={() => setSprint(SPRINTS.SPRINT_3)}
        >
          Sprint 3
        </button>
        <button
          className="devmenu-button"
          onClick={() => setSprint(SPRINTS.SPRINT_4)}
        >
          Sprint 4
        </button>
        <button
          className="devmenu-button"
          onClick={() => setShowDevMenu(false)}
        >
          Hide Dev Menu
        </button>
      </div>
    </div>
  );
};

export default DevMenu;
