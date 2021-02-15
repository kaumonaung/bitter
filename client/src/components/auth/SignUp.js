import React from 'react';
import PropTypes from 'prop-types';
import {
  MainContainer,
  GridContainer,
  StyledPaper,
} from '../styled/Containers';
import { StyledButton as Button, StyledLink as Link } from '../styled/Buttons';
import { StyledTextField as TextField } from '../styled/TextField';
import { Grid } from '@material-ui/core';
import { H2, H5, LinkText } from '../styled/Typography';

const SignUp = (props) => {
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
                Sign Up
              </H2>
              <H5 secondary $mB>
                Register with your email.
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
              <TextField
                id='repeat-password'
                label='Repeat Password'
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
                Sign Up
              </Button>
              <Link to='/login'>
                <LinkText>Already have an account? Log in instead.</LinkText>
              </Link>
            </StyledPaper>
          </Grid>
        </form>
      </GridContainer>
    </MainContainer>
  );
};

SignUp.propTypes = {};

export default SignUp;
