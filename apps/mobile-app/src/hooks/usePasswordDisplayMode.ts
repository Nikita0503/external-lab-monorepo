import React from 'react';
import { PasswordDisplayMode } from '../constants/general';

const usePasswordDisplayMode = () => {
  const [passwordDisplayMode, setPasswordDisplayMode] =
    React.useState<PasswordDisplayMode>(PasswordDisplayMode.HIDDEN);

  const togglePasswordDisplayMode = React.useCallback(() => {
    setPasswordDisplayMode(prevMode =>
      prevMode === PasswordDisplayMode.HIDDEN
        ? PasswordDisplayMode.VISIBLE
        : PasswordDisplayMode.HIDDEN,
    );
  }, []);

  return {
    passwordDisplayMode,
    togglePasswordDisplayMode,
  };
};

export default usePasswordDisplayMode;
