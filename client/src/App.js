import React from 'react';
import { GlobalStyle } from './global';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useTheme } from './theme';
import { Button, Grid, TextField } from '@material-ui/core';

export const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CssBaseline />

      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        spacing={5}
      >
        <Grid item>
          <h1>Hello, World!</h1>
        </Grid>
        <Grid item>
          <Button variant='contained' color='primary'>
            Button #1
          </Button>
        </Grid>
        <Grid item>
          <Button variant='outlined' color='primary'>
            Button #2
          </Button>
        </Grid>
        <Grid item>
          <TextField id='outlined-basic' label='Email' variant='outlined' />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
