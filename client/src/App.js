import React from 'react';
import { GlobalStyle } from './global';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useTheme } from './theme';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/routing/Routes';

export const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CssBaseline />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
