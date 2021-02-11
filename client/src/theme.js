import { useMemo } from 'react';
import { createMuiTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export function useTheme() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',

          primary: {
            main: '#E63850',
          },

          background: {
            default: prefersDarkMode ? '#000' : '#fafafa',
            paper: prefersDarkMode ? '#1C1C1E' : '#fff',
          },
        },
      }),
    [prefersDarkMode]
  );
}
