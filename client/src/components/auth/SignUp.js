import React from 'react';
import { SignUpForm } from './SignUpForm';
import { useRegisterUser } from '../../hooks';
import { Redirect } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { Alert } from '../layout/Alert';
import { useAuthDispatch, useAuthState } from '../../context';
import {
  MainContainer,
  GridContainer,
  StyledPaper,
  StyledLink as Link,
  LinkText,
  H2,
  H5,
} from '../styled';

const SignUp = () => {
  const authState = useAuthState();
  const dispatch = useAuthDispatch();
  const { isAuthenticated } = authState;

  const { isError, isLoading, mutate: signUpFunc, error } = useRegisterUser(
    dispatch
  );

  if (isAuthenticated) {
    return <Redirect to='/create-profile' push />;
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
              Sign Up
            </H2>
            <H5 secondary $mB>
              Register with your email.
            </H5>

            <SignUpForm signUpFunc={signUpFunc} isLoading={isLoading} />

            <Link to='/login'>
              <LinkText>Already have an account? Log in instead.</LinkText>
            </Link>
          </StyledPaper>
        </Grid>
      </GridContainer>
    </MainContainer>
  );
};

export default SignUp;
