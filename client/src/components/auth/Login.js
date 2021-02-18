import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import {
  MainContainer,
  GridContainer,
  StyledPaper,
  StyledButton as Button,
  StyledLink as Link,
  StyledTextField as TextField,
  LinkText,
  H2,
  H5,
} from '../styled';

const Login = (props) => {
  return (
    <MainContainer $img>
      <GridContainer
        container
        containerdirection='row'
        justify='center'
        alignItems='center'
      >
        <form autoComplete='off'>
          <Grid
            container
            item
            direction='column-reverse'
            justify='center'
            alignItems='center'
          >
            <StyledPaper elevation={1} $md maxWidth='500px'>
              <H2 primary $mB>
                Log in
              </H2>
              <H5 secondary $mB>
                Enter your email and password.
              </H5>

              <TextField
                id='email'
                label='Email'
                variant='outlined'
                type='email'
                fullWidth={true}
                $mB
              />
              <TextField
                id='password'
                label='Password'
                variant='outlined'
                type='password'
                fullWidth={true}
                $mB
              />
              <Button
                variant='contained'
                color='primary'
                fullWidth={true}
                $mB
                $medium
              >
                Log in
              </Button>
              <Link to='/signup'>
                <LinkText>No account? Sign up instead.</LinkText>
              </Link>
            </StyledPaper>
          </Grid>
        </form>
      </GridContainer>
    </MainContainer>
  );
};

Login.propTypes = {};

export default Login;
