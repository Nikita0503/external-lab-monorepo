import { SPRINTS } from "@external-lab-monorepo/constants";
import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import DevMenu from "../components/DevMenu/DevMenu";

type DevMenuContextType = {
  sprint: SPRINTS;
  setSprint: (sprint: SPRINTS) => void;
  showDevMenu: boolean;
  setShowDevMenu: (show: boolean) => void;
};

const DevMenuContext = createContext<DevMenuContextType | undefined>(undefined);

export const DevMenuProvider = ({ children }: { children: ReactNode }) => {
  const [showDevMenu, setShowDevMenu] = useState(false);
  const [sprint, setSprint] = useState<SPRINTS>(SPRINTS.SPRINT_4);

  return (
    <DevMenuContext.Provider
      value={{ sprint, setSprint, showDevMenu, setShowDevMenu }}
    >
      {children}
      <DevMenu />
    </DevMenuContext.Provider>
  );
};

export const useDevMenu = (): DevMenuContextType => {
  const context = useContext(DevMenuContext);
  if (!context) {
    throw new Error("useDevMenu must be used within a DevMenuProvider");
  }
  return context;
};
