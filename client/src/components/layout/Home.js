import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Logo from '../../img/logo.svg';
import {
  FlexWrapper,
  MainContainer,
  GridContainer,
  StyledPaper as Paper,
  GridItemImg,
  StyledButton as Button,
  StyledLink as Link,
  H1,
  H3,
} from '../styled';

const Home = (props) => {
  return (
    <MainContainer>
      <GridContainer container>
        <GridItemImg
          container
          item
          xs={12}
          sm={12}
          md={4}
          justify='center'
          alignItems='center'
        >
          <img
            src={Logo}
            style={{ minWidth: '35%', maxWidth: '40%', maxHeight: '70%' }}
            alt='Bitter Logo'
          />
        </GridItemImg>
        <Grid
          container
          item
          direction='column-reverse'
          justify='center'
          alignItems='center'
          sm={12}
          md={8}
        >
          <Paper elevation={1} $lg>
            <H1 $mB primary>
              Life Is Bitter
            </H1>

            <H3 $mB>Sweeten it up a bit today.</H3>

            <FlexWrapper column>
              <Link to='/signup' $mB $mT>
                <Button
                  variant='contained'
                  color='primary'
                  fullWidth={true}
                  $mB
                  $medium
                >
                  Sign Up
                </Button>
              </Link>
              <Link to='/login'>
                <Button
                  variant='outlined'
                  color='primary'
                  fullWidth={true}
                  $medium
                >
                  Login
                </Button>
              </Link>
            </FlexWrapper>
          </Paper>
        </Grid>
      </GridContainer>
    </MainContainer>
  );
};

Home.propTypes = {};

export default Home;
