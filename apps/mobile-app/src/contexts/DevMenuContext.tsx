import { SPRINTS } from '@external-lab-monorepo/constants';
import React, { createContext, ReactNode, useContext, useState } from 'react';

type DevMenuContextType = {
  sprint: SPRINTS;
  setSprint: (sprint: SPRINTS) => void;
};

const DevMenuContext = createContext<DevMenuContextType | undefined>(undefined);

export const DevMenuProvider = ({ children }: { children: ReactNode }) => {
  const [sprint, setSprint] = useState<SPRINTS>(SPRINTS.SPRINT_1);
  return (
    <DevMenuContext.Provider value={{ sprint, setSprint }}>
      {children}
    </DevMenuContext.Provider>
  );
};

export const useDevMenu = (): DevMenuContextType => {
  const context = useContext(DevMenuContext);
  if (!context) {
    throw new Error('🔴 useDevMenu must be used within a DevMenuProvider');
  }
  return context;
};
