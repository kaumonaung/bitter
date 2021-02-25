import React from 'react';
import { Grid } from '@material-ui/core';
import { LoginForm } from './LoginForm';
import { useLoginUser } from '../../hooks';
import { Redirect } from 'react-router-dom';
import { Alert } from '../layout/Alert';
import {
  useAuthDispatch,
  useAuthState,
  LOGIN_SUCCESS,
  loadUser,
} from '../../context';
import {
  MainContainer,
  GridContainer,
  StyledPaper,
  StyledLink as Link,
  LinkText,
  H2,
  H5,
} from '../styled';

const Login = () => {
  const authState = useAuthState();
  const dispatch = useAuthDispatch();
  const { isAuthenticated } = authState;

  const { data, isError, isLoading, mutate, error, isSuccess } = useLoginUser();

  if (isSuccess) {
    console.log('Successfully logged in');
    dispatch({ type: LOGIN_SUCCESS, payload: { token: data } });
    loadUser(dispatch);
  }

  if (isAuthenticated) {
    return <Redirect to='/feed' push />;
  }

  return (
    <MainContainer $img>
      <GridContainer
        container
        containerdirection='row'
        justify='center'
        alignItems='center'
      >
        <Grid
          container
          item
          direction='column-reverse'
          justify='center'
          alignItems='center'
        >
          <StyledPaper elevation={1} $sm $maxWidth='500px'>
            {isError && <Alert type='error' msg={error} />}
            <H2 primary $mB>
              Log in
            </H2>
            <H5 secondary $mB>
              Enter your email and password.
            </H5>

            <LoginForm logInFunc={mutate} isLoading={isLoading} />

            <Link to='/signup'>
              <LinkText>No account? Sign up instead.</LinkText>
            </Link>
          </StyledPaper>
        </Grid>
      </GridContainer>
    </MainContainer>
  );
};

export default Login;
