import React, { useState } from 'react';
import { GlobalStyle } from './global';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useTheme } from './theme';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/routing/Routes';
import Navbar from './components/layout/Navbar';

export const App = () => {
  const theme = useTheme();
  const [user, setUser] = useState(null);

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
