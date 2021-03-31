import React from 'react';
import { GlobalStyle } from './global';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useTheme } from './theme';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './config/Routes';
import Navbar from './components/layout/Navbar';
import { useAuthDispatch } from './context';
import { useGetCurrentUser } from './hooks';

export const App = () => {
  const theme = useTheme();
  const dispatch = useAuthDispatch();
  const { isSuccess } = useGetCurrentUser(dispatch);

  if (isSuccess) {
    console.log('User loaded');
  }

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
