import React, { useEffect } from 'react';
import { GlobalStyle } from './global';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useTheme } from './theme';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './config/Routes';
import Navbar from './components/layout/Navbar';

// State Management
import { useAuthDispatch } from './context';
import { loadUser } from './context';

export const App = () => {
  const theme = useTheme();
  const dispatch = useAuthDispatch();

  useEffect(() => {
    loadUser(dispatch);
  }, [dispatch]);

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CssBaseline />
        <Router>
          <Navbar />
          <Routes />
        </Router>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default App;
